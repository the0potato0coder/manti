"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Building,
  CheckCircle2,
  ChevronDown,
  Code,
  GraduationCap,
  MonitorSmartphone,
  PenTool,
  Quote,
  Rocket,
  Search,
  Shirt,
  ShoppingCart,
  Store,
  Target,
  Utensils,
  Video,
} from "lucide-react";
import { ExpertiseTree } from "@/components/ExpertiseTree";
import { Button } from "@/components/ui/button";
import { Starfield } from "@/components/Starfield";

const serviceCards = [
  {
    title: "Branding & Design",
    icon: PenTool,
    desc: "First impressions stick. As a branding agency in Kolkata, we shape how people see your business, from visual identity to the overall tone of how you communicate. Built for recognition and consistency.",
  },
  {
    title: "Website Development",
    icon: Code,
    desc: "A slow, cluttered website loses people before they read a word. We build sites that are fast, clean, and easy to navigate, designed around your business objectives, not just aesthetics.",
  },
  {
    title: "Social Media Marketing",
    icon: MonitorSmartphone,
    desc: "Showing up regularly is one thing. Showing up with purpose is another. We handle strategy, content, and execution on Instagram and Facebook so your brand builds real traction over time.",
  },
  {
    title: "SEO Services",
    icon: Search,
    desc: "When someone searches for what you offer, your business should be there. We work on the technical, content, and structural sides of SEO to build visibility that holds up over the long run.",
  },
  {
    title: "Performance Marketing",
    icon: Target,
    desc: "Need leads? We run paid campaigns on Google, Instagram, and Facebook focused on actual outcomes - enquiries, conversions, and sales. Every rupee spent is tracked and optimised.",
  },
  {
    title: "Content Creation & 3D",
    icon: Video,
    desc: "Good content stops the scroll. We produce visuals, videos, and 3D assets that are built for your brand and your audience, the kind of content that makes your business impossible to ignore.",
  },
];

const brandOrbits = [
  {
    name: "Balaji Bedding",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/balaji-logo_name-01-resized-1769023875632.jpg?width=800&height=800&resize=contain",
    whiteBg: true,
    orbit: "inner",
    angle: 0,
  },
  {
    name: "Agamoni",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/logo1-resized-1769023887769.jpg?width=800&height=800&resize=contain",
    whiteBg: true,
    orbit: "inner",
    angle: 90,
  },
  {
    name: "Own's Creation",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/visiting-card-1769023939792.jpg?width=800&height=800&resize=contain",
    whiteBg: true,
    orbit: "inner",
    angle: 180,
  },
  {
    name: "Verden Trends",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/WhatsApp-Image-2025-06-12-at-17.29.47_2925b156-1769023975001.jpg?width=800&height=800&resize=contain",
    whiteBg: true,
    orbit: "inner",
    angle: 270,
  },
  {
    name: "Himmel Fragranza",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/text-with-icon-01-1769023775460.png?width=800&height=800&resize=contain",
    orbit: "outer",
    angle: 0,
  },
  {
    name: "Go Room Go",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/Logo-white-1769023799934.png?width=800&height=800&resize=contain",
    orbit: "outer",
    angle: 72,
  },
  {
    name: "Cake Heaven",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/pink-complete-logo-01-1769023813483.png?width=800&height=800&resize=contain",
    orbit: "outer",
    angle: 144,
  },
  {
    name: "Belle Milk",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/Belle-logo-in-cyan-1769023845383.png?width=800&height=800&resize=contain",
    orbit: "outer",
    angle: 216,
  },
  {
    name: "Basumati Yoga",
    logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/logo1-transparent-013-1769023862405.png?width=800&height=800&resize=contain",
    orbit: "outer",
    angle: 288,
  },
];

const industryCards = [
  { name: "Restaurants & Cafés", icon: Utensils },
  { name: "Apparel & Fashion", icon: Shirt },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Startups", icon: Rocket },
  { name: "Local Services", icon: Store },
  { name: "Real Estate", icon: Building },
  { name: "Education", icon: GraduationCap },
  { name: "Corporate Services", icon: Briefcase },
];

const testimonials = [
  {
    text: "Manticore completely transformed our brand's visual identity. The 3D animations they created increased our ad engagement by 300%.",
    author: "Sarah J.",
    company: "Apparel Brand",
  },
  {
    text: "Finding an agency in Kolkata that understands both high-end design and performance marketing was a game-changer for our cafe chain.",
    author: "Rahul M.",
    company: "Local Cafe",
  },
];

