"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sparkles, Rocket, Target, Instagram, Video } from "lucide-react";

const expertiseData = [
  {
    id: "design",
    title: "Design",
    skills: ["Brand Identity", "Visual & Graphic Design", "3D Modeling", "Video Editing"],
  },
  {
    id: "marketing",
    title: "Marketing",
    skills: ["SEO Optimization", "Performance Ads", "Social Media Management", "Content Marketing"],
  },
  {
    id: "development",
    title: "Development",
    skills: ["Web Development", "E-commerce Solutions", "Landing Pages", "CMS Integration"],
  },
];

export function ExpertiseTree() {
  const [activeTab, setActiveTab] = useState("design");

  const activeData = expertiseData.find((d) => d.id === activeTab);

  return (
    <section id="expertise" className="py-32 px-4 relative z-10 bg-linear-to-b from-black to-[#0A0A0F]">
      <div className="container mx-auto max-w-6xl">
        <div className="relative">
          <div className="flex justify-center mb-8">
            <Button
              size="lg"
              className="bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold text-2xl px-12 py-8 rounded-xl shadow-[0_0_30px_rgba(224,226,32,0.3)] hover:shadow-[0_0_50px_rgba(224,226,32,0.5)] transition-all cursor-default"
            >
              Our Expertise
            </Button>
          </div>

          <div className="flex justify-center mb-0">
            <div className="w-1 h-12 bg-linear-to-b from-[#E0E220] to-[#E0E220]/50" />
          </div>

          <div className="hidden md:block relative mb-0">
            <div className="absolute left-1/2 -translate-x-1/2 w-[85%] h-1 bg-linear-to-r from-transparent via-[#E0E220] to-transparent" />
          </div>

          <div className="hidden md:flex justify-between px-[7.5%] mb-0">
            {[1, 2, 3, 4, 5].map((_, idx) => (
              <div
                key={idx}
                className="w-1 h-12 bg-linear-to-b from-[#E0E220]/50 to-[#E0E220]/30"
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-2 mb-8">
            {[
              {
                title: "AI Creatives",
                icon: Sparkles,
                color: "from-purple-500/20 to-purple-900/20",
                borderColor: "border-purple-500/50",
                textColor: "text-purple-400",
                lineColor: "from-purple-500/30 to-transparent",
                hoverBg: "hover:bg-purple-500/10",
                items: ["AI Art Generation", "Smart Content", "Auto Editing"],
                tags: ["Prompts", "Training"],
              },
              {
                title: "Brand Development",
                icon: Rocket,
                color: "from-blue-500/20 to-blue-900/20",
                borderColor: "border-blue-500/50",
                textColor: "text-blue-400",
                lineColor: "from-blue-500/30 to-transparent",
                hoverBg: "hover:bg-blue-500/10",
                items: ["Logo Design", "Brand Identity", "Visual Language"],
                tags: ["Guidelines", "Assets"],
              },
              {
                title: "Strategy Making",
                icon: Target,
                color: "from-green-500/20 to-green-900/20",
                borderColor: "border-green-500/50",
                textColor: "text-green-400",
                lineColor: "from-green-500/30 to-transparent",
                hoverBg: "hover:bg-green-500/10",
                items: ["Market Research", "Campaign Strategy", "Growth Planning"],
                tags: ["Analytics", "KPIs"],
              },
              {
                title: "Social Media",
                icon: Instagram,
                color: "from-pink-500/20 to-pink-900/20",
                borderColor: "border-pink-500/50",
                textColor: "text-pink-400",
                lineColor: "from-pink-500/30 to-transparent",
                hoverBg: "hover:bg-pink-500/10",
                items: ["Content Calendar", "Influencer Marketing", "Community Mgmt"],
                tags: ["Reels", "Stories"],
              },
              {
                title: "Visual Production",
                icon: Video,
                color: "from-orange-500/20 to-orange-900/20",
                borderColor: "border-orange-500/50",
                textColor: "text-orange-400",
                lineColor: "from-orange-500/30 to-transparent",
                hoverBg: "hover:bg-orange-500/10",
                items: ["3D Animation", "Motion Graphics", "CGI & VFX"],
                tags: ["Render", "Composite"],
              },
            ].map((branch, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* Main Branch Card */}
                <div
                  className={`w-full max-w-45 p-4 bg-linear-to-br ${branch.color} border ${branch.borderColor} rounded-xl text-center hover:scale-105 transition-transform cursor-pointer group`}
                >
                  <branch.icon
                    className={`h-8 w-8 mx-auto mb-2 ${branch.textColor} group-hover:scale-110 transition-transform`}
                  />
                  <span className={`font-bold ${branch.textColor}`}>{branch.title}</span>
                </div>

                {/* Connecting line to sub-items */}
                <div className={`w-0.5 h-8 bg-linear-to-b ${branch.lineColor} my-2 opacity-60`} />

                {/* Sub-items */}
                <div className="space-y-3 w-full max-w-45">
                  {branch.items.map((item, i) => (
                    <div
                      key={i}
                      className={`p-3 bg-[#0A0A0F] border ${branch.borderColor} opacity-60 rounded-lg text-center ${branch.hoverBg} hover:opacity-100 hover:border-opacity-100 transition-all cursor-pointer`}
                    >
                      <span className={`text-sm ${branch.textColor}`}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Connecting line to tags */}
                <div className={`w-0.5 h-6 bg-linear-to-b ${branch.lineColor} my-2 opacity-40`} />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center max-w-45">
                  {branch.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 bg-[#0A0A0F] border ${branch.borderColor} opacity-50 rounded-full text-xs ${branch.textColor} ${branch.hoverBg} hover:opacity-100 transition-colors cursor-pointer`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-[#CECECD] mb-8">Our Tools & Technologies</h3>
            <div className="relative overflow-hidden">
              <div className="flex gap-4 animate-[scroll_40s_linear_infinite]">
                {[
                  "Blender",
                  "After Effects",
                  "Cinema 4D",
                  "Arnold",
                  "Affinity",
                  "Ai",
                  "Adobe Suite",
                  "DaVinci Resolve",
                  "Google Analytics",
                  "SEMrush",
                  "HubSpot",
                  "Mailchimp",
                  "Hootsuite",
                  "Meta Ads Manager",
                  "Google Ads",
                  "Canva",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-6 py-3 bg-[#0A0A0F] border border-[#E0E220]/30 rounded-lg text-[#CECECD] font-medium hover:border-[#E0E220] hover:bg-[#E0E220]/5 transition-all whitespace-nowrap shrink-0"
                  >
                    {tool}
                  </span>
                ))}
                {[
                  "Blender",
                  "After Effects",
                  "Cinema 4D",
                  "Arnold",
                  "Affinity",
                  "Ai",
                  "Adobe Suite",
                  "DaVinci Resolve",
                  "Google Analytics",
                  "SEMrush",
                  "HubSpot",
                  "Mailchimp",
                  "Hootsuite",
                  "Meta Ads Manager",
                  "Google Ads",
                  "Canva",
                ].map((tool) => (
                  <span
                    key={`${tool}-duplicate`}
                    className="px-6 py-3 bg-[#0A0A0F] border border-[#E0E220]/30 rounded-lg text-[#CECECD] font-medium hover:border-[#E0E220] hover:bg-[#E0E220]/5 transition-all whitespace-nowrap shrink-0"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}} />
      </div>
    </section>
  );
}