import type { Metadata } from "next";
import HomeClient from "./home-client";
const fallbackDescription =
  "Manticore Studio is a digital marketing and creative agency delivering CGI, motion design, branding, and ad campaigns that help brands grow.";

export const metadata: Metadata = {
  title: "Manticore Studio - Digital Marketing and Creative Agency",
  description: fallbackDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Digital Marketing and Creative Agency | Manticore Studio",
    description: fallbackDescription,
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Digital Marketing and Creative Agency | Manticore Studio",
    description: fallbackDescription,
    images: ["/twitter-image"],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
