import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, Layers, TrendingUp, MessageSquare, ShieldCheck } from "lucide-react";

import { Starfield } from "@/components/Starfield";
import { Button } from "@/components/ui/button";
import { TeamSlider } from "./team-slider";

export const metadata: Metadata = {
  title: "About Manticore Studio | Digital Marketing Company Kolkata",
  description:
    "Learn about Manticore Studio, a creative digital marketing company in Kolkata.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black relative">
      <Starfield />

      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#CECECD] mb-8">
            About <span className="text-[#E0E220]">Manticore Studio</span>
          </h1>
          <p className="text-xl text-[#CECECD]/70 leading-relaxed">
            We are a creative digital marketing studio based in Kolkata. Built for businesses that want more than just another vendor. We think strategically, execute with precision, and treat every brand we work with as if it were our own.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY & OUR APPROACH */}
      <section className="py-20 px-4 relative z-10 bg-[#0A0A0F] border-t border-[#E0E220]/10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#E0E220] mb-6">Our Story</h2>
              <div className="text-lg text-[#CECECD]/80 leading-relaxed space-y-4">
                <p>Manticore Studio was founded on a simple but frustrating observation. Too many good businesses were being let down by scattered marketing, generic agencies, and branding that did not reflect what they actually stood for.</p>
                <p>We saw small businesses spending money on ads without a solid brand behind them. We saw startups building websites before they had a clear identity. We saw local brands with real potential sitting invisible on Google while their competitors, sometimes offering far less, were getting all the attention.</p>
                <p>We started Manticore Studio to change that. Not by offering more services than anyone else, but by doing things in the right order with the right thinking behind every decision. Strategy first. Then creative. Then execution. Then growth.</p>
                <p>That approach has not changed. Every client we take on gets a team that is genuinely invested in seeing their business move forward. Not just one that shows up with a monthly report and calls it done.</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#E0E220] mb-6">Our Approach</h2>
              <div className="text-lg text-[#CECECD]/80 leading-relaxed space-y-4">
                <p>Most agencies keep their services in separate boxes. The design team does not talk to the SEO team. The ad team runs campaigns without input from the content team. The result is a brand that looks inconsistent, markets inefficiently, and never quite builds the momentum it should.</p>
                <p className="font-semibold text-[#CECECD]">We work differently.</p>
                <p>At Manticore Studio, creativity, development, and marketing work together as one connected system. When we build a brand identity, we are already thinking about how it translates to social media, to a website, and to an ad creative. When we build an SEO strategy, we align it with the content being produced and the pages being developed. Nothing happens in isolation.</p>
                <p>This means less wasted effort, stronger results, and a brand that feels coherent because it was built that way from the beginning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY WE ARE DIFFERENT */}
      <section className="py-24 px-4 relative z-10 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#CECECD] mb-6">Why We Are Different</h2>
            <p className="text-xl text-[#CECECD]/70 max-w-3xl mx-auto">
              There are plenty of digital marketing agencies in Kolkata. We know that. So here is an honest answer to why our clients choose us and stay with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "We think before we do", icon: Lightbulb, desc: "Every project starts with understanding your business, your audience, and what you are actually trying to achieve. We do not jump straight to deliverables. We make sure the strategy is right first." },
              { title: "We work across the full picture", icon: Layers, desc: "Branding, web, social, SEO, content, and ads. We handle all of it under one roof. That means your brand stays consistent and your marketing channels support each other instead of pulling in different directions." },
              { title: "We are built for growing businesses", icon: TrendingUp, desc: "We understand that budgets are real, timelines matter, and results need to justify the investment. We do not overpromise. We set clear expectations and focus on the work that actually moves the needle." },
              { title: "We communicate clearly", icon: MessageSquare, desc: "No jargon, no vague reports, no disappearing between check-ins. Every client knows exactly what is happening, why it is happening, and what comes next." },
              { title: "We take quality seriously", icon: ShieldCheck, desc: "From a logo to a landing page to a single social post, everything that leaves our studio is something we are proud to put our name on." },
            ].map((point, idx) => (
              <div key={idx} className="p-8 bg-[#0A0A0F] border border-[#E0E220]/20 rounded-2xl hover:border-[#E0E220]/50 transition-colors">
                <point.icon className="w-10 h-10 text-[#E0E220] mb-6" />
                <h3 className="text-2xl font-bold text-[#CECECD] mb-3">{point.title}</h3>
                <p className="text-[#CECECD]/70 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR TEAM */}
      <section className="py-24 px-4 relative z-10 bg-linear-to-b from-black to-[#0A0A0F]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#CECECD] mb-6">Our Team</h2>
            <p className="text-xl text-[#CECECD]/70 max-w-2xl mx-auto">
              Manticore Studio is made up of designers, developers, strategists, content creators, and marketing specialists who genuinely care about the work they produce.
            </p>
          </div>

          <TeamSlider />
        </div>
      </section>

      {/* 5. WORK WITH US (Final CTA) */}
      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl text-center bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-3xl p-6 md:p-20 shadow-[0_0_50px_rgba(224,226,32,0.05)]">
          <h2 className="text-4xl md:text-5xl font-bold text-[#CECECD] mb-6">Work With Us</h2>
          <div className="text-lg text-[#CECECD]/80 leading-relaxed space-y-6 mb-10 max-w-3xl mx-auto">
            <p>If you have read this far, you already have a sense of how we work and what we stand for. What we would like to know now is where your business is, where you want to take it, and what is getting in the way.</p>
            <p>That is all we need to start. No lengthy forms, no pitch decks before we have spoken, no pressure to commit on the first call. Just a straightforward conversation about your brand and how we can help it grow.</p>
          </div>
          <Button size="lg" className="bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold text-lg px-6 py-4 md:px-10 md:py-7 rounded-xl shadow-[0_0_30px_rgba(224,226,32,0.3)] hover:shadow-[0_0_50px_rgba(224,226,32,0.5)] transition-all" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
