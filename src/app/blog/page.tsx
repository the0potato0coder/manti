"use client";

import { Starfield } from "@/components/Starfield";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Placeholder data based on the wireframe
const categories = ["All", "SEO", "Social Media", "Branding"];
const featuredPost = {
  title: "The Ultimate Guide to Local SEO for Kolkata Businesses",
  excerpt: "Learn how to dominate local search results and drive more foot traffic to your physical storefront with these proven SEO strategies.",
  category: "SEO",
  date: "Oct 24, 2024",
  slug: "local-seo-kolkata-guide"
};
const posts = [
  { title: "Why 3D Animation is the Future of Social Media Ads", category: "Social Media", date: "Oct 18, 2024", slug: "3d-animation-social-ads" },
  { title: "Rebranding a Legacy Business: A Step-by-Step Guide", category: "Branding", date: "Oct 12, 2024", slug: "rebranding-legacy-business" },
  { title: "5 Common Mistakes in Restaurant Marketing", category: "Social Media", date: "Oct 05, 2024", slug: "restaurant-marketing-mistakes" },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black relative">
      <Starfield />
      
      {/* Navbar moved to global layout (src/components/Navbar.tsx) */}

      <div className="relative pt-40 pb-12 px-4 z-10 min-h-screen">
        
        {/* --- COMING SOON OVERLAY --- */}
        <div className="absolute inset-0 z-40 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center">
            <div className="bg-[#0A0A0F] border border-[#E0E220]/30 p-8 md:p-16 rounded-3xl text-center max-w-2xl mx-4 shadow-[0_0_50px_rgba(224,226,32,0.15)] transform -translate-y-10">
                <div className="w-20 h-20 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Lock className="w-10 h-10 text-[#E0E220]" />
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#CECECD] mb-6">Coming <span className="text-[#E0E220]">Soon</span></h2>
                <p className="text-xl text-[#CECECD]/70 mb-10 leading-relaxed">
                    We are brewing up some serious marketing insights. Our blog is currently under development and will launch shortly.
                </p>
                <Button className="bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold px-10 py-6 text-lg rounded-xl shadow-[0_0_20px_rgba(224,226,32,0.2)]" asChild>
                    <Link href="/">Return to Home</Link>
                </Button>
            </div>
        </div>

        {/* --- BACKGROUND CONTENT (Blurred & Unclickable) --- */}
        <div className="container mx-auto max-w-6xl opacity-30 select-none pointer-events-none">
          <h1 className="text-5xl md:text-7xl font-bold text-[#CECECD] mb-12">Marketing <span className="text-[#E0E220]">Insights</span></h1>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((cat) => (
              <button key={cat} className={`px-6 py-2 rounded-full border transition-all ${cat === "All" ? "bg-[#E0E220] text-black border-[#E0E220] font-bold" : "bg-transparent text-[#CECECD] border-[#E0E220]/30"}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="block mb-16">
            <div className="bg-linear-to-br from-[#134652]/40 to-[#0A0A0F] border border-[#E0E220]/30 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#E0E220]/20 text-[#E0E220] px-4 py-1 rounded-full text-sm font-semibold">{featuredPost.category}</span>
                <span className="flex items-center gap-2 text-[#CECECD]/60 text-sm"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#CECECD] mb-6">{featuredPost.title}</h2>
              <p className="text-xl text-[#CECECD]/70 mb-8 max-w-3xl">{featuredPost.excerpt}</p>
              <div className="flex items-center text-[#E0E220] font-bold">Read Article <ArrowRight className="ml-2 w-5 h-5" /></div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {posts.map((post) => (
              <Card key={post.slug} className="bg-[#0A0A0F] border-[#E0E220]/20 h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#E0E220] text-sm font-semibold">{post.category}</span>
                    <span className="text-[#CECECD]/50 text-sm">{post.date}</span>
                  </div>
                  <CardTitle className="text-2xl text-[#CECECD] leading-tight">{post.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center p-12 bg-[#0A0A0F] border border-[#E0E220]/20 rounded-2xl">
            <h3 className="text-3xl font-bold text-[#CECECD] mb-4">Need help executing these strategies?</h3>
            <p className="text-[#CECECD]/70 mb-8">Our team is ready to help you implement a winning marketing strategy.</p>
            <Button className="bg-[#E0E220] text-black font-bold">
              Contact for Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}