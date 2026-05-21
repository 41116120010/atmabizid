import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  desc: string;
  color: string;
  skills: string[];
  imgFilename: string;
  github: string;
  email: string;
}

export interface RoadmapItem {
  text: string;
  done: boolean;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  period: string;
  status: "completed" | "in-progress" | "upcoming";
  items: RoadmapItem[];
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface TechLayer {
  label: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  tags: string[];
  color: string;
}

export interface Subject {
  name: string;
  icon: LucideIcon;
}
