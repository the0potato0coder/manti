"use client";

import { useState } from "react";
import { Starfield } from "@/components/Starfield";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Instagram, Linkedin, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const teamMembers = [
    { name: "Anirban Chanda", role: "Creative Head", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/visual-edit-uploads/1762675514297-ef1hohth2n9.jpg", link: "https://linkedin.com/in/anirbanchanda00", icon: "linkedin" },
    { name: "Subho Chakraborty", role: "Manager", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/visual-edit-uploads/1762675527571-5k8wq6ms20m.jpg", link: "https://linkedin.com/in/subho-chakraborty-67baa426b", icon: "linkedin" },
    { name: "Souvik", role: "Design Head", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/image-1767383313225.png?width=800&height=800&resize=contain", link: "", icon: "linkedin" },
    { name: "Deepta", role: "Graphic Designer", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/image-1767381726390.png?width=800&height=800&resize=contain", link: "https://www.instagram.com/_my.tiny.canvas_/", icon: "instagram" },
    { name: "Aritri", role: "Brand Designer", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/WhatsApp-Image-2025-11-09-at-22.17.08_59b976ce-1767381837548.jpg?width=800&height=800&resize=contain", link: "https://www.instagram.com/_nineteen_graphics?igsh=MXRzcm52dDNmdGpxYg==", icon: "instagram" },
    { name: "Anamika", role: "Graphic Designer", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/image-1767383065791.png?width=800&height=800&resize=contain", link: "https://www.instagram.com/_pixel__play_?utm_source=qr&igsh=MXM3b282NTE2YzZqcw==", icon: "instagram" },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };
  
  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  return (
    <div className="min-h-screen bg-black relative">
      <Starfield />
      
      {/* Navbar moved to global layout (src/components/Navbar.tsx) */}

      <section className="pt-40 pb-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#CECECD] mb-8">About <span className="text-[#E0E220]">Manticore</span></h1>
          
          <div className="space-y-8 text-left mb-20 bg-[#0A0A0F] p-8 md:p-12 rounded-2xl border border-[#E0E220]/20">
            <div>
              <h2 className="text-2xl font-bold text-[#E0E220] mb-4">Our Story</h2>
              <p className="text-lg text-[#CECECD]/80 leading-relaxed">
                Manticore Studio was born from a desire to bridge the gap between high-end creative art and data-driven marketing. We realized that beautiful visuals aren't enough if they don't convert, and great marketing fails without compelling creative.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#E0E220] mb-4">Our Approach</h2>
              <p className="text-lg text-[#CECECD]/80 leading-relaxed">
                We blend art and strategy. Whether it's CGI, 3D animation, or a local SEO campaign in Kolkata, we ensure every piece of content feels human, cinematic, and strategically positioned to capture your target audience.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#E0E220] mb-4">The Manticore Difference</h2>
              <p className="text-lg text-[#CECECD]/80 leading-relaxed">
                Unlike traditional agencies that outsource creative or marketing, we do both in-house. This ensures your brand's visual identity perfectly aligns with your performance marketing goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Slider */}
      <section className="py-20 px-4 relative z-10 bg-linear-to-b from-[#0A0A0F] to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#CECECD] mb-6">Meet Our Team</h2>
          </div>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-none">
                {teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className={`w-full shrink-0 px-4 transition-all duration-500 ${
                      idx === currentSlide ? "opacity-100 animate-[fadeIn_0.5s_ease-out]" : "opacity-0 absolute inset-0 animate-[fadeOut_0.5s_ease-out]"
                    }`}
                    style={{ display: idx === currentSlide ? "block" : "none" }}
                  >
                    <Card className="bg-[#0A0A0F] border-[#E0E220]/20 max-w-md mx-auto">
                      <CardHeader className="text-center">
                        <div
                          className={`w-32 h-32 mx-auto mb-6 bg-linear-to-br from-[#E0E220] to-[#134652] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(224,226,32,0.3)] ${member.image ? "bg-cover! bg-center!" : ""}`}
                          style={member.image ? { backgroundImage: `url(${member.image})` } : {}}
                        >
                          {!member.image && <User className="h-16 w-16 text-black" />}
                        </div>
                        <CardTitle className="text-3xl text-[#CECECD] mb-3">{member.name}</CardTitle>
                        <CardDescription className="text-[#E0E220] font-semibold text-xl mb-6">{member.role}</CardDescription>
                      </CardHeader>
                      <CardContent className="text-center pb-8">
                        <a href={member.link || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-lg text-[#CECECD] hover:bg-[#E0E220] hover:text-black transition-all">
                          {member.icon === "linkedin" ? <Linkedin className="h-6 w-6" /> : <Instagram className="h-6 w-6" />}
                          {member.icon === "linkedin" ? "Connect on LinkedIn" : "View Portfolio"}
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={prevSlide} disabled={isTransitioning} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-full flex items-center justify-center hover:bg-[#E0E220] transition-all z-10"><ChevronLeft className="h-6 w-6 text-[#E0E220]" /></button>
            <button onClick={nextSlide} disabled={isTransitioning} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-full flex items-center justify-center hover:bg-[#E0E220] transition-all z-10"><ChevronRight className="h-6 w-6 text-[#E0E220]" /></button>
            <div className="flex justify-center gap-3 mt-12">
              {teamMembers.map((_, idx) => (
                <button key={idx} onClick={() => goToSlide(idx)} className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? "bg-[#E0E220] w-8" : "bg-[#E0E220]/30"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32 pt-20 px-4 relative z-10 text-center">
        <h2 className="text-4xl font-bold text-[#CECECD] mb-6">Ready to build something amazing?</h2>
        <Button size="lg" className="bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold" asChild>
          <Link href="/contact">Let's Work Together</Link>
        </Button>
      </section>
    </div>
  );
}