"use client";

import { useState } from "react";
import { DATA } from "@/data/resume";
import { ShinyButton } from "@/components/ui/shiny-button";
import { RoughNotation } from "react-rough-notation";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/terminal";

export default function AboutSection() {
  const targetText = "ranking 3rd in the engineering faculty with a GPA of 3.49/4.00.";
  const parts = DATA.summary.split(targetText);

  const [terminalLang, setTerminalLang] = useState<"EN" | "TR" | null>(null);
  const [terminalKey, setTerminalKey] = useState(0);

  const handleDownloadClick = (e: React.MouseEvent, lang: "EN" | "TR") => {
    e.preventDefault();
    setTerminalLang(lang);
    setTerminalKey((prev) => prev + 1);
  };

  const handleTerminalComplete = () => {
    if (!terminalLang) return;
    const url = terminalLang === "EN" ? "/CV.pdf" : "#";
    const filename =
      terminalLang === "EN"
        ? "Ahmet_Faruk_Yuksektepe_CV_EN.pdf"
        : "Ahmet_Faruk_Yuksektepe_CV_TR.pdf";

    if (url === "#") return;

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const summary =
    parts.length === 2 ? (
      <>
        {parts[0]}
        <RoughNotation
          type="underline"
          show={true}
          color="#A97CF8"
          strokeWidth={2.5}
          animationDuration={1500}
        >
          <span className="font-bold text-foreground">
            {targetText}
          </span>
        </RoughNotation>
        {parts[1]}
      </>
    ) : (
      DATA.summary
    );

  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
        {summary}
      </div>
      <div className="flex flex-row flex-wrap gap-4 items-center justify-between w-full">
        <ShinyButton
          href="/CV.pdf"
          onClick={(e) => handleDownloadClick(e, "EN")}
          aria-label="Download English resume PDF"
        >
          Download Resume (EN)
        </ShinyButton>
        <ShinyButton
          href="#"
          onClick={(e) => handleDownloadClick(e, "TR")}
          aria-label="Download Turkish resume PDF"
        >
          Download Resume (TR)
        </ShinyButton>
      </div>

      <AnimatePresence mode="wait">
        {terminalLang && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full overflow-hidden"
          >
            <Terminal key={terminalKey} onComplete={handleTerminalComplete} className="max-w-full w-full">
              <TypingAnimation delay={20} duration={6}>{"$ cd /home/ahmet/cv"}</TypingAnimation>
              <TypingAnimation delay={60} duration={6}>{"$ sftp guest@ahmetyuksektepe.dev"}</TypingAnimation>
              <AnimatedSpan delay={40} className="text-muted-foreground">Connecting to ahmetyuksektepe.dev...</AnimatedSpan>
              <AnimatedSpan delay={20} className="text-muted-foreground">Connected to ahmetyuksektepe.dev.</AnimatedSpan>
              <TypingAnimation delay={60} duration={6}>
                {terminalLang === "EN" ? "sftp> get CV.pdf" : "sftp> get CV_TR.pdf"}
              </TypingAnimation>
              <AnimatedSpan delay={40} className="text-muted-foreground">
                {terminalLang === "EN"
                  ? "Fetching /home/ahmet/cv/CV.pdf to Ahmet_Faruk_Yuksektepe_CV_EN.pdf"
                  : "Fetching /home/ahmet/cv/CV_TR.pdf to Ahmet_Faruk_Yuksektepe_CV_TR.pdf"}
              </AnimatedSpan>
              <AnimatedSpan delay={20} className="text-green-500 font-mono">
                {terminalLang === "EN"
                  ? "CV_EN.pdf                             100%  181KB 181.5KB/s   00:01"
                  : "CV_TR.pdf                             0%    0KB   0.0KB/s     --:-- (File not found!)"}
              </AnimatedSpan>
              <TypingAnimation delay={60} duration={6}>{"sftp> bye"}</TypingAnimation>
              <AnimatedSpan delay={20} className="text-muted-foreground">Connection to ahmetyuksektepe.dev closed.</AnimatedSpan>
              <AnimatedSpan delay={40} className="text-purple-400 font-semibold">
                {terminalLang === "EN" ? "Download starting..." : "Ready."}
              </AnimatedSpan>
            </Terminal>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
