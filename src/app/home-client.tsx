"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BarChart,
  ChevronRight,
  Coffee,
  Lightbulb,
  Quote,
  Shirt,
  Store,
  Target,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Starfield } from "@/components/Starfield";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      <Starfield />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#E0E220]/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/icon-1762235219951.png?width=8000&height=8000&resize=contain"
                alt="Manticore Studio Logo"
                width={40}
                height={40}
                sizes="40px"
                className="w-10 h-10 rounded-lg"
              />

              <span className="text-2xl font-bold text-[#CECECD]">Manticore Studio</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/#projects"
                className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium"
              >
                Showcase
              </Link>
              <Link href="/services" className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium">
                Services
              </Link>
              <Link href="/about" className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium">
                About Us
              </Link>
              <Link href="/contact" className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black z-0" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E0E220]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#134652]/30 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto text-center relative z-10 pt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#CECECD] mb-6 tracking-tight leading-tight">
            Digital Marketing & <br className="hidden md:block" />
            Creative Agency in <span className="text-[#E0E220]">Kolkata</span>
          </h1>

          <p className="text-2xl md:text-4xl text-[#CECECD]/90 mb-6 font-light max-w-4xl mx-auto">
            We build brands through design, development and performance marketing
          </p>

          <p className="text-lg md:text-xl text-[#CECECD]/60 mb-12 max-w-3xl mx-auto">
            A new-age creative and marketing house specializing in CGI, 3D & 2D animation, motion
            graphics, VFX, brand storytelling, and social media marketing.
          </p>

          <div className="flex items-center justify-center mt-4">
            <Button
              size="lg"
              className="bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold text-lg px-10 py-7 rounded-xl shadow-[0_0_30px_rgba(224,226,32,0.3)] hover:shadow-[0_0_50px_rgba(224,226,32,0.5)] transition-all"
              asChild
            >
              <a href="#contact">Get Free Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#CECECD] mb-6">Our Showcase</h2>
            <p className="text-xl text-[#CECECD]/70 max-w-2xl mx-auto">
              Explore our portfolio of cutting-edge creative work across motion design, 3D animation,
              and brand storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/241508869?ilo0=1"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl">New Project</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold">Featured Work</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/233410319?ilo0=1"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl">Branding Project</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold">Belle-Milk Branding</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/178853093?ilo0=1"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl">3D Animation Project</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold">TWS Features</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/222993967?ilo0=1"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl whitespace-pre-line!">Liquid Motion Graphics</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold whitespace-pre-line!">Fruites in 3D</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/205267559?ilo0=1"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl whitespace-pre-line!">Concept Project</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold whitespace-pre-line!">Stone on Air</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/200628625?ilo0=1"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl whitespace-pre-line!">Naked Eye Animation</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold whitespace-pre-line!">Concept Porsche</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/224147613?ilo0=1"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl">Featured Project</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold whitespace-pre-line!">lequioer splashes</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)] flex items-center justify-center min-h-70"
              onClick={() => {
                window.location.href = "https://www.behance.net/Manticorestudio";
              }}
            >
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-full flex items-center justify-center group-hover:bg-[#E0E220] group-hover:border-[#E0E220] transition-all">
                  <ChevronRight className="h-10 w-10 text-[#E0E220] group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-[#CECECD] mb-2 group-hover:text-[#E0E220] transition-colors">
                  View More
                </h3>
                <p className="text-[#CECECD]/60">Explore our full portfolio on Behance</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative z-10 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#CECECD] mb-6">Already Working With</h2>
            <p className="text-xl text-[#CECECD]/70 max-w-2xl mx-auto">
              Trusted by amazing brands across industries
            </p>
          </div>

          <div className="relative flex items-center justify-center min-h-125 md:min-h-150">
            <div className="absolute w-70 h-70 md:w-80 md:h-80 rounded-full border border-[#E0E220]/10" />
            <div className="absolute w-100 h-100 md:w-120 md:h-120 rounded-full border border-[#E0E220]/5" />
            <div className="absolute w-130 h-130 md:w-160 md:h-160 rounded-full border border-[#E0E220]/5" />

            <div className="relative z-20 w-24 h-24 md:w-32 md:h-32 bg-black rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(224,226,32,0.3)] border-2 border-[#E0E220]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/icon-1762235219951.png?width=8000&height=8000&resize=contain"
                alt="Manticore Studio"
                width={96}
                height={96}
                sizes="(max-width: 768px) 64px, 96px"
                className="w-16 h-16 md:w-24 md:h-24 rounded-full object-contain"
              />
            </div>

            {[
              {
                name: "Balaji Bedding",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/balaji-logo_name-01-resized-1769023875632.jpg?width=8000&height=8000&resize=contain",
                whiteBg: true,
                orbit: "inner",
                angle: 0,
              },
              {
                name: "Agamoni",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/logo1-resized-1769023887769.jpg?width=8000&height=8000&resize=contain",
                whiteBg: true,
                orbit: "inner",
                angle: 90,
              },
              {
                name: "Own's Creation",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/visiting-card-1769023939792.jpg?width=8000&height=8000&resize=contain",
                whiteBg: true,
                orbit: "inner",
                angle: 180,
              },
              {
                name: "Verden Trends",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/WhatsApp-Image-2025-06-12-at-17.29.47_2925b156-1769023975001.jpg?width=8000&height=8000&resize=contain",
                whiteBg: true,
                orbit: "inner",
                angle: 270,
              },
              {
                name: "Himmel Fragranza",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/text-with-icon-01-1769023775460.png?width=8000&height=8000&resize=contain",
                orbit: "outer",
                angle: 0,
              },
              {
                name: "Go Room Go",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/Logo-white-1769023799934.png?width=8000&height=8000&resize=contain",
                orbit: "outer",
                angle: 72,
              },
              {
                name: "Cake Heaven",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/pink-complete-logo-01-1769023813483.png?width=8000&height=8000&resize=contain",
                orbit: "outer",
                angle: 144,
              },
              {
                name: "Belle Milk",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/Belle-logo-in-cyan-1769023845383.png?width=8000&height=8000&resize=contain",
                orbit: "outer",
                angle: 216,
              },
              {
                name: "Basumati Yoga",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/logo1-transparent-013-1769023862405.png?width=8000&height=8000&resize=contain",
                orbit: "outer",
                angle: 288,
              },
            ].map((brand, idx) => (
              <div
                key={idx}
                className={`absolute w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 z-10 hover:z-100! hover:scale-150 hover:shadow-[0_0_40px_rgba(224,226,32,0.8)] ${
                  brand.whiteBg
                    ? "bg-white border-2 border-[#E0E220]/50 hover:border-[#E0E220]"
                    : "bg-black/80 backdrop-blur-sm border border-[#E0E220]/30 hover:border-[#E0E220]"
                }`}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%)`,
                  animation:
                    brand.orbit === "inner"
                      ? `orbitInner 30s linear infinite`
                      : `orbitOuter 40s linear infinite reverse`,
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
        </div>
      </section>

      <section className="py-24 px-4 relative z-10 bg-linear-to-b from-black to-[#0A0A0F]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#CECECD] mb-4">Why Choose Manticore?</h2>
            <p className="text-[#CECECD]/70 text-lg">We don't just make things look good; we make them perform.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Creative-First", icon: Lightbulb, desc: "We push boundaries with thumb-stopping 3D, CGI, and motion graphics that demand attention." },
              { title: "Strategy-Driven", icon: Target, desc: "Every visual is backed by deep market research and a clear understanding of your audience." },
              { title: "Performance-Focused", icon: BarChart, desc: "We track metrics that matter. Our goal is tangible growth, conversions, and ROI." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-[#0A0A0F] border border-[#E0E220]/20 rounded-xl hover:border-[#E0E220]/50 transition-colors">
                <item.icon className="w-12 h-12 text-[#E0E220] mb-6" />
                <h3 className="text-2xl font-bold text-[#CECECD] mb-3">{item.title}</h3>
                <p className="text-[#CECECD]/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#CECECD] mb-4">Industries We Serve</h2>
              <p className="text-[#CECECD]/70 text-lg max-w-2xl">We tailor our creative and marketing strategies to fit the unique challenges of your specific market.</p>
            </div>
            <Button className="bg-transparent border border-[#E0E220] text-[#E0E220] hover:bg-[#E0E220]/10" asChild>
              <Link href="/contact">Is your industry missing? Let's talk.</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { name: "Restaurants", icon: Utensils },
              { name: "Cafes", icon: Coffee },
              { name: "Apparel Brands", icon: Shirt },
              { name: "Local Businesses", icon: Store }
            ].map((ind, idx) => (
              <div key={idx} className="aspect-square flex flex-col items-center justify-center p-6 bg-black border border-[#E0E220]/10 rounded-2xl hover:bg-[#E0E220]/5 hover:border-[#E0E220]/40 transition-all cursor-pointer group">
                <ind.icon className="w-12 h-12 text-[#CECECD]/50 group-hover:text-[#E0E220] mb-4 transition-colors" />
                <h3 className="text-lg font-semibold text-[#CECECD]">{ind.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10 bg-linear-to-t from-black to-[#0A0A0F]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {[
              { text: "Manticore completely transformed our brand's visual identity. The 3D animations they created increased our ad engagement by 300%.", author: "Sarah J.", company: "Apparel Brand" },
              { text: "Finding an agency in Kolkata that understands both high-end design and performance marketing was a game-changer for our cafe chain.", author: "Rahul M.", company: "Local Cafe" }
            ].map((quote, idx) => (
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

          <div className="text-center bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-3xl p-12 md:p-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#CECECD] mb-6">Let's grow your business.</h2>
            <p className="text-xl text-[#CECECD]/80 mb-8 max-w-2xl mx-auto">Ready to dominate your market? Book a free consultation to see how we can help you scale.</p>
            <Button size="lg" className="bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold text-lg px-8 py-6 rounded-xl" asChild>
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E0E220]/20 py-8 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/icon-1762235219951.png?width=8000&height=8000&resize=contain"
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
