"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Globe, Youtube, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full mt-auto relative bg-black font-sans border-t border-[#E0E220]/20">
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block opacity-20">
        <svg className="absolute right-0 bottom-0 h-full w-2/3" viewBox="0 0 800 600" preserveAspectRatio="none">
          <path d="M800,600 L100,600 L400,100 Z" fill="none" stroke="#E0E220" strokeWidth="1" strokeOpacity="0.15"/>
          <path d="M800,600 L200,600 L500,200 Z" fill="none" stroke="#E0E220" strokeWidth="1" strokeOpacity="0.1"/>
          <path d="M800,300 L300,600" fill="none" stroke="#E0E220" strokeWidth="1" strokeOpacity="0.1"/>
          <path d="M600,0 L250,600" fill="none" stroke="#E0E220" strokeWidth="1" strokeOpacity="0.05"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/icon-1762235219951.png?width=800&height=800&resize=contain"
                alt="Manticore Studio Logo"
                width={36}
                height={36}
                className="w-9 h-9 rounded-md object-contain"
              />
              <span className="font-bold text-[#CECECD] text-2xl tracking-wide uppercase">Manticore</span>
            </Link>

            <p className="text-[#CECECD]/80 text-sm md:text-base leading-relaxed mb-10 max-w-sm font-light">
              Building brands through branding, development, marketing, and creative experiences designed for meaningful growth.
            </p>

            <div className="flex items-center gap-6">
              <Link href="https://www.instagram.com/manticorestudio_" target="_blank" rel="noopener noreferrer" className="text-[#CECECD] hover:text-[#E0E220] transition-colors">
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <Link href="https://www.linkedin.com/company/manticorestudio/" target="_blank" rel="noopener noreferrer" className="text-[#CECECD] hover:text-[#E0E220] transition-colors">
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <Link href="https://www.behance.net/Manticorestudio" target="_blank" rel="noopener noreferrer" className="text-[#CECECD] hover:text-[#E0E220] transition-colors">
                <Globe className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <Link href="https://youtube.com/@manticorestudio-p5t" target="_blank" rel="noopener noreferrer" className="text-[#CECECD] hover:text-[#E0E220] transition-colors">
                <Youtube className="w-5 h-5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-[#CECECD] font-semibold mb-6 text-sm md:text-base tracking-wide uppercase">Explore</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/showcase" className="text-[#CECECD]/60 hover:text-[#E0E220] text-sm md:text-base transition-colors">
                  Showcase
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#CECECD]/60 hover:text-[#E0E220] text-sm md:text-base transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#CECECD]/60 hover:text-[#E0E220] text-sm md:text-base transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#CECECD]/60 hover:text-[#E0E220] text-sm md:text-base transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#CECECD]/60 hover:text-[#E0E220] text-sm md:text-base transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-[#CECECD] font-semibold mb-6 text-sm md:text-base tracking-wide uppercase">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services#branding" className="text-[#CECECD]/60 hover:text-[#E0E220] text-sm md:text-base transition-colors">
                  Branding & Graphics Design
                </Link>
              </li>
              <li>
                <Link href="/services#website" className="text-[#CECECD]/60 hover:text-[#E0E220] text-sm md:text-base transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services#social" className="text-[#CECECD]/60 hover:text-[#E0E220] text-sm md:text-base transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#seo" className="text-[#CECECD]/60 hover:text-[#E0E220] text-sm md:text-base transition-colors">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/services#performance" className="text-[#CECECD]/60 hover:text-[#E0E220] text-sm md:text-base transition-colors">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#content" className="text-[#CECECD]/60 hover:text-[#E0E220] text-sm md:text-base transition-colors">
                  Content Creation, 3D Animation & CGI
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Let's Connect */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-[#CECECD] font-semibold mb-6 text-sm md:text-base tracking-wide uppercase">Let&apos;s Connect</h3>
            <ul className="space-y-4 text-[#CECECD]/60 text-sm md:text-base mb-8">
              <li>
                <a href="mailto:manticorecreatives@gmail.com" className="hover:text-[#E0E220] transition-colors">
                  manticorecreatives@gmail.com
                </a>
              </li>
              <li>
                Kolkata, West Bengal
              </li>
              <li>
                <a href="tel:+919831012176" className="hover:text-[#E0E220] transition-colors">
                  +91 98310 12176
                </a>
              </li>
              <li>
                <a href="tel:+919073495717" className="hover:text-[#E0E220] transition-colors">
                  +91 90734 95717
                </a>
              </li>
            </ul>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 border border-[#E0E220]/30 text-[#CECECD] hover:text-black px-6 py-3 text-sm uppercase tracking-wider hover:bg-[#E0E220] transition-all font-medium rounded-sm w-fit"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#E0E220] py-4 relative z-20">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p className="text-black text-[13px] md:text-sm font-normal">
            Copyright &copy; 2026 Manticore Studio. All Rights Reserved.
          </p>
          <p className="text-black/70 text-[13px] md:text-sm font-medium md:text-right">
            Branding &bull; Video Production &bull; Marketing
          </p>
        </div>
      </div>
    </footer>
  );
}
