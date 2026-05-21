import type { RoadmapPhase } from "../types";

export const phases: RoadmapPhase[] = [
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
    status: "completed",
    items: [
      { text: "Perakitan mikrokontroler & sensor", done: true },
      { text: "Kalibrasi sensor suhu & kelembaban", done: true },
      { text: "Integrasi dengan modul WiFi", done: true },
      { text: "Testing hardware prototype", done: true },
    ],
  },
  {
    phase: "Phase 3",
    title: "Software & Microservice",
    period: "Minggu 5 – 8",
    status: "in-progress",
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
