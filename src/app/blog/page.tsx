"use client";

import { Starfield } from "@/components/Starfield";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock Data
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
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#E0E220]/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/icon-1762235219951.png?width=8000&height=8000&resize=contain" alt="Logo" width={40} height={40} className="w-10 h-10 rounded-lg"/>
              <span className="text-2xl font-bold text-[#CECECD]">Manticore Studio</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/services" className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium">Services</Link>
              <Link href="/about" className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium">About</Link>
              <Link href="/blog" className="text-[#E0E220] transition-colors font-medium">Blog</Link>
              <Link href="/contact" className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-12 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold text-[#CECECD] mb-12">Marketing <span className="text-[#E0E220]">Insights</span></h1>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((cat) => (
              <button key={cat} className={`px-6 py-2 rounded-full border transition-all ${cat === "All" ? "bg-[#E0E220] text-black border-[#E0E220] font-bold" : "bg-transparent text-[#CECECD] border-[#E0E220]/30 hover:border-[#E0E220]"}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <Link href={`/blog/${featuredPost.slug}`} className="block group mb-16">
            <div className="bg-linear-to-br from-[#134652]/40 to-[#0A0A0F] border border-[#E0E220]/30 rounded-3xl p-8 md:p-12 transition-all group-hover:border-[#E0E220]">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#E0E220]/20 text-[#E0E220] px-4 py-1 rounded-full text-sm font-semibold">{featuredPost.category}</span>
                <span className="flex items-center gap-2 text-[#CECECD]/60 text-sm"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#CECECD] mb-6 group-hover:text-[#E0E220] transition-colors">{featuredPost.title}</h2>
              <p className="text-xl text-[#CECECD]/70 mb-8 max-w-3xl">{featuredPost.excerpt}</p>
              <div className="flex items-center text-[#E0E220] font-bold">Read Article <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" /></div>
            </div>
          </Link>

          {/* Post Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <Card className="bg-[#0A0A0F] border-[#E0E220]/20 h-full hover:border-[#E0E220] transition-colors group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[#E0E220] text-sm font-semibold">{post.category}</span>
                      <span className="text-[#CECECD]/50 text-sm">{post.date}</span>
                    </div>
                    <CardTitle className="text-2xl text-[#CECECD] group-hover:text-[#E0E220] transition-colors leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center p-12 bg-black border border-[#E0E220]/20 rounded-2xl">
            <h3 className="text-3xl font-bold text-[#CECECD] mb-4">Need help executing these strategies?</h3>
            <p className="text-[#CECECD]/70 mb-8">Our team is ready to help you implement a winning marketing strategy.</p>
            <Button className="bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold" asChild>
              <Link href="/contact">Contact for Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}