import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zassword - Instant Password Generator",
  description:
    "Zassword is a modern, fast, and user-friendly password generator tool built with Next.js, Tailwind CSS, and shadcn UI. Generate secure passwords instantly.",
  authors: [{ name: "Fortune Zviregei", url: "https://fortunezviregei.com" }],
  creator: "Fortune Zviregei",
  applicationName: "Zassword",
  keywords: [
    "password",
    "generator",
    "fortune zviregei",
    "password generator",
    "password generator tool",
    "password generator online",
    "password generator app",
    "password generator website",
    "password generator tool online",
    "password generator tool app",
    "password generator tool website",
  ],
  openGraph: {
    title: "Zassword - Instant Password Generator",
    description:
      "Zassword is a modern, fast, and user-friendly password generator tool built with Next.js, Tailwind CSS, and shadcn UI. Generate secure passwords instantly.",
    url: "https://zassword.fortunezviregei.com",
    siteName: "Zassword",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zassword - Instant Password Generator",
    description:
      "Zassword is a modern, fast, and user-friendly password generator tool built with Next.js, Tailwind CSS, and shadcn UI. Generate secure passwords instantly.",
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: [`fortunechainz@gmail.com`, `${process.env.NEXT_PUBLIC_SITE_URL}`],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-br from-gray-900 to-gray-800 antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
