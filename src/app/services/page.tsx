import type { Metadata } from "next";
import Link from "next/link";
import {
  PenTool,
  Code,
  Search,
  Target,
  Video,
  CheckCircle2,
  ChevronDown,
  MonitorSmartphone,
} from "lucide-react";

import { Starfield } from "@/components/Starfield";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Kolkata | Branding, SEO & Ads | Manticore Studio",
  description:
    "Explore complete digital marketing services in Kolkata, including branding, SEO, ads, and development.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "Branding & Design",
    icon: PenTool,
    desc: "A strong brand makes people remember you for the right reasons. We design logos, visual identities, and brand systems that are built to last and work across every platform.",
    offers: [
      "Brand Strategy & Positioning",
      "Logo Design & Brand Identity",
      "Typography, Colour Palette & Visual Language",
      "Brand Guidelines & Style Manuals",
      "Packaging Design & Label Design",
      "Stationery & Offline Collateral Design",
      "Brand Naming & Tagline Development",
      "Brand Refresh & Rebranding",
      "3D Brand Mockups & CGI Brand Visuals",
      "Pitch Deck & Presentation Design",
    ],
    cta: "Schedule a Branding Consultation",
  },
  {
    title: "Website Development",
    icon: Code,
    desc: "Your website should work as hard as you do. We build fast, mobile-friendly websites that look great and are structured to convert visitors into customers.",
    offers: [
      "Custom Website Design & Development",
      "UI/UX Design & Wireframing",
      "E-Commerce Website Development",
      "Landing Page Design & Development",
      "WordPress & CMS-Based Websites",
      "Website Speed & Performance Optimisation",
      "Mobile Responsiveness & Cross-Browser Testing",
      "SEO-Ready Architecture & Clean URL Structure",
      "Website Maintenance & Support Packages",
      "Domain, Hosting & Technical Setup Assistance",
    ],
    cta: "Get a Free Website Consultation",
  },
  {
    title: "Social Media Marketing",
    icon: MonitorSmartphone,
    desc: "Showing up consistently on social media is what keeps your brand top of mind. We plan, create, and manage content so you don't have to think about it.",
    offers: [
      "Social Media Strategy & Platform Audit",
      "Monthly Content Calendar Planning",
      "Graphic Design for Posts, Carousels & Stories",
      "Reels & Short-Form Video Content",
      "Caption Writing & Brand Copywriting",
      "Hashtag Research & Optimisation",
      "Community Management & Comment Handling",
      "Influencer Identification & Coordination",
      "Paid Social Integration with Organic Strategy",
      "Monthly Analytics & Performance Reporting",
    ],
    cta: "Schedule a Free Consultation",
  },
  {
    title: "SEO Services",
    icon: Search,
    desc: "When someone looks for something you have, your business should be the first one they see. We take care of the behind-the-scenes stuff and the content to help your website get to the top of Google and stay there.",
    offers: [
      "Website SEO Audit & Health Check",
      "Keyword Research & Competitor Analysis",
      "On-Page SEO - Titles, Headings, Meta Tags & Content",
      "Technical SEO - Indexing, Schema, Sitemap & Robots.txt",
      "Local SEO & Google Business Profile Optimisation",
      "Citation Building & Local Directory Submissions",
      "Link Building & Off-Page Authority Development",
      "Blog Writing & SEO Content Strategy",
      "Google Search Console & GA4 Setup & Monitoring",
      "Monthly SEO Performance Reporting",
    ],
    cta: "Request a Free SEO Audit",
  },
  {
    title: "Performance Marketing",
    icon: Target,
    desc: "Every rupee you spend on ads should be working. We build and manage Meta, Google and LinkedIn campaigns focused on real outcomes - leads, sales, and measurable ROI.",
    offers: [
      "Meta Ads - Facebook & Instagram Campaign Management",
      "Google Ads - Search, Display & YouTube Campaigns",
      "Audience Research, Segmentation & Funnel Mapping",
      "Ad Creative Strategy, Design & Copywriting",
      "A/B Testing & Creative Performance Analysis",
      "Retargeting & Lookalike Audience Campaigns",
      "WhatsApp Marketing Campaigns & Broadcast Strategy",
      "LinkedIn Marketing Campaigns & B2B Growth Strategy",
      "Landing Page Alignment & Conversion Optimisation",
      "Campaign Budget Planning & ROI Forecasting",
      "Weekly Optimisation & Transparent Performance Reports",
    ],
    cta: "Let's Talk About Your Ad Budget",
  },
  {
    title: "Content Creation",
    icon: Video,
    desc: "Good content is what makes people stop scrolling. We create visuals, videos, and 3D content that communicates your brand clearly and looks the part.",
    offers: [
      "Social Media Graphics, Carousels & Branded Visuals",
      "Reels, Short-Form Video & YouTube Shorts",
      "3D Product Visualisation & CGI Renders",
      "Motion Graphics & Animated Content",
      "Brand Films & Corporate Video Production",
      "Photography Direction & Post-Production Editing",
      "Ad Creatives for Meta, Google & Digital Campaigns",
      "Blog Writing, Website Copywriting & Long-Form Content",
      "Infographics & Data Visualisation Design",
      "Script Writing & Storyboarding for Video & Campaigns",
    ],
    cta: "See What We Can Create For You",
  },
];

