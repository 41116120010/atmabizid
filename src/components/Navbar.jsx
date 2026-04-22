"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// ATMA Logo (Official CDN URL)
const LOGO_URL =
  "https://ucarecdn.com/0360c109-8e66-47e5-ad0c-711974121247/-/format/auto/";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Produk", href: "#product" },
  { label: "Teknologi", href: "#tech" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Tim", href: "#team" },
  { label: "Dashboard", href: "#dashboard" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#hero");
            }}
            className="flex items-center gap-3 group"
          >
            {LOGO_URL ? (
              <img
                src={LOGO_URL}
                alt="ATMA Logo"
                className="w-9 h-9 object-contain"
              />
            ) : (
              <div className="w-9 h-9 rounded-[8px] bg-gradient-to-br from-[#C8956C] to-[#8B5E3C] flex items-center justify-center">
                <span className="text-white font-inter font-bold text-[14px] tracking-wide">
                  A
                </span>
              </div>
            )}
            <span className="text-white font-inter font-semibold text-[18px] tracking-[0.02em] group-hover:text-[#C8956C] transition-colors duration-200">
              ATMA
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`px-4 py-2 rounded-[8px] text-[13px] font-inter font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-[#C8956C] bg-[#C8956C]/8"
                      : "text-[#999] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="#dashboard"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#dashboard");
            }}
            className="hidden md:flex items-center gap-2 px-5 py-[9px] bg-[#C8956C] hover:bg-[#B8855C] text-[#0A0A0A] text-[13px] font-inter font-semibold rounded-[8px] transition-all duration-200"
          >
            Live Monitor
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white/70 hover:text-white rounded-[8px] hover:bg-white/5 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A0A0A]/98 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`px-4 py-3 rounded-[8px] text-[14px] font-inter font-medium transition-colors ${
                    isActive
                      ? "text-[#C8956C] bg-[#C8956C]/8"
                      : "text-[#999] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#dashboard"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#dashboard");
              }}
              className="mt-2 px-4 py-3 bg-[#C8956C] text-[#0A0A0A] text-[14px] font-inter font-semibold rounded-[8px] text-center"
            >
              Live Monitor
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
