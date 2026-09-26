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
  title: "Martin Gonzalez | Desarrollador Full Stack JR",
  description: "Portafolio profesional de Martin Gonzalez, Desarrollador Full Stack JR especializado en PHP (Laravel, CodeIgniter), Node.js, Vue.js y React. Mendoza, Argentina.",
  keywords: ["Desarrollador Full Stack", "PHP", "Laravel", "CodeIgniter", "Node.js", "Vue.js", "React", "Martin Gonzalez", "Mendoza", "Portfolio"],
  authors: [{ name: "Martin Gonzalez", url: "https://github.com/martinegs" }],
  openGraph: {
    title: "Martin Gonzalez - Desarrollador Full Stack JR",
    description: "Desarrollo soluciones eficientes, escalables y modernas para la web con PHP, Node.js, Vue y React.",
    type: "website",
    locale: "es_AR",
    url: "https://github.com/martinegs",
    siteName: "Martin Gonzalez Portfolio"
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#090d16] text-gray-100 selection:bg-purple-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

