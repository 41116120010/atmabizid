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
    content: 'https://ucarecdn.com/0360c109-8e66-47e5-ad0c-711974121247/-/format/auto/',
  },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'ATMA - Mesin Pengering Kopi Berbasis IoT' },
  {
    name: 'twitter:description',
    content:
      'ATMA adalah mesin pengering kopi berbasis IoT yang memantau suhu dan kelembaban secara real-time.',
  },
  {
    name: 'twitter:image',
    content: 'https://ucarecdn.com/0360c109-8e66-47e5-ad0c-711974121247/-/format/auto/',
  },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="https://ucarecdn.com/0360c109-8e66-47e5-ad0c-711974121247/-/format/auto/"
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
