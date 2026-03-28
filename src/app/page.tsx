import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "Motion Design and 3D Animation Studio",
  description:
    "Manticore Studio creates motion design, CGI, branding, and ad campaigns that help brands stand out and convert.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Motion Design and 3D Animation Studio | Manticore Studio",
    description:
      "Manticore Studio creates motion design, CGI, branding, and ad campaigns that help brands stand out and convert.",
    url: "/",
  },
  twitter: {
    title: "Motion Design and 3D Animation Studio | Manticore Studio",
    description:
      "Manticore Studio creates motion design, CGI, branding, and ad campaigns that help brands stand out and convert.",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
