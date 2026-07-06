/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import type { types as RoughNotationType } from "react-rough-notation";

const HIGHLIGHTED_TERMS: Record<
  string,
  { type: RoughNotationType; color: string }
> = {
  GraphQL: { type: "highlight", color: "rgba(225, 16, 152, 0.35)" },
  RabbitMQ: { type: "underline", color: "#FF6600" },
  Kubernetes: { type: "box", color: "#326CE5" },
  Keycloak: { type: "highlight", color: "rgba(224, 86, 36, 0.3)" },
  "LLM-based": { type: "box", color: "#A97CF8" },
};

const HIGHLIGHT_PATTERN = new RegExp(
  `(${Object.keys(HIGHLIGHTED_TERMS).join("|")})`,
  "g"
);

function HighlightedDescription({
  text,
  show,
}: {
  text: string;
  show: boolean;
}) {
  const parts = text.split(HIGHLIGHT_PATTERN);

  return (
    <RoughNotationGroup show={show}>
      {parts.map((part, index) => {
        const highlight = HIGHLIGHTED_TERMS[part];
        if (!highlight) {
          return <span key={index}>{part}</span>;
        }
        return (
          <RoughNotation
            key={index}
            type={highlight.type}
            color={highlight.color}
            strokeWidth={2}
            padding={highlight.type === "highlight" ? [0, 4] : 2}
          >
            {part}
          </RoughNotation>
        );
      })}
    </RoughNotationGroup>
  );
}

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-12 md:size-14 p-1.5 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-12 md:size-14 p-1.5 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  const [openValue, setOpenValue] = useState<string | undefined>();

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full grid gap-6"
      value={openValue}
      onValueChange={setOpenValue}
    >
      {DATA.work.map((work) => {
        const itemValue = `${work.company}-${work.title}-${work.start}`;
        return (
        <AccordionItem
          key={itemValue}
          value={itemValue}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={work.logoUrl} alt={work.company} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {work.company}
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                        )}
                      />
                    </span>
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {work.title}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>
                  {work.start} - {work.end ?? "Present"}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground whitespace-pre-line">
            <HighlightedDescription
              text={work.description}
              show={openValue === itemValue}
            />
          </AccordionContent>
        </AccordionItem>
        );
      })}
    </Accordion>
  );
}

