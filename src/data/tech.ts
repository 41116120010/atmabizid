import { Cpu, Server, Shield, Globe, Database, Lock } from "lucide-react";
import type { TechLayer, Subject } from "../types";

export const layers: TechLayer[] = [
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

export const subjects: Subject[] = [
  { name: "Internet of Things", icon: Cpu },
  { name: "Pemrograman Microservice", icon: Database },
  { name: "Keamanan Komputer & Jaringan", icon: Lock },
  { name: "Administrasi Jaringan & Server", icon: Globe },
  { name: "Kewirausahaan", icon: Server },
];
