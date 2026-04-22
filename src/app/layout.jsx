"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <title>ATMA - Mesin Pengering Kopi Berbasis IoT</title>
        <meta
          name="description"
          content="ATMA adalah mesin pengering kopi berbasis IoT yang memantau suhu dan kelembaban secara real-time saat ini."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link
          rel="icon"
          href="https://ucarecdn.com/0360c109-8e66-47e5-ad0c-711974121247/-/format/auto/"
        />

        {/* Open Graph / Social Media */}
        <meta
          property="og:title"
          content="ATMA - Mesin Pengering Kopi Berbasis IoT"
        />
        <meta
          property="og:description"
          content="ATMA adalah mesin pengering kopi berbasis IoT yang memantau suhu dan kelembaban secara real-time saat ini."
        />
        <meta
          property="og:image"
          content="https://ucarecdn.com/0360c109-8e66-47e5-ad0c-711974121247/-/format/auto/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ATMA - Mesin Pengering Kopi Berbasis IoT"
        />
        <meta
          name="twitter:description"
          content="ATMA adalah mesin pengering kopi berbasis IoT yang memantau suhu dan kelembaban secara real-time saat ini."
        />
        <meta
          name="twitter:image"
          content="https://ucarecdn.com/0360c109-8e66-47e5-ad0c-711974121247/-/format/auto/"
        />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