const faqs = [
  {
    q: "What does Manticore Studio do?",
    a: "We are a digital marketing agency based in Kolkata. Branding, websites, social media, SEO, performance marketing, and content - we handle all of it, and we build it as one connected strategy rather than separate services.",
  },
  {
    q: "Who do you typically work with?",
    a: "Startups, local businesses, and growing brands across food, fashion, real estate, education, e-commerce, and professional services. If growing your business online is the goal, we should talk.",
  },
  {
    q: "How are you different from other agencies in Kolkata?",
    a: "We do not hand you a package and start posting. We understand your business first, then build a strategy specific to it, one that connects branding, content, and marketing rather than treating them as separate boxes to tick.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes, and a good number of our clients are small and mid-sized businesses. We work with what you have now and build toward where you want to go.",
  },
  {
    q: "What does your social media service include?",
    a: "Strategy, content planning, creatives, captions, scheduling, and community management mainly on Instagram and Facebook. Everything is built around your brand and your business goals.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "Typically three to six months, depending on competition and where your website currently stands. We build for rankings that last.",
  },
  {
    q: "Can you handle both creative and marketing?",
    a: "Yes. Design, content, and 3D production sit within the same team as our marketing function. You get consistent output without managing multiple agencies.",
  },
  {
    q: "How do we get started?",
    a: "Book a free consultation. We will learn about your business first, then outline a plan that fits your goals and budget.",
  },
  {
    q: "Do you do one-time projects or only retainers?",
    a: "Both. Standalone projects like branding or a website or ongoing monthly marketing, whatever works for your situation.",
  },
  {
    q: "What do you need from us to begin?",
    a: "Just a conversation. We ask the questions. You do not need to walk in with a brief already prepared.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      <Starfield />

      <main>
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/20 z-0" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E0E220]/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#134652]/30 rounded-full blur-[120px]" />
          </div>

          <div className="container mx-auto text-center relative z-10 pt-20">
            <h1 className="mb-8 tracking-tight flex flex-col items-center justify-center">
              <span className="text-lg md:text-2xl lg:text-3xl font-medium text-[#CECECD]/70 mb-4 block tracking-wide">
                Grow Smarter with a Reliable
              </span>
              <span className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black text-[#E0E220] leading-[1.1] md:leading-[0.9] mb-2 block drop-shadow-[0_0_30px_rgba(224,226,32,0.2)]">
                Digital Marketing
              </span>
              <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#CECECD] block">
                Agency <span className="font-light text-[#CECECD]/60">in Kolkata</span>
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-[#CECECD]/90 mb-6 font-light max-w-4xl mx-auto">
              Being online is no longer enough. Most businesses have a presence, very few actually grow from it.
            </p>

            <p className="text-lg md:text-xl text-[#CECECD]/60 mb-12 max-w-3xl mx-auto">
              Manticore Studio is a digital marketing agency in Kolkata that helps businesses get past the noise. We work on brand direction, digital presence, and marketing strategy, all with one goal in mind: real, measurable growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
              <Button
                size="lg"
                className="bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold text-lg px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(224,226,32,0.3)] hover:shadow-[0_0_50px_rgba(224,226,32,0.5)] transition-all"
                asChild
              >
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 relative z-10">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CECECD] mb-6 leading-tight">
                About Manticore Studio - A Creative Agency in Kolkata Built for Meaningful Growth
              </h2>
              <p className="text-xl text-[#E0E220] font-medium mb-8">
                For businesses tired of investing in marketing that goes nowhere.
              </p>
            </div>
            <div className="space-y-6 text-lg text-[#CECECD]/80 leading-relaxed max-w-4xl mx-auto">
              <p>The issue most businesses run into is not a lack of effort. It is that their branding says one thing, their content says another, and their marketing strategy is somewhere in between. Nothing lines up, so nothing compounds.</p>
              <p><strong>We fix that.</strong> Branding defines how people see you. Content tells your story clearly. Marketing puts that story in front of the right people, consistently. When the three move together, growth stops being a guessing game.</p>
              <p>No random posting. No campaigns built in isolation. Just a focused system tied directly to what your business is trying to achieve. We start by understanding your business. The strategy follows from there.</p>
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#E0E220] text-[#E0E220] hover:bg-[#E0E220] hover:text-black font-bold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(224,226,32,0.15)] hover:shadow-[0_0_25px_rgba(224,226,32,0.4)]"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#CECECD] mb-4">Our Digital Marketing Services in Kolkata</h2>
              <p className="text-[#CECECD]/70 text-lg">From building your brand from scratch to scaling what already works, we cover the full picture.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCards.map((srv, idx) => (
                <Link href="/services" key={idx} className="p-8 bg-[#0A0A0F] border border-[#E0E220]/20 rounded-xl hover:border-[#E0E220] transition-all group block">
                  <srv.icon className="w-10 h-10 text-[#CECECD]/50 group-hover:text-[#E0E220] mb-6 transition-colors" />
                  <h3 className="text-2xl font-bold text-[#CECECD] group-hover:text-[#E0E220] transition-colors mb-3">{srv.title}</h3>
                  <p className="text-[#CECECD]/60 leading-relaxed">{srv.desc}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/services" className="text-[#E0E220] font-bold hover:underline inline-flex items-center gap-2">
                Explore Our Services in Detail <Search className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 relative z-10 overflow-hidden">
          <div className="container mx-auto max-w-6xl text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#CECECD] mb-4">Brands We Work With</h2>
            <p className="text-[#CECECD]/70 text-lg max-w-2xl mx-auto">Trusted by brands across multiple industries. From growing startups to established local names, we work closely with our clients to create strategies that deliver real results.</p>
          </div>

          <div className="relative flex items-center justify-center min-h-[400px] md:min-h-150 py-10">
            <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-[#E0E220]/10" />
            <div className="absolute w-80 h-80 md:w-120 md:h-120 rounded-full border border-[#E0E220]/5" />
            <div className="absolute w-[24rem] h-[24rem] md:w-160 md:h-160 rounded-full border border-[#E0E220]/5" />

            <div className="relative z-20 w-24 h-24 md:w-32 md:h-32 bg-black rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(224,226,32,0.3)] border-2 border-[#E0E220]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/icon-1762235219951.png?width=800&height=800&resize=contain"
                alt="Manticore Studio"
                width={96}
                height={96}
                sizes="(max-width: 768px) 64px, 96px"
                className="w-16 h-16 md:w-24 md:h-24 rounded-full object-contain"
              />
            </div>

            {brandOrbits.map((brand, idx) => (
              <div
                key={idx}
                className={`absolute w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 z-10 hover:scale-150 hover:shadow-[0_0_40px_rgba(224,226,32,0.8)] ${brand.whiteBg ? "bg-white border-2 border-[#E0E220]/50 hover:border-[#E0E220]" : "bg-black/80 backdrop-blur-sm border border-[#E0E220]/30 hover:border-[#E0E220]"}`}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  animation:
                    brand.orbit === "inner"
                      ? "orbitInner 30s linear infinite"
                      : "orbitOuter 40s linear infinite reverse",
                  animationDelay: `${-brand.angle / (brand.orbit === "inner" ? 12 : 9)}s`,
                }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={48}
                  height={48}
                  sizes="(max-width: 768px) 40px, 48px"
                  className={`w-10 h-10 md:w-12 md:h-12 object-contain ${brand.whiteBg ? "rounded-full" : ""}`}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#CECECD] mb-4">Why Businesses Choose Manticore Studio</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Original thinking - no templates, no recycled ideas",
                "Every execution is backed by a strategy tied to your goals",
                "We think long-term, not just for the next campaign",
                "Straightforward communication throughout the entire process",
              ].map((point, idx) => (
                <div key={idx} className="p-8 bg-black border border-[#E0E220]/20 rounded-xl flex flex-col items-center text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#E0E220] mb-6" />
                  <p className="text-[#CECECD] font-medium text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ExpertiseTree />

        <section className="py-16 md:py-24 px-4 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#CECECD] mb-4">Industries We Work With</h2>
              <p className="text-[#CECECD]/70 text-lg max-w-2xl mx-auto">Different industries come with different challenges. We have worked across enough of them to know that context matters.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {industryCards.map((ind, idx) => (
                <div key={idx} className="aspect-square flex flex-col items-center justify-center p-6 bg-black border border-[#E0E220]/10 rounded-2xl hover:bg-[#E0E220]/5 hover:border-[#E0E220]/40 transition-all group">
                  <ind.icon className="w-10 h-10 text-[#CECECD]/50 group-hover:text-[#E0E220] mb-4 transition-colors" />
                  <h3 className="text-center font-semibold text-[#CECECD]">{ind.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#CECECD] mb-4">What Our Clients Say</h2>
              <p className="text-[#CECECD]/70 text-lg">Long-term relationships built on work that delivers results, not on good pitches or promises made at the start.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-24">
              {testimonials.map((quote, idx) => (
                <div key={idx} className="p-8 bg-[#0A0A0F] border border-[#E0E220]/20 rounded-2xl relative">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-[#E0E220]/10" />
                  <p className="text-xl text-[#CECECD]/90 italic mb-6">"{quote.text}"</p>
                  <div>
                    <p className="font-bold text-[#E0E220]">{quote.author}</p>
                    <p className="text-sm text-[#CECECD]/50">{quote.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 relative z-10">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#CECECD] mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-[#0A0A0F] border border-[#E0E220]/20 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
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

        <section className="py-16 md:py-24 px-4 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-3xl p-6 md:p-20 shadow-[0_0_50px_rgba(224,226,32,0.05)]">
              <h2 className="text-4xl md:text-5xl font-bold text-[#CECECD] mb-6">Let's Build a Brand That Actually Grows</h2>
              <p className="text-xl text-[#CECECD]/80 mb-10 max-w-2xl mx-auto">
                Book a free consultation and take the first step toward growth that is structured, sustainable, and built around your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button size="lg" className="bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold text-lg px-6 py-4 md:px-10 md:py-7 rounded-xl shadow-[0_0_30px_rgba(224,226,32,0.3)]" asChild>
                  <Link href="/contact">Book Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E0E220]/20 py-8 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/icon-1762235219951.png?width=800&height=800&resize=contain"
                alt="Manticore Studio Logo"
                width={32}
                height={32}
                sizes="32px"
                className="w-8 h-8 rounded-lg"
              />

              <span className="font-bold text-[#CECECD]">Manticore Studio</span>
            </div>
            <p className="text-[#CECECD]/60 text-sm">
              &copy; 2024 Manticore Studio. All rights reserved. | Empowering brands through creative visual storytelling.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
