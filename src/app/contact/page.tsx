import type { Metadata } from "next";
import Link from "next/link";

import { Starfield } from "@/components/Starfield";
import { Mail, Phone, Instagram, Linkedin, Globe, Youtube } from "lucide-react";

import { ContactForm } from "@/app/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Manticore Studio | Digital Marketing Agency in Kolkata",
  description:
    "Have a project in mind or just want to explore your options? Get in touch with Manticore Studio and let's talk about what's possible for your brand.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black relative">
      <Starfield />

      <section className="pt-40 pb-32 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-[#CECECD] mb-6">Contact <span className="text-[#E0E220]">Us</span></h1>
            <p className="text-xl text-[#CECECD]/70 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or not be sure where to start? Either way, let's talk.
              <br className="hidden md:block" />
              We respond within 24 hours on business days.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#CECECD] mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-[#E0E220]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-[#CECECD] mb-1">Email</h4>
                      <a href="mailto:manticorecreatives@gmail.com" className="text-[#CECECD]/70 hover:text-[#E0E220] transition-colors">manticorecreatives@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-[#E0E220]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-[#CECECD] mb-1">Phone</h4>
                      <p className="text-[#CECECD]/70">
                        <a href="tel:+919073495717" className="hover:text-[#E0E220] transition-colors">+91 9073495717</a><br />
                        <a href="tel:+919831012176" className="hover:text-[#E0E220] transition-colors">+91 9831012176</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#CECECD] mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/manticorestudio_" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-lg flex items-center justify-center hover:bg-[#E0E220] transition-all group"><Instagram className="h-6 w-6 text-[#E0E220] group-hover:text-black" /></a>
                  <a href="https://www.behance.net/Manticorestudio" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-lg flex items-center justify-center hover:bg-[#E0E220] transition-all group"><Globe className="h-6 w-6 text-[#E0E220] group-hover:text-black" /></a>
                  <a href="https://www.linkedin.com/company/manticorestudio/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-lg flex items-center justify-center hover:bg-[#E0E220] transition-all group"><Linkedin className="h-6 w-6 text-[#E0E220] group-hover:text-black" /></a>
                  <a href="https://youtube.com/@manticorestudio-p5t" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-lg flex items-center justify-center hover:bg-[#E0E220] transition-all group"><Youtube className="h-6 w-6 text-[#E0E220] group-hover:text-black" /></a>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div>
                <h3 className="text-2xl font-bold text-[#CECECD] mb-6">Visit Us in Kolkata</h3>
                <p className="text-[#CECECD]/70 mb-4">PFFW+C8, Kolkata, West Bengal</p>
                <div className="w-full h-64 rounded-xl overflow-hidden border border-[#E0E220]/30 relative">
                    <iframe
                      src="https://www.google.com/maps?q=PFFW%2BC8,+Kolkata,+West+Bengal&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}