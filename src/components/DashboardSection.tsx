import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";
import {
  Thermometer,
  Droplets,
  Activity,
  WifiOff,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

interface MockDataPoint {
  time: string;
  temp: number;
  humidity: number;
}

interface MiniChartProps {
  data: MockDataPoint[];
  dataKey: "temp" | "humidity";
  color: string;
  height?: number;
}

function generateMockData(): MockDataPoint[] {
  const now = Date.now();
  const data: MockDataPoint[] = [];
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

function MiniChart({ data, dataKey, color, height = 60 }: MiniChartProps) {
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
      aria-hidden="true"
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
  const { ref: sectionRef, visible } = useInView(0.1);
  const [mockData, setMockData] = useState<MockDataPoint[]>([]);

  useEffect(() => {
    setMockData(generateMockData());
  }, []);

  const latestTemp =
    mockData.length > 0 ? mockData[mockData.length - 1].temp : 0;
  const latestHumidity =
    mockData.length > 0 ? mockData[mockData.length - 1].humidity : 0;

  const gaugeCards: {
    label: string;
    value: string;
    icon: LucideIcon;
    color: string;
    chartKey: "temp" | "humidity";
    range: string;
  }[] = [
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
      aria-labelledby="dashboard-heading"
      className="relative py-28 md:py-36 bg-[#0A0A0A]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[1000px] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div
            className={`max-w-[500px] fade-in-up ${visible ? 'visible' : ''}`}
          >
            <span className="text-[#C8956C] text-[12px] font-inter font-medium tracking-[0.12em] uppercase">
              IoT Dashboard
            </span>
            <h2 id="dashboard-heading" className="mt-4 text-white font-crimson-text text-[36px] md:text-[48px] font-bold leading-[1.1]">
              Live
              <span className="text-[#C8956C]"> Monitoring</span>
            </h2>
            <p className="mt-5 text-[#A3A3A3] text-[15px] font-inter leading-[1.7]">
              Preview dashboard monitoring real-time. Data di bawah ini adalah
              simulasi yang nantinya akan terhubung ke sensor asli setelah hardware siap.
            </p>
          </div>

          <div
            className={`flex items-center gap-3 delay-200 fade-in-up-sm ${visible ? 'visible' : ''}`}
          >
            {/* TODO(Phase-3): Replace with real sensor WebSocket connection */}
            <div className="flex items-center gap-2 px-4 py-[9px] rounded-[8px] border border-[#E8734A]/20 bg-[#E8734A]/5">
              <WifiOff size={14} className="text-[#E8734A]" />
              <span className="text-[12px] font-inter font-medium text-[#E8734A]">
                Demo Mode
              </span>
            </div>
            <button
              onClick={() => setMockData(generateMockData())}
              className="w-9 h-9 flex items-center justify-center rounded-[8px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] text-[#9A9A9A] hover:text-white transition-all"
              aria-label="Refresh Data"
            >
              <RefreshCw size={14} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {gaugeCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className={`p-6 md:p-7 rounded-[14px] border border-white/5 bg-white/[0.015] fade-in-up ${visible ? 'visible' : ''}`}
                style={{
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
                      <span className="text-[#9A9A9A] text-[11px] font-inter">
                        {card.range}
                      </span>
                    </div>
                  </div>
                  <span className="text-white font-inter font-bold text-[28px]">
                    {card.value}
                  </span>
                </div>

                {mockData.length > 0 && (
                  <MiniChart
                    data={mockData}
                    dataKey={card.chartKey}
                    color={card.color}
                    height={70}
                  />
                )}

                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#777] text-[10px] font-inter">
                    24 jam lalu
                  </span>
                  <span className="text-[#777] text-[10px] font-inter">
                    Sekarang
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`p-5 md:p-6 rounded-[14px] border border-white/5 bg-white/[0.01] delay-[500ms] fade-in-up-sm ${visible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Activity size={14} className="text-[#C8956C]" />
            <span className="text-[#999] text-[12px] font-inter font-medium tracking-[0.06em] uppercase">
              Status Sistem
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Sensor DHT", status: "Direncanakan", color: "#9A9A9A" },
              { label: "WiFi Module", status: "Direncanakan", color: "#9A9A9A" },
              { label: "API Gateway", status: "Direncanakan", color: "#9A9A9A" },
              { label: "Database", status: "Direncanakan", color: "#9A9A9A" },
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
                  <span className="text-[#9A9A9A] text-[10px] font-inter">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-8 flex items-center gap-3 px-5 py-4 rounded-[10px] border border-[#C8956C]/10 bg-[#C8956C]/[0.03] max-w-fit delay-[600ms] fade-in-up-sm ${visible ? 'visible' : ''}`}
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