const faqs = [
  {
    q: "What digital marketing services does Manticore Studio offer?",
    a: "We cover branding, website development, social media marketing, SEO, performance marketing, and content creation - everything a growing business needs to build a solid online presence and scale it over time.",
  },
  {
    q: "Do you work with small businesses and startups?",
    a: "Yes, and a big chunk of our work is exactly that. We know what it's like to work with real budget constraints, so we focus on the things that actually move the needle for where you are right now, not a textbook strategy that doesn't fit your stage.",
  },
  {
    q: "Can I hire you for just one service?",
    a: "You can start small, by just focusing on one thing for your business that works, like SEO or social media. There's no need to do it at once. As your business grows and changes, we can adapt and grow with you, adding more services as you need them. This way, you can take things one step at a time, and we'll be here to support you every step of the way.",
  },
  {
    q: "How much do your services cost?",
    a: "We don't believe in one-size-fits-all packages. Your business has specific needs, and your pricing should reflect that. SEO starts at ₹5,000/month. For everything else, reach out and we'll put together something that fits your goals and your budget.",
  },
  {
    q: "How long does it take to see results from SEO?",
    a: "You'll usually start seeing keyword movement and early impressions within four to six weeks. Proper rankings and steady organic traffic build over three to six months. We track everything and send you a report every month so you always know where things stand.",
  },
  {
    q: "Do you run Meta and Google Ads together?",
    a: "Yes. We can manage both platforms or just one depending on where your audience is most active. Every campaign is set up with a clear objective and tracked for real results.",
  },
  {
    q: "What industries do you work with?",
    a: "We work across restaurants, cafes, apparel, retail, real estate, education, and service-based businesses. If your audience is online, we can help you reach them.",
  },
  {
    q: "Will I get regular updates on my campaign or SEO progress?",
    a: "Yes. Every client gets monthly performance reports covering what's working, what's changed, and what we're focusing on next. No radio silence.",
  },
  {
    q: "Do you create content in Bengali or only English?",
    a: "We primarily create content in English, but we can create bilingual content in Bengali and English for brands targeting local Kolkata audiences specifically.",
  },
  {
    q: "How do I get started with Manticore Studio?",
    a: "Simply reach out through our contact page or WhatsApp us directly. We'll have a quick conversation about your business, understand your goals, and suggest the best way forward, no pressure, no lengthy forms.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black relative">
      <Starfield />

      <section className="pt-40 pb-20 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#CECECD] mb-8">
            Our Digital Marketing <span className="text-[#E0E220]">Services</span>
          </h1>
          <p className="text-xl text-[#CECECD]/70 max-w-3xl mx-auto leading-relaxed">
            We've worked with businesses across Kolkata long enough to know that growth doesn't happen by accident. Whether you're just starting out or trying to scale what you've already built, we bring together the branding, digital, and creative expertise to make it happen, from day one to your next big campaign.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12 md:space-y-24">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:flex-row gap-10 p-8 md:p-12 bg-[#0A0A0F] border border-[#E0E220]/20 rounded-3xl hover:border-[#E0E220]/50 transition-colors"
              >
                <div className="lg:w-1/3">
                  <div className="w-14 h-14 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-xl flex items-center justify-center mb-6">
                    <srv.icon className="h-7 w-7 text-[#E0E220]" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#CECECD] mb-4">{srv.title}</h2>
                  <p className="text-[#CECECD]/70 text-lg leading-relaxed mb-8">{srv.desc}</p>
                  <Button className="w-full sm:w-auto bg-transparent border border-[#E0E220] text-[#E0E220] hover:bg-[#E0E220]/10 font-bold" asChild>
                    <Link href="/contact">{srv.cta}</Link>
                  </Button>
                </div>

                <div className="lg:w-2/3 lg:pl-10 lg:border-l lg:border-[#E0E220]/10">
                  <h3 className="text-xl font-bold text-[#CECECD] mb-6">What we offer:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {srv.offers.map((offer, offerIndex) => (
                      <div key={offerIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#E0E220] shrink-0 mt-0.5" />
                        <span className="text-[#CECECD]/80">{offer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center bg-linear-to-b from-[#134652]/40 to-[#0A0A0F] border border-[#E0E220]/30 rounded-3xl p-6 md:p-20 shadow-[0_0_50px_rgba(224,226,32,0.05)]">
            <h2 className="text-4xl font-bold text-[#CECECD] mb-6">Not Sure What You Need?</h2>
            <p className="text-xl text-[#CECECD]/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              That's okay, most people aren't. Tell us where your business is right now and what you're trying to achieve. We'll put together a straightforward plan that makes sense for you.
            </p>
            <Button size="lg" className="bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold text-lg px-6 py-4 md:px-10 md:py-6 rounded-xl shadow-[0_0_30px_rgba(224,226,32,0.3)]" asChild>
              <Link href="/contact">Let's Figure It Out Together</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10 bg-[#0A0A0F]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#CECECD] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-black border border-[#E0E220]/20 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 text-[#CECECD] font-semibold text-lg hover:text-[#E0E220] transition-colors">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-[#E0E220]" />
                </summary>
                <div className="px-6 pb-6 text-[#CECECD]/70 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
