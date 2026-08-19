import type { Metadata, Viewport } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";
import {Navbar} from "../components/navbar";
import { SITE } from "@/lib/site";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.jobTitle}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.fullName, url: SITE.url }],
  creator: SITE.fullName,
  publisher: SITE.fullName,
  keywords: [
    "product designer",
    "product designer portfolio",
    "UX designer",
    "UI designer",
    "design systems",
    "web3 product designer",
    "AI-assisted design",
    "Mauro José",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.jobTitle}`,
    description: SITE.description,
    locale: SITE.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.jobTitle}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#030e1a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${inter.variable} antialiased flex flex-col items-center min-h-screen`}
      >
        <Navbar/>
        <main className="flex flex-col items-center w-full">{children}</main>
      </body>
    </html>
  );
}
