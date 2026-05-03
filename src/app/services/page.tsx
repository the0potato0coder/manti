"use client";

import { Starfield } from "@/components/Starfield";
import { Button } from "@/components/ui/button";
import { Sparkles, Rocket, Target, Instagram, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black relative">
      <Starfield />
      
      {/* Navbar moved to global layout (src/components/Navbar.tsx) */}

      <section className="pt-40 pb-32 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#CECECD] mb-6">
            Our Digital <span className="text-[#E0E220]">Services</span>
          </h1>
          <p className="text-xl text-[#CECECD]/70 max-w-3xl mx-auto mb-20">
            From cutting-edge CGI to data-driven performance marketing, we offer a comprehensive suite of digital services designed to elevate your brand and drive measurable growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "AI Creatives", icon: Sparkles, color: "from-purple-500/20 to-purple-900/20", borderColor: "border-purple-500/50", textColor: "text-purple-400", desc: "AI Art Generation, Smart Content, Auto Editing" },
              { title: "Brand Development", icon: Rocket, color: "from-blue-500/20 to-blue-900/20", borderColor: "border-blue-500/50", textColor: "text-blue-400", desc: "Logo Design, Brand Identity, Visual Language" },
              { title: "Strategy Making", icon: Target, color: "from-green-500/20 to-green-900/20", borderColor: "border-green-500/50", textColor: "text-green-400", desc: "Market Research, Campaign Strategy, Growth Planning" },
              { title: "Social Media", icon: Instagram, color: "from-pink-500/20 to-pink-900/20", borderColor: "border-pink-500/50", textColor: "text-pink-400", desc: "Content Calendar, Influencer Marketing, Community Mgmt" },
              { title: "Visual Production", icon: Video, color: "from-orange-500/20 to-orange-900/20", borderColor: "border-orange-500/50", textColor: "text-orange-400", desc: "3D Animation, Motion Graphics, CGI & VFX" },
            ].map((service, idx) => (
              <div key={idx} className={`p-8 bg-linear-to-br ${service.color} border ${service.borderColor} rounded-xl text-left hover:-translate-y-2 transition-transform duration-300 group`}>
                <service.icon className={`h-12 w-12 mb-6 ${service.textColor} group-hover:scale-110 transition-transform`} />
                <h3 className={`text-2xl font-bold mb-4 ${service.textColor}`}>{service.title}</h3>
                <p className="text-[#CECECD]/80 mb-6">{service.desc}</p>
                <Button variant="outline" className={`w-full border-${service.borderColor.split('-')[1]}-500/50 ${service.textColor} hover:bg-${service.borderColor.split('-')[1]}-500/20`} asChild>
                  <Link href="/contact">Enquire Now</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-32 p-12 bg-[#0A0A0F] border border-[#E0E220]/20 rounded-2xl">
            <h2 className="text-3xl font-bold text-[#CECECD] mb-4">Not sure what you need?</h2>
            <p className="text-lg text-[#CECECD]/70 mb-8 max-w-2xl mx-auto">Let's hop on a quick call. We'll audit your current digital presence and recommend the best path forward.</p>
            <Button size="lg" className="bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold" asChild>
              <Link href="/contact">Book a Free Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}