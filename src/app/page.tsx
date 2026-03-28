import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "Digital Marketing and Creative Agency",
  description:
    "Manticore Studio is a digital marketing and creative agency delivering CGI, motion design, branding, and ad campaigns that help brands grow.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Digital Marketing and Creative Agency | Manticore Studio",
    description:
      "Manticore Studio is a digital marketing and creative agency delivering CGI, motion design, branding, and ad campaigns that help brands grow.",
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Digital Marketing and Creative Agency | Manticore Studio",
    description:
      "Manticore Studio is a digital marketing and creative agency delivering CGI, motion design, branding, and ad campaigns that help brands grow.",
    images: ["/twitter-image"],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
