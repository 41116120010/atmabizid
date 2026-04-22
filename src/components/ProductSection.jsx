import { useEffect, useRef, useState } from "react";
import {
  Thermometer,
  Droplets,
  Zap,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Thermometer,
    title: "Monitoring Suhu",
    desc: "Sensor suhu presisi tinggi memantau temperatur pengeringan secara real-time untuk hasil optimal.",
  },
  {
    icon: Droplets,
    title: "Kontrol Kelembaban",
    desc: "Kelembaban udara dipantau terus-menerus untuk memastikan kadar air kopi mencapai standar ideal.",
  },
  {
    icon: Zap,
    title: "Otomasi Cerdas",
    desc: "Sistem otomatis menyesuaikan parameter pengeringan berdasarkan data sensor tanpa intervensi manual.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Seluruh data pengeringan tercatat dan dapat dianalisis untuk peningkatan kualitas berkelanjutan.",
  },
];

export default function ProductSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      id="product"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#0A0A0A]"
    >
      {/* Divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[1000px] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div
          className="max-w-[600px] mb-20 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span className="text-[#C8956C] text-[12px] font-inter font-medium tracking-[0.12em] uppercase">
            Tentang Produk
          </span>
          <h2 className="mt-4 text-white font-crimson-text text-[36px] md:text-[48px] font-bold leading-[1.1]">
            Mesin Pengering Kopi
            <span className="text-[#C8956C]"> Berbasis IoT</span>
          </h2>
          <p className="mt-5 text-[#777] text-[15px] font-inter leading-[1.7]">
            Menggabungkan teknologi Internet of Things dengan proses pengeringan
            kopi tradisional. Setiap parameter dimonitor dan dikontrol secara
            digital untuk menghasilkan biji kopi dengan kualitas terbaik.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative p-7 md:p-8 rounded-[14px] border border-white/5 bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${150 + i * 100}ms`,
                  transitionDuration: "700ms",
                }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-11 h-11 rounded-[10px] bg-[#C8956C]/10 flex items-center justify-center">
                    <Icon size={20} className="text-[#C8956C]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-inter font-semibold text-[16px] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#777] font-inter text-[14px] leading-[1.7]">
                      {feature.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-7 right-7 md:bottom-8 md:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ArrowRight size={16} className="text-[#C8956C]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div
          className="mt-12 flex items-center gap-3 px-5 py-4 rounded-[10px] border border-[#C8956C]/10 bg-[#C8956C]/[0.03] max-w-fit transition-all duration-700 delay-[600ms]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(15px)",
          }}
        >
          <div className="w-2 h-2 rounded-full bg-[#C8956C]/60" />
          <span className="text-[#999] text-[13px] font-inter">
            Fitur terus dikembangkan seiring progress pengerjaan tim
          </span>
        </div>
      </div>
    </section>
  );
}
