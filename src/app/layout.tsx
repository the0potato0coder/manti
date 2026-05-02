import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientShell } from "./client-shell";

const BRAND_ICON_URL =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/icon-1762235219951.png?width=1200&height=1200&resize=contain";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.manticorestudio.com"),
  title: {
    default: "Digital Marketing & Creative Agency in Kolkata | Manticore Studio",
    template: "%s | Manticore Studio",
  },
  description:
    "Manticore Studio is a leading digital marketing and creative agency in Kolkata, delivering CGI, motion design, branding, and performance marketing that help brands grow.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Manticore Studio",
    url: "https://www.manticorestudio.com",
    title: "Digital Marketing & Creative Agency in Kolkata | Manticore Studio",
    description:
      "Manticore Studio is a leading digital marketing and creative agency in Kolkata, delivering CGI, motion design, branding, and performance marketing that help brands grow.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Manticore Studio - Digital Marketing and Creative Agency in Kolkata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Creative Agency in Kolkata | Manticore Studio",
    description:
      "Manticore Studio is a leading digital marketing and creative agency in Kolkata, delivering CGI, motion design, branding, and performance marketing that help brands grow.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: BRAND_ICON_URL }],
    shortcut: [{ url: BRAND_ICON_URL }],
    apple: [{ url: BRAND_ICON_URL }],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Manticore Studio",
  url: "https://www.manticorestudio.com",
  logo: BRAND_ICON_URL,
  sameAs: [
    "https://www.instagram.com/manticore.studio",
    "https://www.linkedin.com/company/manticore-studio",
    "https://www.youtube.com/@ManticoreStudio",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Manticore Studio",
  url: "https://www.manticorestudio.com",
};

const safeJsonLd = (schema: Record<string, unknown>) =>
  JSON.stringify(schema).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteJsonLd) }}
        />
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="3ba6769b-5569-4fbd-b7d6-6c9af3e5a432"
        />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
