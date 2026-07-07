"use client"

import React from "react"
import { motion, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

const animationProps: MotionProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
}

type ShinyButtonBaseProps = {
  children: React.ReactNode;
  className?: string;
};

export type ShinyButtonProps =
  | (ShinyButtonBaseProps &
      Omit<
        React.ComponentPropsWithoutRef<typeof motion.button>,
        "children" | "className"
      > & {
        href?: undefined;
      })
  | (ShinyButtonBaseProps &
      Omit<
        React.ComponentPropsWithoutRef<typeof motion.a>,
        "children" | "className"
      > & {
        href: string;
      });

export const ShinyButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ShinyButtonProps
>(({ children, className, href, ...props }, ref) => {
  const buttonClassName = cn(
    "relative cursor-pointer rounded-lg border px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,var(--primary)/10%_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_var(--primary)/10%]",
    className
  );

  const innerContent = (
    <>
      <span
        className="relative block size-full text-sm tracking-wide text-[rgb(0,0,0,65%)] uppercase dark:font-light dark:text-[rgb(255,255,255,90%)]"
        style={{
          maskImage:
            "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          WebkitMask:
            "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          backgroundImage:
            "linear-gradient(-75deg,var(--primary)/10% calc(var(--x)+20%),var(--primary)/50% calc(var(--x)+25%),var(--primary)/10% calc(var(--x)+100%))",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] p-px"
      />
    </>
  );

  if (href) {
    const anchorProps = props as React.ComponentPropsWithoutRef<typeof motion.a>;
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={buttonClassName}
        {...animationProps}
        {...anchorProps}
      >
        {innerContent}
      </motion.a>
    );
  }

  const buttonProps = props as React.ComponentPropsWithoutRef<typeof motion.button>;
  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={(buttonProps.type as any) ?? "button"}
      className={buttonClassName}
      {...animationProps}
      {...buttonProps}
    >
      {innerContent}
    </motion.button>
  );
})

ShinyButton.displayName = "ShinyButton"
