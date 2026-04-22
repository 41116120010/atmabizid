"use client";

import { useEffect, useRef, useState } from "react";
import { Cpu, Server, Shield, Globe, Database, Lock } from "lucide-react";

const layers = [
  {
    label: "DEVICE LAYER",
    title: "IoT & Sensor",
    desc: "Mikrokontroler membaca data suhu dan kelembaban dari sensor, lalu mengirimkan ke cloud.",
    icon: Cpu,
    tags: ["ESP32/Arduino", "DHT Sensor", "MQTT Protocol"],
    color: "#C8956C",
  },
  {
    label: "SERVICE LAYER",
    title: "Microservice Architecture",
    desc: "Data diproses melalui arsitektur microservice yang modular, scalable, dan mudah di-maintain.",
    icon: Server,
    tags: ["REST API", "API Gateway", "Message Queue"],
    color: "#7C9CBF",
  },
  {
    label: "SECURITY LAYER",
    title: "Keamanan & Enkripsi",
    desc: "Seluruh transmisi data dilindungi enkripsi end-to-end dengan autentikasi berlapis.",
    icon: Shield,
    tags: ["TLS/SSL", "Token Auth", "Firewall"],
    color: "#8BC49E",
  },
  {
    label: "NETWORK LAYER",
    title: "Administrasi Jaringan",
    desc: "Infrastruktur jaringan dikonfigurasi untuk keandalan tinggi dan latensi rendah.",
    icon: Globe,
    tags: ["VLAN Config", "DNS Management", "Load Balancer"],
    color: "#B89ACA",
  },
];

const subjects = [
  { name: "Internet of Things", icon: Cpu },
  { name: "Pemrograman Microservice", icon: Database },
  { name: "Keamanan Komputer & Jaringan", icon: Lock },
  { name: "Administrasi Jaringan & Server", icon: Globe },
  { name: "Kewirausahaan", icon: Server },
];

export default function TechSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#060606]"
    >
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
            Arsitektur Sistem
          </span>
          <h2 className="mt-4 text-white font-crimson-text text-[36px] md:text-[48px] font-bold leading-[1.1]">
            Teknologi di Balik
            <span className="text-[#C8956C]"> ATMA</span>
          </h2>
          <p className="mt-5 text-[#777] text-[15px] font-inter leading-[1.7]">
            Proyek ini mengintegrasikan 5 mata kuliah semester 4 ke dalam satu
            sistem yang utuh. Setiap layer dirancang untuk saling melengkapi.
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {layers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.label}
                className="relative p-7 rounded-[14px] border border-white/5 bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(25px)",
                  transitionDelay: `${200 + i * 120}ms`,
                  transitionDuration: "700ms",
                }}
              >
                {/* Layer Label */}
                <span
                  className="text-[10px] font-inter font-semibold tracking-[0.15em] uppercase mb-4 block"
                  style={{ color: layer.color }}
                >
                  {layer.label}
                </span>

                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-[8px] flex items-center justify-center"
                    style={{ backgroundColor: `${layer.color}15` }}
                  >
                    <Icon size={18} style={{ color: layer.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-inter font-semibold text-[15px] mb-2">
                      {layer.title}
                    </h3>
                    <p className="text-[#777] font-inter text-[13px] leading-[1.7] mb-4">
                      {layer.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {layer.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-[5px] rounded-[6px] text-[11px] font-inter font-medium border"
                          style={{
                            color: layer.color,
                            borderColor: `${layer.color}20`,
                            backgroundColor: `${layer.color}08`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subjects Integration */}
        <div
          className="p-6 md:p-8 rounded-[14px] border border-white/5 bg-white/[0.01] transition-all duration-700 delay-[700ms]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <span className="text-[#666] text-[11px] font-inter font-medium tracking-[0.1em] uppercase block mb-5">
            Integrasi Mata Kuliah Semester 4
          </span>
          <div className="flex flex-wrap gap-3">
            {subjects.map((subj) => {
              const Icon = subj.icon;
              return (
                <div
                  key={subj.name}
                  className="flex items-center gap-2 px-4 py-[9px] rounded-[8px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                >
                  <Icon size={14} className="text-[#C8956C]" />
                  <span className="text-[#ccc] text-[12px] font-inter font-medium">
                    {subj.name}
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
