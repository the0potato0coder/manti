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

  // Your existing team members array goes here...
  const teamMembers = [
    { name: "Anirban Chanda", role: "Creative Head", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/visual-edit-uploads/1762675514297-ef1hohth2n9.jpg", link: "https://linkedin.com/in/anirbanchanda00", icon: "linkedin" },
    { name: "Subho Chakraborty", role: "Manager", image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/visual-edit-uploads/1762675527571-5k8wq6ms20m.jpg", link: "https://linkedin.com/in/subho-chakraborty-67baa426b", icon: "linkedin" },
    // ... add the rest of your team members
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

  return (
    <div className="min-h-screen bg-black relative">
      <Starfield />
      
      {/* Navigation (Updated links) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#E0E220]/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/icon-1762235219951.png?width=8000&height=8000&resize=contain" alt="Logo" width={40} height={40} className="w-10 h-10 rounded-lg"/>
              <span className="text-2xl font-bold text-[#CECECD]">Manticore Studio</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#projects" className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium">Showcase</Link>
              <Link href="/services" className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium">Services</Link>
              <Link href="/about" className="text-[#E0E220] transition-colors font-medium">About Us</Link>
              <Link href="/contact" className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

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

      {/* Insert your existing Team Slider Section here (from home-client.tsx lines ~592 to ~656) */}
      
      <section className="pb-32 px-4 relative z-10 text-center">
        <h2 className="text-4xl font-bold text-[#CECECD] mb-6">Ready to build something amazing?</h2>
        <Button size="lg" className="bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold" asChild>
          <Link href="/contact">Let's Work Together</Link>
        </Button>
      </section>
    </div>
  );
}