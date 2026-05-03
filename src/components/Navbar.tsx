"use client";

import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#E0E220]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            {/* Optimized image size query params to 400x400 for faster LCP */}
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/icon-1762235219951.png?width=400&height=400&resize=contain" 
              alt="Manticore Studio Logo" 
              width={40} 
              height={40} 
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-2xl font-bold text-[#CECECD]">Manticore Studio</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#projects" className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium">Showcase</Link>
            <Link href="/services" className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium">Services</Link>
            <Link href="/about" className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium">About Us</Link>
            <Link href="/blog" className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium">Blog</Link>
            <Link href="/contact" className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
