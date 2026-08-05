import type { Metadata } from "next";
import "./globals.css";
import { Cairo, Fraunces, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { GlobalAudioProvider } from "@/context/AudioContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { SplashScreen } from "@/components/ui/SplashScreen";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ibrahim-nasser.vercel.app"),
  title: {
    default: "Ibrahim Nasser · Software Engineer & Full-Stack Mobile Developer",
    template: "%s | Ibrahim Nasser",
  },
  description:
    "Software Engineer specialized in architecting enterprise mobile, web, and desktop solutions using Clean Architecture, BLoC state management, and SOLID principles.",
  keywords: [
    "Ibrahim Nasser",
    "Software Engineer",
    "Full-Stack Mobile Developer",
    "Clean Architecture",
    "BLoC State Management",
    "DotNet API",
    "Cross-Platform Developer",
    "Ismailia Egypt Software Engineer",
    "Suez Canal University Computer Science",
  ],
  authors: [{ name: "Ibrahim Nasser", url: "https://github.com/Ebrahim-Nasser" }],
  creator: "Ibrahim Nasser",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ibrahim-nasser.vercel.app",
    title: "Ibrahim Nasser · Software Engineer & Full-Stack Mobile Developer",
    description:
      "Enterprise mobile, web, and desktop applications built with Flutter, Clean Architecture, and SOLID principles.",
    siteName: "Ibrahim Nasser Portfolio",
    images: [
      {
        url: "/assets/images/me1.jpeg",
        width: 1200,
        height: 630,
        alt: "Ibrahim Nasser · Software Engineer & Full-Stack Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Nasser · Software Engineer & Full-Stack Mobile Developer",
    description:
      "Enterprise mobile, web, and desktop applications built with Flutter, Clean Architecture, and SOLID principles.",
    images: ["/assets/images/me1.jpeg"],
  },
  icons: {
    icon: [{ url: "/assets/images/avatar-favicon.png", type: "image/png" }],
    shortcut: "/assets/images/avatar-favicon.png",
    apple: "/assets/images/avatar-favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ibrahim Nasser",
    jobTitle: "Full-Stack Mobile Developer & Flutter Lead",
    worksFor: {
      "@type": "Organization",
      name: "3AMI Team",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Suez Canal University",
    },
    url: "https://ibrahim-nasser.vercel.app",
    sameAs: [
      "https://github.com/Ebrahim-Nasser",
      "https://www.linkedin.com/in/ibrahim-nasser-mobile/",
    ],
    knowsAbout: [
      "Flutter",
      "Dart",
      "Clean Architecture",
      "BLoC",
      "SOLID Principles",
      ".NET Core",
      "SQL Server",
      "RESTful APIs",
    ],
  };

  return (
    <html
      lang="en"
      className={`h-full antialiased ${cairo.variable} ${fraunces.variable} ${jetbrainsMono.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <link rel="preload" as="image" href="/assets/images/me1.jpeg" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0B0C0E] text-[#F3F4F6]">
        <LanguageProvider>
          <GlobalAudioProvider>
            <SplashScreen />
            {children}
          </GlobalAudioProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
