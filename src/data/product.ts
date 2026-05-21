import { Thermometer, Droplets, Zap, BarChart3 } from "lucide-react";
import type { Feature } from "../types";

export const features: Feature[] = [
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
