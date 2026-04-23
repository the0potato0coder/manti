import { notFound } from "next/navigation";

// Upcoming projects is intentionally parked for now.
// Reason: there is currently no active UX path to this page, and we do not want
// users or crawlers discovering an orphan page.
//
// To re-enable later:
// 1) restore the metadata block below,
// 2) render UpcomingProjectsClient again,
// 3) re-add /upcoming-projects in sitemap.ts and robots policy as needed.
//
// import type { Metadata } from "next";
// import UpcomingProjectsClient from "./upcoming-projects-client";
//
// export const metadata: Metadata = {
//   title: "Upcoming Creative Projects",
//   description:
//     "Explore upcoming motion design and CGI projects from Manticore Studio, including project timelines and latest progress updates.",
//   alternates: {
//     canonical: "/upcoming-projects",
//   },
//   openGraph: {
//     title: "Upcoming Creative Projects | Manticore Studio",
//     description:
//       "Explore upcoming motion design and CGI projects from Manticore Studio, including project timelines and latest progress updates.",
//     url: "/upcoming-projects",
//   },
//   twitter: {
//     title: "Upcoming Creative Projects | Manticore Studio",
//     description:
//       "Explore upcoming motion design and CGI projects from Manticore Studio, including project timelines and latest progress updates.",
//   },
// };

export default function UpcomingProjectsPage() {
  notFound();
}
