import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martin Gonzalez - Desarrollador Full Stack",
  description: "Portafolio de Martin Gonzalez, Desarrollador Full Stack JR especializado en PHP (Laravel, CodeIgniter) y Node.js. Mendoza, Argentina.",
  keywords: ["desarrollador", "full stack", "PHP", "Laravel", "CodeIgniter", "Node.js", "React", "Mendoza"],
  authors: [{ name: "Martin Gonzalez" }],
  openGraph: {
    title: "Martin Gonzalez - Desarrollador Full Stack",
    description: "Portafolio de Martin Gonzalez, Desarrollador Full Stack JR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
