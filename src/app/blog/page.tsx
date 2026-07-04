import { allPosts } from "content-collections";
import type { Metadata } from "next";
import { Suspense } from "react";
import BlogList from "./blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, life, and more.",
  openGraph: {
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
};

export default function BlogPage() {
  const sortedPosts = [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const posts = sortedPosts.map((post) => ({
    slug: post._meta.path.replace(/\.mdx$/, ""),
    title: post.title,
    publishedAt: post.publishedAt,
  }));

  return (
    <section id="blog">
      <Suspense>
        <BlogList posts={posts} />
      </Suspense>
    </section>
  );
}
