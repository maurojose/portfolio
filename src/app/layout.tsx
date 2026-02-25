import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";
import {Navbar} from "../components/navbar";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mauro José",
  description: "Product Designer and former Art Director",
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
        {children}
      </body>
    </html>
  );
}
