"use client";

import { ArrowRight } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

type InteractiveHoverButtonBaseProps = {
  children: React.ReactNode;
  className?: string;
};

type InteractiveHoverButtonProps =
  | (InteractiveHoverButtonBaseProps &
      Omit<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        "children" | "className"
      > & {
        href?: undefined;
      })
  | (InteractiveHoverButtonBaseProps &
      Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        "children" | "className"
      > & {
        href: string;
      });

function InteractiveHoverButtonContent({
  children,
}: Pick<InteractiveHoverButtonBaseProps, "children">) {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute left-5 size-2 rounded-full bg-primary transition-transform duration-300 ease-out group-hover:scale-[38]"
      />
      <span className="relative z-10 inline-flex items-center transition-all duration-300 ease-out group-hover:translate-x-8 group-hover:opacity-0">
        {children}
      </span>
      <span className="absolute inset-0 z-20 inline-flex translate-x-8 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="size-4" aria-hidden="true" />
      </span>
    </>
  );
}

export function InteractiveHoverButton({
  children,
  className,
  href,
  ...props
}: InteractiveHoverButtonProps) {
  const buttonClassName = cn(
    "group relative inline-flex h-11 w-fit cursor-pointer items-center justify-center overflow-hidden rounded-full border border-border bg-background px-6 py-2 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
    className
  );

  if (href) {
    const anchorProps =
      props as React.AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a {...anchorProps} href={href} className={buttonClassName}>
        <InteractiveHoverButtonContent>{children}</InteractiveHoverButtonContent>
      </a>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      {...buttonProps}
      type={buttonProps.type ?? "button"}
      className={buttonClassName}
    >
      <InteractiveHoverButtonContent>{children}</InteractiveHoverButtonContent>
    </button>
  );
}
