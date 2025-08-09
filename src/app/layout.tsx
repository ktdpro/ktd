import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mid-Michigan Web Design | Websites by a Business Owner',
  description:
    'A web designer who gets it. With 15 years of business experience, I build websites for businesses in Mt. Pleasant, Alma, Saginaw, Midland, and beyond.',
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KT Design",
  image: "",
  telephone: "(989) 572-0348",
  description:
    "KT Design specializes in professional web design, eCommerce solutions, and SEO for businesses throughout Mid-Michigan. Based in Shepherd, MI, and run by a former business owner with 15 years of experience, we build high-converting websites to help you grow your local business online.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shepherd",
    addressRegion: "MI",
    addressCountry: "US"
  },
  areaServed: [
    { "@type": "City", name: "Shepherd" },
    { "@type": "City", name: "Mt. Pleasant" },
    { "@type": "City", name: "Alma" },
    { "@type": "City", name: "Clare" },
    { "@type": "City", name: "Saginaw" },
    { "@type": "City", name: "Midland" }
  ],
  url: "https://ktdesignpro.com"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-bg text-white`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Script
          id="schema-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
