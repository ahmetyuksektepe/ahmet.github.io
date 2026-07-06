/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import MediumSection from "@/components/section/medium-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight, Layout, Server, Database, Cloud, Wrench, GraduationCap } from "lucide-react";
import { DiaTextReveal } from "@/registry/magicui/dia-text-reveal";
import { IconCloud } from "@/components/ui/icon-cloud";
import { ShineBorder } from "@/registry/magicui/shine-border";

import AboutSection from "@/components/section/about-section";

const BLUR_FADE_DELAY = 0.04;

const categoryIconMap = {
  layout: Layout,
  server: Server,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
  "graduation-cap": GraduationCap,
};


export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <DiaTextReveal
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                colors={["#A97CF8", "#F38CB8", "#FDCC92"]}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <div className="relative size-24 md:size-32 rounded-full p-[3.5px] flex items-center justify-center bg-background shadow-lg ring-4 ring-muted overflow-hidden">
                <ShineBorder
                  borderWidth={3.5}
                  duration={20}
                  shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                  className="rounded-full"
                />
                <Avatar className="size-full border-0">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <AboutSection />
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-12 md:size-14 p-1.5 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-12 md:size-14 p-1.5 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(DATA.skills).map(([key, category], index) => {
              const IconComponent = categoryIconMap[category.icon as keyof typeof categoryIconMap];
              const isLarge = key === "frontend" || key === "backend";
              return (
                <BlurFade
                  key={key}
                  delay={BLUR_FADE_DELAY * 10 + index * 0.05}
                  className={isLarge ? "sm:col-span-2" : ""}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-md p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-foreground/15 group">
                    {/* Subtle top-right glow */}
                    <div className={`absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br ${category.color} to-transparent blur-2xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="flex flex-col gap-4 h-full relative z-10">
                      <div className="flex items-center gap-2">
                        <div className="border border-border/60 bg-muted/50 rounded-lg p-1.5 flex items-center justify-center">
                          {IconComponent && <IconComponent className="size-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />}
                        </div>
                        <h3 className="font-semibold text-base text-foreground tracking-tight">{category.title}</h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {category.items.map((skill) => (
                          <div key={skill.name} className="border bg-background/60 hover:bg-background border-border/80 rounded-xl h-8 w-fit px-3 flex items-center gap-2 transition-colors duration-200">
                            {skill.icon ? (
                              <skill.icon className="size-3.5 rounded overflow-hidden object-contain" />
                            ) : (
                              <img
                                src={`https://cdn.simpleicons.org/${skill.slug}`}
                                alt={skill.name}
                                className={`size-3.5 rounded overflow-hidden object-contain ${"invertOnDark" in skill && skill.invertOnDark ? "dark:invert" : ""}`}
                              />
                            )}
                            <span className="text-foreground text-xs font-medium">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 11} className="flex justify-center">
            <IconCloud
              images={Array.from(
                new Set(
                  Object.values(DATA.skills).flatMap((category) =>
                    category.items.map(
                      (skill) => `https://cdn.simpleicons.org/${skill.slug}`
                    )
                  )
                )
              )}
            />
          </BlurFade>
        </div>
      </section>
      {/* <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section> */}
      <section id="medium">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <MediumSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
