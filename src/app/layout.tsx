import type { Metadata } from "next";
import { Montserrat, Inter, Poppins, Karma, Outfit, Montez } from "next/font/google";
import "./globals.css";
import LayoutContent from "@/components/LayoutContent";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500"],
});

const montez = Montez({
  variable: "--font-montez",
  subsets: ["latin"],
  weight: ["400"],
});

const karma = Karma({
  variable: "--font-karma",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Eduvas - All Education, One Ecosystem",
  description: "Transform your institution with an integrated education platform designed for universities, schools, colleges, and educational institutes across the globe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} ${poppins.variable} ${outfit.variable} ${montez.variable} ${karma.variable} antialiased`}
        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
      >
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}