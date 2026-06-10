"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Globe, Youtube, ChevronUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
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
              Empowering brands with advanced digital marketing tools to improve visibility, conversions, and long-term growth.
            </p>

            <div className="flex items-center gap-6 mb-12">
              <Link href="https://www.instagram.com/manticorestudio_" target="_blank" rel="noopener noreferrer" className="text-[#CECECD] hover:text-[#E0E220] transition-colors">
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <Link href="https://www.behance.net/Manticorestudio" target="_blank" rel="noopener noreferrer" className="text-[#CECECD] hover:text-[#E0E220] transition-colors">
                <Globe className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <Link href="https://www.linkedin.com/company/manticorestudio/" target="_blank" rel="noopener noreferrer" className="text-[#CECECD] hover:text-[#E0E220] transition-colors">
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <Link href="https://youtube.com/@manticorestudio-p5t" target="_blank" rel="noopener noreferrer" className="text-[#CECECD] hover:text-[#E0E220] transition-colors">
                <Youtube className="w-5 h-5" strokeWidth={1.5} />
              </Link>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 border border-[#E0E220]/30 text-[#CECECD] hover:text-black px-5 py-2 text-sm uppercase tracking-wider hover:bg-[#E0E220] transition-all font-medium rounded-sm"
            >
              <ChevronUp className="w-4 h-4" strokeWidth={2} />
              Back to top
            </button>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Right Columns */}
          <div className="md:col-span-6 lg:col-span-5 grid grid-cols-2 gap-8 pt-2">
            {/* Site Map */}
            <div className="flex flex-col">
              <h3 className="text-[#CECECD] font-semibold mb-6 text-sm md:text-base tracking-wide">Site Map</h3>
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

            {/* Legal - Hidden for now
            <div className="flex flex-col">
              <h3 className="text-[#CECECD] font-semibold mb-6 text-sm md:text-base tracking-wide">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/privacy-policy" className="text-[#CECECD]/60 hover:text-[#E0E220] text-sm md:text-base transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-[#CECECD]/60 hover:text-[#E0E220] text-sm md:text-base transition-colors">
                    Terms of Services
                  </Link>
                </li>
              </ul>
            </div>
            */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#E0E220] py-3 px-4 relative z-20">
        <div className="container mx-auto text-center flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-black text-[13px] md:text-sm font-semibold tracking-wide">
            Copyright &copy; {new Date().getFullYear()}, Manticore Studio, All Rights Reserved.
          </p>
          <p className="text-black/70 text-[12px] md:text-sm font-medium">
            Empowering brands through creative visual storytelling.
          </p>
        </div>
      </div>
    </footer>
  );
}
