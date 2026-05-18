import type { Metadata } from "next";
import HomeClient from "@/app/home-client";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Kolkata | Manticore Studio",
  description:
    "Manticore Studio is a creative digital marketing agency in Kolkata offering branding, SEO, ads, and development to help businesses grow consistently.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Digital Marketing Agency in Kolkata | Manticore Studio",
    description:
      "Manticore Studio is a creative digital marketing agency in Kolkata offering branding, SEO, ads, and development to help businesses grow consistently.",
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Digital Marketing Agency in Kolkata | Manticore Studio",
    description:
      "Manticore Studio is a creative digital marketing agency in Kolkata offering branding, SEO, ads, and development to help businesses grow consistently.",
    images: ["/twitter-image"],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
