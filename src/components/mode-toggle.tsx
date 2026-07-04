"use client";

import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { AnimatedThemeToggler } from "@/registry/magicui/animated-theme-toggler";

export function ModeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <AnimatedThemeToggler
      className={cn(
        "flex items-center justify-center [&_svg]:h-full [&_svg]:w-full",
        className
      )}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      onThemeChange={setTheme}
    />
  );
}
