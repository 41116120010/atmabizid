import type { NavLink } from "../types";

export const navLinks: NavLink[] = [
  { label: "Beranda", href: "#hero" },
  { label: "Produk", href: "#product" },
  { label: "Teknologi", href: "#tech" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Tim", href: "#team" },
];

// Footer uses the same links as navbar
export const quickLinks = navLinks;

export const techLinks: NavLink[] = [
  { label: "IoT & Sensor", href: "#tech" },
  { label: "Microservice", href: "#tech" },
  { label: "Keamanan", href: "#tech" },
  { label: "Jaringan", href: "#tech" },
];
