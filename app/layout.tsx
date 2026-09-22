import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const description = "12の質問で、あなたの心に近い海の生き物を見つけよう。笑えて、ちょっと当たる15タイプ診断。";
  return {
    metadataBase: base,
    title: "現代の海の生き物診断",
    description,
    openGraph: { title: "現代の海の生き物診断", description, images: [{ url: new URL("/og.png", base), width: 1736, height: 908 }] },
    twitter: { card: "summary_large_image", title: "現代の海の生き物診断", description, images: [new URL("/og.png", base)] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
