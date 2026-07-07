"use client";

import { DATA } from "@/data/resume";
import { ShinyButton } from "@/components/ui/shiny-button";
import { RoughNotation } from "react-rough-notation";

export default function AboutSection() {
  const targetText = "ranking 3rd in the engineering faculty with a GPA of 3.49/4.00.";
  const parts = DATA.summary.split(targetText);

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
          download
          aria-label="Download English resume PDF"
        >
          Download Resume (EN)
        </ShinyButton>
        <ShinyButton
          href="#"
          download
          aria-label="Download Turkish resume PDF"
        >
          Download Resume (TR)
        </ShinyButton>
      </div>
    </div>
  );
}
