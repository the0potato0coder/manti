import type { Metadata } from "next";
import HomeClient from "./home-client";
const fallbackDescription =
  "Manticore Studio is a top digital marketing and creative agency in Kolkata. We build brands through design, development, and performance marketing.";

export const metadata: Metadata = {
  title: "Digital Marketing & Creative Agency in Kolkata | Manticore Studio",
  description: fallbackDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Digital Marketing & Creative Agency in Kolkata | Manticore Studio",
    description: fallbackDescription,
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Digital Marketing & Creative Agency in Kolkata | Manticore Studio",
    description: fallbackDescription,
    images: ["/twitter-image"],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
