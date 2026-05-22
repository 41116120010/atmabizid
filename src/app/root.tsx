import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import type { ReactNode } from 'react';
import './global.css';

export const meta = () => [
  { charSet: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { title: 'ATMA - Mesin Pengering Kopi Berbasis IoT' },
  {
    name: 'description',
    content:
      'ATMA adalah mesin pengering kopi berbasis IoT yang memantau suhu dan kelembaban secara real-time.',
  },
  { name: 'author', content: 'Tim ATMA - Politeknik Negeri Padang' },
  { name: 'robots', content: 'index, follow' },
  { property: 'og:title', content: 'ATMA - Mesin Pengering Kopi Berbasis IoT' },
  {
    property: 'og:description',
    content:
      'ATMA adalah mesin pengering kopi berbasis IoT yang memantau suhu dan kelembaban secara real-time.',
  },
  {
    property: 'og:image',
    content: 'https://atma.biz.id/image/atma-final.jpeg',
  },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://atma.biz.id' },
  { property: 'og:site_name', content: 'ATMA' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'ATMA - Mesin Pengering Kopi Berbasis IoT' },
  {
    name: 'twitter:description',
    content:
      'ATMA adalah mesin pengering kopi berbasis IoT yang memantau suhu dan kelembaban secara real-time.',
  },
  {
    name: 'twitter:image',
    content: 'https://atma.biz.id/image/atma-final.jpeg',
  },
  { name: 'theme-color', content: '#0A0A0A' },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <Meta />
        <Links />
        <link rel="canonical" href="https://atma.biz.id/" />
        <link rel="icon" type="image/x-icon" href="/image/atma-final.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'ATMA - Mesin Pengering Kopi Berbasis IoT',
              description: 'Mesin pengering kopi berbasis IoT yang memantau suhu dan kelembaban secara real-time.',
              brand: { '@type': 'Organization', name: 'Tim ATMA' },
              url: 'https://atma.biz.id',
              image: 'https://atma.biz.id/image/atma-final.jpeg',
              manufacturer: {
                '@type': 'Organization',
                name: 'Tim ATMA - Politeknik Negeri Padang',
                url: 'https://atma.biz.id',
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
