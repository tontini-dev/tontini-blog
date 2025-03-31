import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

// Fonte principal: Inter
const inter = Inter({
  variable: "--font-geist-sans", // aproveita a variável que você já usa no CSS
  subsets: ["latin"],
});

// Fonte mono (opcional, para códigos ou detalhes)
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog | Tontini.dev",
  description: "Contenido sobre desarrollo, marketing y presencia digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}