import { Cpu, Server, Shield, Activity, Database, Lock, Globe } from 'lucide-react';
import type { TechLayer, Subject } from '../types';

export const layers: TechLayer[] = [
	{
		label: 'DEVICE & CLIENT LAYER',
		title: 'IoT & Mobile App',
		desc: 'ESP32 membaca data suhu & kelembaban dari sensor SHT31-D secara real-time, dikirim ke cloud via MQTT. Pemantauan dilakukan melalui aplikasi Flutter mobile dengan autentikasi Bearer Token.',
		icon: Cpu,
		tags: ['ESP32', 'SHT31-D Sensor', 'MQTT Protocol', 'Flutter (Mobile App)'],
		color: '#C8956C',
	},
	{
		label: 'SERVICE LAYER',
		title: 'Backend & Infrastructure',
		desc: 'Microservice dibangun dengan Spring Boot dan dikontainerisasi menggunakan Docker. Seluruh layanan di-deploy di AWS EC2 dengan penyimpanan data terstruktur pada Amazon RDS (MySQL).',
		icon: Server,
		tags: ['Spring Boot', 'Docker', 'AWS EC2', 'Amazon RDS'],
		color: '#7C9CBF',
	},
	{
		label: 'MONITORING LAYER',
		title: 'Observability & Log Management',
		desc: 'Metrik sistem dipantau secara real-time menggunakan Prometheus & Grafana. Log terpusat dikelola melalui ELK Stack (Elasticsearch, Logstash, Kibana) untuk analisis dan debugging.',
		icon: Activity,
		tags: ['Prometheus', 'Grafana', 'Logstash', 'Elastic Search', 'Kibana'],
		color: '#B89ACA',
	},
	{
		label: 'SECURITY LAYER',
		title: 'Keamanan & Hardening',
		desc: "Server berbasis Debian 13 diperkuat dengan UFW & Fail2Ban untuk perlindungan aktif. Nginx berperan sebagai reverse proxy dengan TLS multi-domain dari Let's Encrypt.",
		icon: Shield,
		tags: ['Nginx', 'Debian 13', 'UFW', 'Fail2Ban', 'Multi-domain TLS'],
		color: '#8BC49E',
	},
];

export const subjects: Subject[] = [
	{ name: 'Internet of Things', icon: Cpu },
	{ name: 'Pemrograman Microservice', icon: Database },
	{ name: 'Keamanan Komputer & Jaringan', icon: Lock },
	{ name: 'Administrasi Jaringan & Server', icon: Globe },
	{ name: 'Kewirausahaan', icon: Server },
];
