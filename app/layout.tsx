import type { Metadata, Viewport } from "next";
import { Inter, Noto_Naskh_Arabic, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const arabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["500"],
  variable: "--font-arabic",
});
const bengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["500"],
  variable: "--font-bengali",
});

const siteUrl = "https://mdraiyanalam.github.io/mdraiyanalam95.CTAs/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Md Raiyan Alam",
  description:
    "Contact Md Raiyan Alam. Tap to call, WhatsApp, or open a social profile — a Linktree-style page.",
  authors: [{ name: "Md Raiyan Alam" }],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Md Raiyan Alam",
    description: "Tap to call or message Md Raiyan Alam.",
    type: "website",
    url: siteUrl,
    images: ["img/profile.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#9f51f0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${arabic.variable} ${bengali.variable}`}>
      <body>{children}</body>
    </html>
  );
}
