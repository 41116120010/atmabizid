import { Github, Mail, ExternalLink } from "lucide-react";

// ATMA Logo URL
const LOGO_URL =
  "https://www.daffiq.love/image/atma-final.jpeg";

const quickLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Produk", href: "#product" },
  { label: "Teknologi", href: "#tech" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Tim", href: "#team" },
  { label: "Dashboard", href: "#dashboard" },
];

const techLinks = [
  { label: "IoT Architecture", href: "#tech" },
  { label: "Microservice API", href: "#tech" },
  { label: "Security Layer", href: "#tech" },
  { label: "Network Config", href: "#tech" },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#060606] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={LOGO_URL}
                alt="ATMA Logo"
                className="w-9 h-9 object-contain rounded-[8px]"
              />
              <span className="text-white font-inter font-semibold text-[18px] tracking-[0.02em]">
                ATMA
              </span>
            </div>
            <p className="text-[#666] text-[14px] font-inter leading-[1.7] max-w-[320px] mb-6">
              Mesin pengering kopi berbasis IoT — proyek kolaboratif semester 4
              yang mengintegrasikan 5 mata kuliah dalam satu solusi teknologi.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/atmacoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[8px] border border-white/5 bg-white/[0.02] flex items-center justify-center text-[#555] hover:text-white hover:border-white/10 transition-all"
              >
                <Github size={15} />
              </a>
              <a
                href="mailto:help@atma.biz.id"
                className="w-9 h-9 rounded-[8px] border border-white/5 bg-white/[0.02] flex items-center justify-center text-[#555] hover:text-white hover:border-white/10 transition-all"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <span className="text-[#666] text-[11px] font-inter font-semibold tracking-[0.12em] uppercase block mb-5">
              Navigasi
            </span>
            <div className="flex flex-col gap-[10px]">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="text-[#555] hover:text-white text-[13px] font-inter transition-colors flex items-center gap-2 group"
                >
                  {link.label}
                  <ExternalLink
                    size={10}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Tech Links */}
          <div className="md:col-span-4">
            <span className="text-[#666] text-[11px] font-inter font-semibold tracking-[0.12em] uppercase block mb-5">
              Teknologi
            </span>
            <div className="flex flex-col gap-[10px]">
              {techLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="text-[#555] hover:text-white text-[13px] font-inter transition-colors flex items-center gap-2 group"
                >
                  {link.label}
                  <ExternalLink
                    size={10}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex items-center justify-center">
          <span className="text-[#333] text-[12px] font-inter">
            © 2026 ATMA. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
