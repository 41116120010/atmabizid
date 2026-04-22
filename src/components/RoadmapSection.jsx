import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Circle, Clock, ChevronRight } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "Research & Planning",
    period: "Minggu 1 – 2",
    status: "completed",
    items: [
      { text: "Riset kebutuhan pengeringan kopi", done: true },
      { text: "Pemilihan sensor (DHT22/DHT11)", done: true },
      { text: "Desain arsitektur sistem", done: true },
      { text: "Pembagian tugas tim", done: true },
    ],
  },
  {
    phase: "Phase 2",
    title: "Hardware Assembly",
    period: "Minggu 3 – 5",
    status: "upcoming",
    items: [
      { text: "Perakitan mikrokontroler & sensor", done: false },
      { text: "Kalibrasi sensor suhu & kelembaban", done: false },
      { text: "Integrasi dengan modul WiFi", done: false },
      { text: "Testing hardware prototype", done: false },
    ],
  },
  {
    phase: "Phase 3",
    title: "Software & Microservice",
    period: "Minggu 5 – 8",
    status: "upcoming",
    items: [
      { text: "Pengembangan API Gateway", done: false },
      { text: "Service: Data Collection", done: false },
      { text: "Service: Data Processing", done: false },
      { text: "Dashboard monitoring web", done: false },
    ],
  },
  {
    phase: "Phase 4",
    title: "Security & Deployment",
    period: "Minggu 8 – 10",
    status: "upcoming",
    items: [
      { text: "Implementasi enkripsi data", done: false },
      { text: "Konfigurasi jaringan & server", done: false },
      { text: "Penetration testing", done: false },
      { text: "Deployment & dokumentasi", done: false },
    ],
  },
];

function getStatusConfig(status) {
  if (status === "completed")
    return { color: "#8BC49E", bg: "#8BC49E", label: "Selesai" };
  if (status === "in-progress")
    return { color: "#C8956C", bg: "#C8956C", label: "Sedang Dikerjakan" };
  return { color: "#555", bg: "#555", label: "Akan Datang" };
}

export default function RoadmapSection() {
  const [visible, setVisible] = useState(false);
  const [expandedPhase, setExpandedPhase] = useState(1);
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

  const completedCount = phases.filter((p) => p.status === "completed").length;
  const totalCount = phases.length;
  const progressPercent = Math.round(
    (phases.reduce((acc, p) => acc + p.items.filter((i) => i.done).length, 0) /
      phases.reduce((acc, p) => acc + p.items.length, 0)) *
      100,
  );

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#0A0A0A]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[1000px] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div
            className="max-w-[500px] transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <span className="text-[#C8956C] text-[12px] font-inter font-medium tracking-[0.12em] uppercase">
              Development Roadmap
            </span>
            <h2 className="mt-4 text-white font-crimson-text text-[36px] md:text-[48px] font-bold leading-[1.1]">
              Progress
              <span className="text-[#C8956C]"> Pengembangan</span>
            </h2>
          </div>

          {/* Progress Bar */}
          <div
            className="flex items-center gap-5 transition-all duration-700 delay-200"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="text-right">
              <span className="text-white font-inter font-bold text-[28px]">
                {progressPercent}%
              </span>
              <span className="block text-[#666] text-[11px] font-inter tracking-[0.06em] uppercase mt-1">
                {completedCount}/{totalCount} Phase
              </span>
            </div>
            <div className="w-[120px] h-[6px] rounded-[3px] bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-[3px] bg-gradient-to-r from-[#C8956C] to-[#8BC49E] transition-all duration-1000 delay-500"
                style={{ width: visible ? `${progressPercent}%` : "0%" }}
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (desktop) */}
          <div className="hidden md:block absolute left-[22px] top-0 bottom-0 w-px bg-white/5" />

          <div className="flex flex-col gap-4">
            {phases.map((phase, i) => {
              const config = getStatusConfig(phase.status);
              const isExpanded = expandedPhase === i;

              return (
                <div
                  key={phase.phase}
                  className="transition-all duration-700"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(25px)",
                    transitionDelay: `${300 + i * 120}ms`,
                  }}
                >
                  <button
                    onClick={() => setExpandedPhase(isExpanded ? -1 : i)}
                    className="w-full text-left"
                  >
                    <div
                      className={`flex items-center gap-5 p-5 md:p-6 rounded-[12px] border transition-all duration-200 ${
                        isExpanded
                          ? "border-white/10 bg-white/[0.03]"
                          : "border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/8"
                      }`}
                    >
                      {/* Status Dot */}
                      <div className="relative flex-shrink-0">
                        <div
                          className="w-[12px] h-[12px] rounded-full border-2"
                          style={{
                            borderColor: config.color,
                            backgroundColor:
                              phase.status === "completed"
                                ? config.color
                                : "transparent",
                          }}
                        />
                        {phase.status === "in-progress" && (
                          <div
                            className="absolute inset-0 w-[12px] h-[12px] rounded-full"
                            style={{
                              backgroundColor: config.color,
                              opacity: 0.3,
                            }}
                          />
                        )}
                      </div>

                      {/* Phase Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-white font-inter font-semibold text-[15px]">
                            {phase.title}
                          </span>
                          <span
                            className="px-2 py-[3px] rounded-[5px] text-[10px] font-inter font-semibold tracking-[0.05em] uppercase"
                            style={{
                              color: config.color,
                              backgroundColor: `${config.bg}12`,
                            }}
                          >
                            {config.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-[#555] text-[12px] font-inter">
                            {phase.phase}
                          </span>
                          <span className="text-[#333] text-[12px]">·</span>
                          <span className="text-[#555] text-[12px] font-inter flex items-center gap-1">
                            <Clock size={11} />
                            {phase.period}
                          </span>
                        </div>
                      </div>

                      {/* Expand Icon */}
                      <ChevronRight
                        size={18}
                        className={`text-[#555] transition-transform duration-200 flex-shrink-0 ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-2 ml-0 md:ml-[42px] p-5 md:p-6 rounded-[12px] border border-white/5 bg-white/[0.01]">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {phase.items.map((item) => (
                          <div
                            key={item.text}
                            className="flex items-start gap-3"
                          >
                            {item.done ? (
                              <CheckCircle2
                                size={16}
                                className="text-[#8BC49E] mt-[2px] flex-shrink-0"
                              />
                            ) : (
                              <Circle
                                size={16}
                                className="text-[#333] mt-[2px] flex-shrink-0"
                              />
                            )}
                            <span
                              className={`text-[13px] font-inter leading-[1.5] ${
                                item.done ? "text-[#999]" : "text-[#555]"
                              }`}
                            >
                              {item.text}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Mini progress */}
                      <div className="mt-5 pt-4 border-t border-white/5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[#555] text-[11px] font-inter">
                            Progress
                          </span>
                          <span className="text-[#777] text-[11px] font-inter">
                            {phase.items.filter((i) => i.done).length}/
                            {phase.items.length}
                          </span>
                        </div>
                        <div className="w-full h-[4px] rounded-[2px] bg-white/5 overflow-hidden">
                          <div
                            className="h-full rounded-[2px] transition-all duration-500"
                            style={{
                              width: `${(phase.items.filter((i) => i.done).length / phase.items.length) * 100}%`,
                              backgroundColor: config.color,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
