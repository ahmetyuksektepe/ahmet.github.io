import React from "react"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

type InteractiveHoverButtonBaseProps = {
  children: React.ReactNode;
  className?: string;
};

export type InteractiveHoverButtonProps =
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

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  InteractiveHoverButtonProps
>(({ children, className, href, ...props }, ref) => {
  const buttonClassName = cn(
    "group bg-background relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold",
    className
  );

  const innerContent = (
    <>
      <div className="flex items-center justify-center gap-2">
        <div className="bg-primary h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </>
  );

  if (href) {
    const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={buttonClassName}
        {...anchorProps}
      >
        {innerContent}
      </a>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={buttonProps.type ?? "button"}
      className={buttonClassName}
      {...buttonProps}
    >
      {innerContent}
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton"
