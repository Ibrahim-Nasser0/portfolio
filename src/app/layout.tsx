import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibrahim Nasser · Full-Stack Mobile Developer & Flutter Lead",
  description: "Enterprise mobile, desktop, and cross-platform applications built with Flutter, Clean Architecture, and SOLID principles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0B0C0E] text-[#F3F4F6]">{children}</body>
    </html>
  );
}
