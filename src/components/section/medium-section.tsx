import Link from "next/link";
import { Icons } from "@/components/icons";
import { ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";
import { MEDIUM_POSTS } from "@/data/medium-posts";
import Blog3DCarousel from "@/components/blog-3d-carousel";

export default function MediumSection() {
  return (
    <div className="rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">
          My Medium Blogs
        </span>
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          I write on Medium
        </h2>
        <p className="text-muted-foreground max-w-[500px]">
          Thoughts, deep dives, and lessons learned - published on my Medium
          profile.
        </p>
        <Blog3DCarousel blogs={MEDIUM_POSTS} />
        <Link
          href={DATA.mediumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
        >
          <Icons.medium className="size-4" />
          Visit my Medium
          <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
        </Link>
      </div>
    </div>
  );
}
