"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Instagram, Linkedin, User } from "lucide-react";

export function TeamSlider() {
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
    <div className="relative mt-12">
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
              <Card className="bg-black border-[#E0E220]/20 max-w-md mx-auto">
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
      <button onClick={prevSlide} disabled={isTransitioning} className="absolute left-0 md:left-12 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-full flex items-center justify-center hover:bg-[#E0E220] transition-all z-10"><ChevronLeft className="h-6 w-6 text-[#E0E220]" /></button>
      <button onClick={nextSlide} disabled={isTransitioning} className="absolute right-0 md:right-12 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-full flex items-center justify-center hover:bg-[#E0E220] transition-all z-10"><ChevronRight className="h-6 w-6 text-[#E0E220]" /></button>
      <div className="flex justify-center gap-3 mt-12">
        {teamMembers.map((_, idx) => (
          <button key={idx} onClick={() => goToSlide(idx)} className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? "bg-[#E0E220] w-8" : "bg-[#E0E220]/30"}`} />
        ))}
      </div>
    </div>
  );
}
