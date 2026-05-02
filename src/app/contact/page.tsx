"use client";

import { useState } from "react";
import { Starfield } from "@/components/Starfield";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Instagram, Linkedin, Globe, Youtube } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", businessType: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // The backend route will need a slight update later to map the new phone/businessType fields to the Google Sheet
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Submission failed");
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", businessType: "", message: "" });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative">
      <Starfield />
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#E0E220]/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/icon-1762235219951.png?width=8000&height=8000&resize=contain" alt="Logo" width={40} height={40} className="w-10 h-10 rounded-lg"/>
              <span className="text-2xl font-bold text-[#CECECD]">Manticore Studio</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#projects" className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium">Showcase</Link>
              <Link href="/services" className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium">Services</Link>
              <Link href="/about" className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium">About Us</Link>
              <Link href="/contact" className="text-[#E0E220] transition-colors font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-32 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-[#CECECD] mb-6">Contact <span className="text-[#E0E220]">Us</span></h1>
            <p className="text-xl text-[#CECECD]/70">Let's discuss how we can grow your business.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 h-fit">
              <CardHeader><CardTitle className="text-2xl text-[#CECECD]">Send Us a Message</CardTitle></CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[#CECECD] mb-2 text-sm font-medium">Name</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-black border border-[#E0E220]/30 rounded-lg text-[#CECECD] focus:border-[#E0E220] outline-none" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#CECECD] mb-2 text-sm font-medium">Email</label>
                      <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-black border border-[#E0E220]/30 rounded-lg text-[#CECECD] focus:border-[#E0E220] outline-none" required />
                    </div>
                    <div>
                      <label className="block text-[#CECECD] mb-2 text-sm font-medium">Phone</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 bg-black border border-[#E0E220]/30 rounded-lg text-[#CECECD] focus:border-[#E0E220] outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#CECECD] mb-2 text-sm font-medium">Business Type / Industry</label>
                    <input type="text" value={formData.businessType} onChange={(e) => setFormData({...formData, businessType: e.target.value})} className="w-full px-4 py-3 bg-black border border-[#E0E220]/30 rounded-lg text-[#CECECD] focus:border-[#E0E220] outline-none" />
                  </div>
                  <div>
                    <label className="block text-[#CECECD] mb-2 text-sm font-medium">Message</label>
                    <textarea rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 bg-black border border-[#E0E220]/30 rounded-lg text-[#CECECD] focus:border-[#E0E220] outline-none resize-none" required />
                  </div>
                  <Button type="submit" className="w-full bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold py-6 text-lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Request Free Consultation"}
                  </Button>
                </form>
              </CardContent>
            </Card>

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
                <div className="w-full h-64 rounded-xl overflow-hidden border border-[#E0E220]/30 relative">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.33439927702!2d88.26495085603781!3d22.53540637452296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1708450123456!5m2!1sen!2sin" 
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