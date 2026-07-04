import { withContentCollections } from "@content-collections/next";

const repoName = "ahmet.github.io";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
