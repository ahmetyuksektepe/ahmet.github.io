import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { DotNet } from "@/components/ui/svgs/dotnet";
import { N8n } from "@/components/ui/svgs/n8n";
import { NestJS } from "@/components/ui/svgs/nestjs";
import { Helm } from "@/components/ui/svgs/helm";
import { RabbitMQ } from "@/components/ui/svgs/rabbitmq";
import { GraphQL } from "@/components/ui/svgs/graphql";

export const DATA = {
  name: "Ahmet Faruk Yüksektepe",
  initials: "AY",
  url: "https://ahmetyuksektepe.dev",
  location: "Antalya, Turkey",
  locationLink: "https://www.google.com/maps/place/Antalya",
  description:
    "Full-Stack Software Developer. Building web applications and backend systems.",
  summary:
    "Hi, I'm Ahmet. I am Full-Stack Software Developer currently working at Ankasoft in Yalova. I graduated from Yalova University Computer Engineering Department, ranking 3rd in the engineering faculty with a GPA of 3.49/4.00.",
  avatarUrl: "/me.png",
  mediumUrl: "https://medium.com/@ahmetfyuksektepe",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "React Native", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: ".NET", icon: DotNet },
    { name: "Nest.js", icon: NestJS },
    { name: "GraphQL", icon: GraphQL },
    { name: "RabbitMQ", icon: RabbitMQ },
    { name: "n8n", icon: N8n },
    { name: "Helm", icon: Helm },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ahmetf_y@outlook.com",
    tel: "+90 554 129 77 46",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ahmetyuksektepe",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmetf-y/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "ANKASOFT",
      href: "https://ankasoft.com/",
      badges: [],
      location: "Yalova, Turkiye",
      title: "Software Engineer",
      logoUrl: "/ankasoft-logo.svg",
      start: "June 2026",
      end: "Present",
      description:
        "I am currently contributing to the development of a multi-app platform. My responsibilities include building different web apps and backend services for the platform, as well as working on Keycloak-based SSO integration to enable centralized authentication and identity management across applications.",
    },
    {
      company: "ANKASOFT",
      href: "https://ankasoft.com/",
      badges: [],
      location: "Yalova, Turkiye",
      title: "Software Engineer Intern",
      logoUrl: "/ankasoft-logo.svg",
      start: "May 2025",
      end: "June 2026",
      description:
        "I took part in the development of an end-to-end automation module that enables one-click installation of databases such as PostgreSQL and MySQL on virtual machines. Bash scripts were used for VM setup and configuration, while the backend of the module was developed with NestJS, TypeORM, and GraphQL. The system was designed with an event-driven architecture using RabbitMQ; workflows were orchestrated on Kubernetes with Argo Workflows, and package deployments were managed with Helm. Through this project, I gained practical experience in backend development, infrastructure automation, Kubernetes workflows, and message-driven architectures.",
    },
  ],
  education: [
    {
      school: "Yalova University",
      href: "https://muhendislik.yalova.edu.tr/",
      degree: "Bechalor of Science in Computer Engineering (GPA: 3.49/4.00) - Graduated 3rd in the engineering faculty.",
      logoUrl: "/yalova-university-logo.png",
      start: "2021",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  
} as const;
