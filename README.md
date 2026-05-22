# atma.biz.id — ATMA IoT Coffee Dryer

Website branding untuk proyek **ATMA** — Mesin Pengering Kopi Berbasis IoT. Proyek kolaboratif semester 4 yang mengintegrasikan 5 mata kuliah (IoT, Microservice, Keamanan Komputer, Administrasi Jaringan, Kewirausahaan).

## Tech Stack

- **Framework:** [React Router v7](https://reactrouter.com/) (SPA + Prerender)
- **Build Tool:** [Vite 6](https://vite.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Language:** TypeScript (strict mode)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Self-hosted Inter + Crimson Text (woff2)
- **Images:** WebP with JPEG fallback via `<picture>`
- **Hosting:** [Vercel](https://vercel.com/) (static)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run typecheck

# Format code
npm run format
```

Dev server berjalan di `http://localhost:4000`.

## Project Structure

```
src/
├── app/
│   ├── root.tsx        # Layout, meta tags, JSON-LD schema
│   ├── routes.ts       # Route definitions
│   ├── page.tsx        # Main page (composes all sections)
│   └── global.css      # Tailwind + self-hosted @font-face
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ProductSection.tsx
│   ├── TechSection.tsx
│   ├── RoadmapSection.tsx
│   ├── TeamSection.tsx
│   ├── DashboardSection.tsx
│   ├── Footer.tsx
│   ├── ErrorBoundary.tsx
│   └── OptimizedImage.tsx
├── data/               # Static data (separated from components)
│   ├── navigation.ts
│   ├── product.ts
│   ├── roadmap.ts
│   ├── team.ts
│   └── tech.ts
├── types/
│   └── index.ts        # All TypeScript interfaces
└── config.ts           # Centralized config + image helpers
public/
├── fonts/              # Self-hosted woff2 files
├── image/              # Optimized images (WebP + JPEG)
├── robots.txt
└── sitemap.xml
```

## Deployment

Auto-deploy ke Vercel saat push ke `main`. Konfigurasi di `vercel.json`:

- Security headers (CSP, HSTS, X-Frame-Options, dll.)
- Static asset caching (1 tahun, immutable)
- SPA fallback rewrite
- Prerendered HTML untuk SEO

## Tim ATMA

| Nama | Role |
|------|------|
| Ihsanul Hafizh Suparman | IoT Engineer |
| Rahmat Priyadi | Backend Developer |
| M. Radithya Rafif | Security Engineer |
| Daffiq Trie Octorino | Network Admin |

## License

MIT © Tim ATMA - Politeknik Negeri Padang
