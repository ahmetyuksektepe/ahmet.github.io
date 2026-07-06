"use client";

import { DATA } from "@/data/resume";
import { RoughNotation } from "react-rough-notation";

export default function AboutSection() {
  const targetText = "ranking 3rd in the engineering faculty with a GPA of 3.49/4.00.";
  const parts = DATA.summary.split(targetText);

  if (parts.length === 2) {
    return (
      <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
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
      </div>
    );
  }

  // Fallback to plain summary if text is modified or not matched
  return (
    <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
      {DATA.summary}
    </div>
  );
}
