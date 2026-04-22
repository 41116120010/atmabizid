import { useEffect, useRef, useState } from "react";
import {
  Thermometer,
  Droplets,
  Activity,
  Wifi,
  WifiOff,
  RefreshCw,
} from "lucide-react";

function generateMockData() {
  const now = Date.now();
  const data = [];
  for (let i = 23; i >= 0; i--) {
    data.push({
      time: new Date(now - i * 3600000).toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      temp: 45 + Math.random() * 15,
      humidity: 40 + Math.random() * 25,
    });
  }
  return data;
}

function MiniChart({ data, dataKey, color, height = 60 }) {
  const values = data.map((d) => d[dataKey]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const width = 100;

  const points = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * width;
      const y = height - ((v - min) / range) * (height - 8) - 4;
      return `${x},${y}`;
    })
    .join(" ");

  const areaPoints = `0,${height} ${points} ${width},${height}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      style={{ height }}
    >
      <defs>
        <linearGradient id={`grad-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.15" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#grad-${dataKey})`} />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DashboardSection() {
  const [visible, setVisible] = useState(false);
  const [mockData, setMockData] = useState([]);
  const [isOnline, setIsOnline] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setMockData(generateMockData());
  }, []);

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

  const latestTemp =
    mockData.length > 0 ? mockData[mockData.length - 1].temp : 0;
  const latestHumidity =
    mockData.length > 0 ? mockData[mockData.length - 1].humidity : 0;

  const gaugeCards = [
    {
      label: "Suhu",
      value: `${latestTemp.toFixed(1)}°C`,
      icon: Thermometer,
      color: "#E8734A",
      chartKey: "temp",
      range: "40 – 60°C optimal",
    },
    {
      label: "Kelembaban",
      value: `${latestHumidity.toFixed(1)}%`,
      icon: Droplets,
      color: "#5B9BD5",
      chartKey: "humidity",
      range: "40 – 65% optimal",
    },
  ];

  return (
    <section
      id="dashboard"
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
              IoT Dashboard
            </span>
            <h2 className="mt-4 text-white font-crimson-text text-[36px] md:text-[48px] font-bold leading-[1.1]">
              Live
              <span className="text-[#C8956C]"> Monitoring</span>
            </h2>
            <p className="mt-5 text-[#777] text-[15px] font-inter leading-[1.7]">
              Preview dashboard monitoring real-time. Data di bawah ini adalah
              simulasi yang nantinya akan terhubung ke sensor asli setelah hardware siap.
            </p>
          </div>

          {/* Connection Status */}
          <div
            className="flex items-center gap-3 transition-all duration-700 delay-200"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div
              className={`flex items-center gap-2 px-4 py-[9px] rounded-[8px] border ${
                isOnline
                  ? "border-[#8BC49E]/20 bg-[#8BC49E]/5"
                  : "border-[#E8734A]/20 bg-[#E8734A]/5"
              }`}
            >
              {isOnline ? (
                <Wifi size={14} className="text-[#8BC49E]" />
              ) : (
                <WifiOff size={14} className="text-[#E8734A]" />
              )}
              <span
                className={`text-[12px] font-inter font-medium ${
                  isOnline ? "text-[#8BC49E]" : "text-[#E8734A]"
                }`}
              >
                {isOnline ? "Sensor Online" : "Demo Mode"}
              </span>
            </div>
            <button
              onClick={() => setMockData(generateMockData())}
              className="w-9 h-9 flex items-center justify-center rounded-[8px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] text-[#666] hover:text-white transition-all"
            >
              <RefreshCw size={14} />
            </button>
          </div>
        </div>

        {/* Gauge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {gaugeCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="p-6 md:p-7 rounded-[14px] border border-white/5 bg-white/[0.015] transition-all duration-700"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(25px)",
                  transitionDelay: `${300 + i * 120}ms`,
                }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-[8px] flex items-center justify-center"
                      style={{ backgroundColor: `${card.color}15` }}
                    >
                      <Icon size={16} style={{ color: card.color }} />
                    </div>
                    <div>
                      <span className="text-[#999] text-[12px] font-inter block">
                        {card.label}
                      </span>
                      <span className="text-[#555] text-[11px] font-inter">
                        {card.range}
                      </span>
                    </div>
                  </div>
                  <span className="text-white font-inter font-bold text-[28px]">
                    {card.value}
                  </span>
                </div>

                {/* Chart */}
                {mockData.length > 0 && (
                  <MiniChart
                    data={mockData}
                    dataKey={card.chartKey}
                    color={card.color}
                    height={70}
                  />
                )}

                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#333] text-[10px] font-inter">
                    24h ago
                  </span>
                  <span className="text-[#333] text-[10px] font-inter">
                    Now
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* System Status */}
        <div
          className="p-5 md:p-6 rounded-[14px] border border-white/5 bg-white/[0.01] transition-all duration-700 delay-[500ms]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Activity size={14} className="text-[#C8956C]" />
            <span className="text-[#999] text-[12px] font-inter font-medium tracking-[0.06em] uppercase">
              System Status
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Sensor DHT", status: "Planned", color: "#555" },
              { label: "WiFi Module", status: "Planned", color: "#555" },
              { label: "API Gateway", status: "Planned", color: "#555" },
              { label: "Database", status: "Planned", color: "#555" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-3 rounded-[8px] bg-white/[0.02]"
              >
                <div
                  className="w-[8px] h-[8px] rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <div>
                  <span className="text-[#ccc] text-[12px] font-inter font-medium block">
                    {item.label}
                  </span>
                  <span className="text-[#555] text-[10px] font-inter">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div
          className="mt-8 flex items-center gap-3 px-5 py-4 rounded-[10px] border border-[#C8956C]/10 bg-[#C8956C]/[0.03] max-w-fit transition-all duration-700 delay-[600ms]"
          style={{
            opacity: visible ? 1 : 0,
          }}
        >
          <div className="w-2 h-2 rounded-full bg-[#C8956C]/60" />
          <span className="text-[#999] text-[13px] font-inter">
            Dashboard akan terhubung ke sensor real setelah Phase 3 selesai
          </span>
        </div>
      </div>
    </section>
  );
}
