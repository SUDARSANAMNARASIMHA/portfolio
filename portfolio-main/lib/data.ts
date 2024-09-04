import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import BuzzShare from "@/public/BuzzShare.png";
import DocTrans from "@/public/DocTrans.png";
import Saana from "@/public/Saana.png";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiPython,
  SiDocker,
  SiFastapi,
  SiAzuredevops,
  SiCircleci,
  SiPostman,
  SiFirebase,
  SiSupabase,
  SiPhp,
} from "react-icons/si";
import { SqlalchemyOriginal, JavaOriginal } from 'devicons-react';

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intermediate (M.P.C)",
    location: "Sri Chaitanya Junior College, Vijayawada",
    description:
      "Completed intermediate education with a percentage of 95.6, focusing on Mathematics, Physics, and Chemistry.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Bachelor of Technology in Computer Science and Design",
    location: "Sagi Ramakrishnam Raju Engineering College, Bhimavaram",
    description:
      "Currently pursuing my degree with a CGPA of 8.81. Gaining knowledge in various aspects of computer science and design.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
  },
  {
    title: "Software Engineering Intern",
    location: "Bizcraft Advisors",
    description:
      "Worked on automating Tally using AI models, developed high-performance backend with FastAPI and Docker, integrated Temporal for workflow automation, and optimized OpenAI function calls. Contributed to various projects improving efficiency and performance.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "SRKREC Alumni Association of North America Website",
    description:
      "Designed and developed a website for SRKREC alumni in North America",
    tags: ["React", "Next.js", "PayPal Integration", "Google reCAPTCHA"],
    imageUrl: Saana
  },
  {
    title: "Document Translator",
    description:
      "Translates documents into 103 languages with 98% accuracy",
    tags: ["Google Cloud Vision API", "OpenAI", "Azure Form Recognizer API", "Azure Translation API", "Speech to Text API"],
    imageUrl: DocTrans
  },
  {
    title: "BuzzShare App",
    description:
      "Developed a React Native Expo application enabling real-time creation and viewing of user-generated posts and text-based content",
    tags: ["React Native", "Firebase Authentication", "Cloud Firestore"],
    imageUrl: BuzzShare
  },
];

export const skillsData = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Git", icon: SiGit },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "MongoDB", icon: SiMongodb },,
  { name: "Express", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Python", icon: SiPython },
  { name: "Docker", icon: SiDocker },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Azure", icon: SiAzuredevops },
  { name: "CI/CD", icon: SiCircleci },
  { name: "SQLAlchemy", icon: SqlalchemyOriginal },
  { name: "Postman", icon: SiPostman },
  { name: "Firebase", icon: SiFirebase },
  { name: "Supabase", icon: SiSupabase },
  { name: "Java", icon: JavaOriginal },
  { name: "PHP", icon: SiPhp },
] as const;