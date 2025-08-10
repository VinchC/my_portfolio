import type { Metadata } from "next";
import localFont from "next/font/local";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Vincent Cantonnet - Full Stack Developper",
  description:
    "Trained in Typescript, Python, PHP, React, SQL and GraphQL, on the lookout for new professional opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${AnekTelugu.variable} h-full bg-background text-foreground`}
      >
        <GoogleAnalytics gaId="G-SHKS1L1NFK" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
