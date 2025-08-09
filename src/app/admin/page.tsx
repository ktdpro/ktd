'use client';

import { useEffect, useState, useCallback } from 'react';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
}

export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
    if (stored) setToken(stored);
  }, []);

  const fetchItems = useCallback(async () => {
    const res = await fetch('/api/portfolio', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      setItems(await res.json());
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchItems();
    }
  }, [token, fetchItems]);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      const data = await res.json();
      setToken(data.token);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('token', data.token);
      }
    } else {
      alert('Invalid credentials');
    }
  }

  async function addItem(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/portfolio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description }),
    });
    if (res.ok) {
      const item = await res.json();
      setItems([...items, item]);
      setTitle('');
      setDescription('');
    }
  }

  async function remove(id: string) {
    const res = await fetch(`/api/portfolio/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      setItems(items.filter((i) => i.id !== id));
    }
  }

  if (!token) {
    return (
      <form onSubmit={login} className="p-4 space-y-2 max-w-sm">
        <h1 className="text-xl font-bold">Admin Login</h1>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border p-2 w-full"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Login
        </button>
      </form>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Portfolio Admin</h1>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between border p-2">
            <div>
              <strong>{item.title}</strong> - {item.description}
            </div>
            <button
              onClick={() => remove(item.id)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={addItem} className="space-y-2 max-w-sm">
        <h2 className="font-semibold">Add Item</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border p-2 w-full"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2">
          Add
        </button>
      </form>
    </div>
  );
}
