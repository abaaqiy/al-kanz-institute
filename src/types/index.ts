export type Role = "student" | "parent" | "tutor" | "coordinator" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarInitials?: string;
  linkedChildren?: string[]; // parent only
}

export interface Programme {
  id: string;
  slug: string;
  title: string;
  description: string;
  audience: string;
  format: string;
  status: "available" | "coming-soon" | "scheduled";
  icon: string;
}

export interface ClassSession {
  id: string;
  title: string;
  tutor: string;
  time: string;      // ISO
  timezone: string;
  platform: "audio" | "video" | "self-paced";
  status: "upcoming" | "live" | "ended";
}

export interface Feedback {
  id: string;
  tutor: string;
  message: string;
  date: string;
}