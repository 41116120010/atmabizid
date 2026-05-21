import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import type { ReactNode } from 'react';
import './global.css';

export const links = () => [];

export const meta = () => [
  { charSet: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { title: 'ATMA - Mesin Pengering Kopi Berbasis IoT' },
  {
    name: 'description',
    content:
      'ATMA adalah mesin pengering kopi berbasis IoT yang memantau suhu dan kelembaban secara real-time.',
  },
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
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <Meta />
        <Links />
        <link rel="icon" type="image/x-icon" href="/image/atma-final.ico" />
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
