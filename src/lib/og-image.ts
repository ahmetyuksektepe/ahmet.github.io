import { readFile } from "node:fs/promises";
import path from "node:path";

export async function getFontData() {
  try {
    const [cabinetGrotesk, clashDisplay] = await Promise.all([
      readFile(
        path.join(process.cwd(), "public/fonts/CabinetGrotesk-Medium.ttf")
      ),
      readFile(
        path.join(process.cwd(), "public/fonts/ClashDisplay-Semibold.ttf")
      ),
    ]);
    return { cabinetGrotesk, clashDisplay };
  } catch (error) {
    console.error("Failed to load fonts:", error);
    return null;
  }
}

export async function getLocalImageDataUrl(publicPath: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      publicPath.replace(/^\//, "")
    );
    const buffer = await readFile(filePath);
    const ext = path.extname(filePath).slice(1) || "png";
    return `data:image/${ext};base64,${buffer.toString("base64")}`;
  } catch (error) {
    console.error("Failed to load image:", error);
    return undefined;
  }
}
