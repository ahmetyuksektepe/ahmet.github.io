export interface MediumPost {
  id: string;
  title: string;
  url: string;
  summary: string;
  coverImage: string | null;
  tags: string[];
  publishedAt: string | null;
}

// Add new Medium posts here as you publish them.
export const MEDIUM_POSTS: MediumPost[] = [
  {
    id: "model-context-protocol-mcp-nedir",
    title: "Model Context Protocol (MCP) Nedir? Örnekleri nelerdir?",
    url: "https://medium.com/@ahmetfyuksektepe/model-context-protocol-mcp-nedir-%C3%B6rnekleri-nelerdir-ebfcfa720869",
    summary:
      "Her gün farklı amaçlarımız için yapay zekaları kullanıyoruz. Bazen bilgi için bazen de farklı araçları kullanarak bizim için bir şey...",
    coverImage:
      "https://miro.medium.com/v2/resize:fit:1200/1*Gi34oIGnb06QQx2KJEX0lQ.png",
    tags: ["MCP"],
    publishedAt: "2025-07-19T11:23:55.170Z",
  },
];
