import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageLoadToast } from "@/components/layout/PageLoadToast";
import { Toaster } from "@/components/ui/Toaster";
import { SITE } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const defaultTitle = `${SITE.name} | ${SITE.tagline}`;
const shortDescription =
  "T.A.G. Corp provides IT consulting, secure architecturing, cybersecurity risk assessments, and incident response. Partner with experienced leadership.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE.name}`,
  },
  description: shortDescription,
  keywords: [
    "IT consulting",
    "cybersecurity",
    "T.A.G. Corp",
    "The Atinol Group",
    "secure architecture",
    "risk assessment",
    "incident response",
    "Zero Trust",
    "cloud security",
  ],
  authors: [{ name: SITE.legalName, url: SITE.domain }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.domain,
    siteName: SITE.name,
    title: defaultTitle,
    description: shortDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE.tagline} – ${SITE.legalName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: shortDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased overflow-x-hidden`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <PageLoadToast />
        <Toaster />
      </body>
    </html>
  );
}
