"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const navItems = [
    { href: "/#projects", label: "Showcase" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[#E0E220]/30 bg-black/60 text-[#CECECD] hover:bg-[#E0E220]/10 hover:text-[#E0E220]"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="border-l-[#E0E220]/20 bg-black text-[#CECECD]">
                <SheetHeader className="pb-2 pr-8">
                  <SheetTitle className="text-left text-[#CECECD]">
                    Manticore Studio
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-2">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="rounded-lg px-3 py-3 text-lg font-medium text-[#CECECD] transition-colors hover:bg-[#E0E220]/10 hover:text-[#E0E220]"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="mt-4 bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold"
                    >
                      <Link href="/contact">Book a Free Consultation</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
