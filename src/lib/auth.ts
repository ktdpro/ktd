import { randomUUID } from 'crypto';

const sessions = new Map<string, number>();
const ONE_HOUR = 1000 * 60 * 60;

export function createSession(): string {
  const token = randomUUID();
  const expires = Date.now() + ONE_HOUR;
  sessions.set(token, expires);
  return token;
}

export function verifySession(token: string | null): boolean {
  if (!token) return false;
  const expiry = sessions.get(token);
  if (!expiry || Date.now() > expiry) {
    sessions.delete(token);
    return false;
  }
  return true;
}
