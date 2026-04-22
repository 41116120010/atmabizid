import { useEffect, useState } from "react";
import { Cpu, Wifi, Shield } from "lucide-react";

const stats = [
  { label: "Sensor Aktif", value: "2+", icon: Cpu },
  { label: "IoT Connected", value: "Real-time", icon: Wifi },
  { label: "Encrypted", value: "AES-256", icon: Shield },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProduct = () => {
    const el = document.getElementById("product");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-[120px] md:pt-[160px] pb-20"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#C8956C]/8 blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#C8956C]/5 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-[7px] rounded-[8px] border border-[#C8956C]/20 bg-[#C8956C]/5 mb-8">
              <div className="w-[6px] h-[6px] rounded-full bg-[#C8956C] animate-pulse" />
              <span className="text-[#C8956C] text-[12px] font-inter font-medium tracking-[0.08em] uppercase">
                Dalam Pengembangan
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="transition-all duration-700 delay-100"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <span className="block text-[#666] text-[14px] md:text-[16px] font-inter font-medium tracking-[0.15em] uppercase mb-4">
              IoT Coffee Dryer Machine
            </span>
            <span className="block text-white font-crimson-text text-[48px] md:text-[72px] lg:text-[88px] font-bold leading-[0.95] tracking-[-0.02em]">
              Pengeringan Kopi
            </span>
            <span className="block text-[#C8956C] font-crimson-text text-[48px] md:text-[72px] lg:text-[88px] font-bold leading-[0.95] tracking-[-0.02em]">
              Cerdas & Presisi
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-8 max-w-[520px] text-[#888] text-[15px] md:text-[17px] font-inter font-normal leading-[1.7] transition-all duration-700 delay-200"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Mesin pengering kopi berbasis IoT yang memantau suhu dan kelembaban
            secara real-time. Dibangun oleh Tim ATMA dengan arsitektur
            Edge Computing & Microservice yang aman dan scalable.
          </p>

          {/* CTA */}
          <div
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-300"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <button
              onClick={scrollToProduct}
              className="px-8 py-[13px] bg-[#C8956C] hover:bg-[#B8855C] text-[#0A0A0A] text-[14px] font-inter font-semibold rounded-[10px] transition-all duration-200 hover:shadow-lg hover:shadow-[#C8956C]/20"
            >
              Jelajahi Produk
            </button>
            <a
              href="#roadmap"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("roadmap");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-[13px] border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-[14px] font-inter font-medium rounded-[10px] transition-all duration-200"
            >
              Lihat Progress
            </a>
          </div>

          {/* Stats */}
          <div
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-[600px] transition-all duration-700 delay-[400ms]"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-2 p-5 rounded-[12px] border border-white/5 bg-white/[0.02]"
                >
                  <Icon size={18} className="text-[#C8956C]" />
                  <span className="text-white font-inter font-semibold text-[16px]">
                    {stat.value}
                  </span>
                  <span className="text-[#666] font-inter text-[11px] tracking-[0.06em] uppercase">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
