"use client";

import { useState } from "react";
import {
  Sparkles,
  Rocket,
  Video,
  Instagram,
  Globe,
  Mail,
  Phone,
  Linkedin,
  Youtube,
  MessageCircle,
  User,
  Target,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Starfield } from "@/components/Starfield";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const teamMembers = [
    {
      name: "Anirban Chanda",
      role: "Creative Head",
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/visual-edit-uploads/1762675514297-ef1hohth2n9.jpg",
      link: "https://linkedin.com/in/anirbanchanda00",
      icon: "linkedin",
    },
    {
      name: "Subho Chakraborty",
      role: "Manager",
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/visual-edit-uploads/1762675527571-5k8wq6ms20m.jpg",
      link: "https://linkedin.com/in/subho-chakraborty-67baa426b",
      icon: "linkedin",
    },
    {
      name: "Souvik",
      role: "Design Head",
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/image-1767383313225.png?width=8000&height=8000&resize=contain",
      link: "",
      icon: "linkedin",
    },
    {
      name: "Deepta",
      role: "Graphic Designer",
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/image-1767381726390.png?width=8000&height=8000&resize=contain",
      link: "https://www.instagram.com/_my.tiny.canvas_/",
      icon: "instagram",
    },
    {
      name: "Aritri",
      role: "Brand Designer",
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/WhatsApp-Image-2025-11-09-at-22.17.08_59b976ce-1767381837548.jpg?width=8000&height=8000&resize=contain",
      link: "https://www.instagram.com/_nineteen_graphics?igsh=MXRzcm52dDNmdGpxYg==",
      icon: "instagram",
    },
    {
      name: "Anamika",
      role: "Graphic Designer",
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/image-1767383065791.png?width=8000&height=8000&resize=contain",
      link: "https://www.instagram.com/_pixel__play_?utm_source=qr&igsh=MXM3b282NTE2YzZqcw==",
      icon: "instagram",
    },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Submission failed");
      }

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to send message. Please try again."
      );
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
            <div className="flex items-center gap-3">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/icon-1762235219951.png?width=8000&height=8000&resize=contain"
                alt="Manticore Studio Logo"
                className="w-10 h-10 rounded-lg"
              />

              <span className="text-2xl font-bold text-[#CECECD]">Manticore Studio</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#projects"
                className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium"
              >
                Showcase
              </a>
              <a
                href="#expertise"
                className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium"
              >
                Expertise
              </a>
              <a
                href="#about"
                className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-[#CECECD] hover:text-[#E0E220] transition-colors font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black z-0" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E0E220]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#134652]/30 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-7xl md:text-9xl font-black text-[#CECECD] mb-6 tracking-tight">
            Manticore <span className="text-[#E0E220]">Studio</span>
          </h1>
          <p className="text-4xl md:text-5xl text-[#CECECD]/80 mb-4 font-light whitespace-pre-line!">
            Your Creative Partner
          </p>
          <p className="text-lg md:text-xl text-[#CECECD]/60 mb-12 max-w-3xl mx-auto">
            A new-age creative and marketing house specializing in CGI, 3D & 2D animation, motion
            graphics, VFX, brand storytelling, and social media marketing — blending art and strategy
            to create work that feels human, cinematic, and unforgettable.
          </p>
          <Button
            size="lg"
            className="bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold text-lg px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(224,226,32,0.3)] hover:shadow-[0_0_50px_rgba(224,226,32,0.5)] transition-all"
            asChild
          >
            <a href="#projects">View Our Showcase</a>
          </Button>
        </div>
      </section>

      <section id="projects" className="py-32 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-[#CECECD] mb-6">Our Showcase</h2>
            <p className="text-xl text-[#CECECD]/70 max-w-2xl mx-auto">
              Explore our portfolio of cutting-edge creative work across motion design, 3D animation,
              and brand storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/241508869?ilo0=1"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl">New Project</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold">Featured Work</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/233410319?ilo0=1"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl">Branding Project</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold">Belle-Milk Branding</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/178853093?ilo0=1"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl">3D Animation Project</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold">TWS Features</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/222993967?ilo0=1"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl whitespace-pre-line!">Liquid Motion Graphics</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold whitespace-pre-line!">Fruites in 3D</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/205267559?ilo0=1"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl whitespace-pre-line!">Concept Project</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold whitespace-pre-line!">Stone on Air</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/200628625?ilo0=1"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl whitespace-pre-line!">Naked Eye Animation</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold whitespace-pre-line!">Concept Porsche</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/224147613?ilo0=1"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl">Featured Project</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold whitespace-pre-line!">lequioer splashes</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)] flex items-center justify-center min-h-70"
              onClick={() =>
                window.parent.postMessage(
                  { type: "OPEN_EXTERNAL_URL", data: { url: "https://www.behance.net/Manticorestudio" } },
                  "*"
                )
              }
            >
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-full flex items-center justify-center group-hover:bg-[#E0E220] group-hover:border-[#E0E220] transition-all">
                  <ChevronRight className="h-10 w-10 text-[#E0E220] group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-[#CECECD] mb-2 group-hover:text-[#E0E220] transition-colors">
                  View More
                </h3>
                <p className="text-[#CECECD]/60">Explore our full portfolio on Behance</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative z-10 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#CECECD] mb-6">Already Working With</h2>
            <p className="text-xl text-[#CECECD]/70 max-w-2xl mx-auto">
              Trusted by amazing brands across industries
            </p>
          </div>

          <div className="relative flex items-center justify-center min-h-125 md:min-h-150">
            <div className="absolute w-70 h-70 md:w-80 md:h-80 rounded-full border border-[#E0E220]/10" />
            <div className="absolute w-100 h-100 md:w-120 md:h-120 rounded-full border border-[#E0E220]/5" />
            <div className="absolute w-130 h-130 md:w-160 md:h-160 rounded-full border border-[#E0E220]/5" />

            <div className="relative z-20 w-24 h-24 md:w-32 md:h-32 bg-black rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(224,226,32,0.3)] border-2 border-[#E0E220]">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/icon-1762235219951.png?width=8000&height=8000&resize=contain"
                alt="Manticore Studio"
                className="w-16 h-16 md:w-24 md:h-24 rounded-full object-contain"
              />
            </div>

            {[
              {
                name: "Balaji Bedding",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/balaji-logo_name-01-resized-1769023875632.jpg?width=8000&height=8000&resize=contain",
                whiteBg: true,
                orbit: "inner",
                angle: 0,
              },
              {
                name: "Agamoni",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/logo1-resized-1769023887769.jpg?width=8000&height=8000&resize=contain",
                whiteBg: true,
                orbit: "inner",
                angle: 90,
              },
              {
                name: "Own's Creation",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/visiting-card-1769023939792.jpg?width=8000&height=8000&resize=contain",
                whiteBg: true,
                orbit: "inner",
                angle: 180,
              },
              {
                name: "Verden Trends",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/WhatsApp-Image-2025-06-12-at-17.29.47_2925b156-1769023975001.jpg?width=8000&height=8000&resize=contain",
                whiteBg: true,
                orbit: "inner",
                angle: 270,
              },
              {
                name: "Himmel Fragranza",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/text-with-icon-01-1769023775460.png?width=8000&height=8000&resize=contain",
                orbit: "outer",
                angle: 0,
              },
              {
                name: "Go Room Go",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/Logo-white-1769023799934.png?width=8000&height=8000&resize=contain",
                orbit: "outer",
                angle: 72,
              },
              {
                name: "Cake Heaven",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/pink-complete-logo-01-1769023813483.png?width=8000&height=8000&resize=contain",
                orbit: "outer",
                angle: 144,
              },
              {
                name: "Belle Milk",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/Belle-logo-in-cyan-1769023845383.png?width=8000&height=8000&resize=contain",
                orbit: "outer",
                angle: 216,
              },
              {
                name: "Basumati Yoga",
                logo:
                  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3ba6769b-5569-4fbd-b7d6-6c9af3e5a432/logo1-transparent-013-1769023862405.png?width=8000&height=8000&resize=contain",
                orbit: "outer",
                angle: 288,
              },
            ].map((brand, idx) => (
              <div
                key={idx}
                className={`absolute w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 z-10 hover:z-100! hover:scale-150 hover:shadow-[0_0_40px_rgba(224,226,32,0.8)] ${
                  brand.whiteBg
                    ? "bg-white border-2 border-[#E0E220]/50 hover:border-[#E0E220]"
                    : "bg-black/80 backdrop-blur-sm border border-[#E0E220]/30 hover:border-[#E0E220]"
                }`}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%)`,
                  animation:
                    brand.orbit === "inner"
                      ? `orbitInner 30s linear infinite`
                      : `orbitOuter 40s linear infinite reverse`,
                  animationDelay: `${-brand.angle / (brand.orbit === "inner" ? 12 : 9)}s`,
                }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={`w-10 h-10 md:w-12 md:h-12 object-contain ${brand.whiteBg ? "rounded-full" : ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="py-32 px-4 relative z-10 bg-linear-to-b from-black to-[#0A0A0F]">
        <div className="container mx-auto">
          <div className="relative">
            <div className="flex justify-center mb-8">
              <Button
                size="lg"
                className="bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold text-2xl px-12 py-8 rounded-xl shadow-[0_0_30px_rgba(224,226,32,0.3)] hover:shadow-[0_0_50px_rgba(224,226,32,0.5)] transition-all"
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

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2 mb-8">
              {[
                {
                  title: "AI Creatives",
                  icon: Sparkles,
                  color: "from-purple-500/20 to-purple-900/20",
                  borderColor: "border-purple-500/50",
                  textColor: "text-purple-400",
                },
                {
                  title: "Brand Development",
                  icon: Rocket,
                  color: "from-blue-500/20 to-blue-900/20",
                  borderColor: "border-blue-500/50",
                  textColor: "text-blue-400",
                },
                {
                  title: "Strategy Making",
                  icon: Target,
                  color: "from-green-500/20 to-green-900/20",
                  borderColor: "border-green-500/50",
                  textColor: "text-green-400",
                },
                {
                  title: "Social Media",
                  icon: Instagram,
                  color: "from-pink-500/20 to-pink-900/20",
                  borderColor: "border-pink-500/50",
                  textColor: "text-pink-400",
                },
                {
                  title: "Visual Production",
                  icon: Video,
                  color: "from-orange-500/20 to-orange-900/20",
                  borderColor: "border-orange-500/50",
                  textColor: "text-orange-400",
                },
              ].map((branch, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`w-full max-w-45 p-4 bg-linear-to-br ${branch.color} border ${branch.borderColor} rounded-xl text-center hover:scale-105 transition-transform cursor-pointer group`}
                  >
                    <branch.icon
                      className={`h-8 w-8 mx-auto mb-2 ${branch.textColor} group-hover:scale-110 transition-transform`}
                    />
                    <span className={`font-bold ${branch.textColor}`}>{branch.title}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:grid grid-cols-5 gap-2 mb-0">
              {[1, 2, 3, 4, 5].map((_, idx) => (
                <div key={idx} className="flex justify-center">
                  <div className="w-0.5 h-8 bg-linear-to-b from-[#E0E220]/30 to-[#E0E220]/10" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
              <div className="space-y-3">
                {["AI Art Generation", "Smart Content", "Auto Editing"].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="hidden md:block absolute left-1/2 -top-3 w-0.5 h-3 bg-purple-500/30" />
                    <div className="p-3 bg-[#0A0A0F] border border-purple-500/30 rounded-lg text-center hover:border-purple-500 hover:bg-purple-500/10 transition-all cursor-pointer">
                      <span className="text-sm text-purple-300">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {["Logo Design", "Brand Identity", "Visual Language"].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="hidden md:block absolute left-1/2 -top-3 w-0.5 h-3 bg-blue-500/30" />
                    <div className="p-3 bg-[#0A0A0F] border border-blue-500/30 rounded-lg text-center hover:border-blue-500 hover:bg-blue-500/10 transition-all cursor-pointer">
                      <span className="text-sm text-blue-300">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {["Market Research", "Campaign Strategy", "Growth Planning"].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="hidden md:block absolute left-1/2 -top-3 w-0.5 h-3 bg-green-500/30" />
                    <div className="p-3 bg-[#0A0A0F] border border-green-500/30 rounded-lg text-center hover:border-green-500 hover:bg-green-500/10 transition-all cursor-pointer">
                      <span className="text-sm text-green-300">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {["Content Calendar", "Influencer Marketing", "Community Mgmt"].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="hidden md:block absolute left-1/2 -top-3 w-0.5 h-3 bg-pink-500/30" />
                    <div className="p-3 bg-[#0A0A0F] border border-pink-500/30 rounded-lg text-center hover:border-pink-500 hover:bg-pink-500/10 transition-all cursor-pointer">
                      <span className="text-sm text-pink-300">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {["3D Animation", "Motion Graphics", "CGI & VFX"].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="hidden md:block absolute left-1/2 -top-3 w-0.5 h-3 bg-orange-500/30" />
                    <div className="p-3 bg-[#0A0A0F] border border-orange-500/30 rounded-lg text-center hover:border-orange-500 hover:bg-orange-500/10 transition-all cursor-pointer">
                      <span className="text-sm text-orange-300">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:grid grid-cols-5 gap-2 mt-6">
              {[1, 2, 3, 4, 5].map((_, idx) => (
                <div key={idx} className="flex justify-center">
                  <div className="w-0.5 h-6 bg-linear-to-b from-[#E0E220]/20 to-transparent" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2 mt-2">
              <div className="flex flex-wrap gap-2 justify-center">
                {["Prompts", "Training"].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300 hover:bg-purple-500/20 transition-colors cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {["Guidelines", "Assets"].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300 hover:bg-blue-500/20 transition-colors cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {["Analytics", "KPIs"].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-300 hover:bg-green-500/20 transition-colors cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {["Reels", "Stories"].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/20 rounded-full text-xs text-pink-300 hover:bg-pink-500/20 transition-colors cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {["Render", "Composite"].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs text-orange-300 hover:bg-orange-500/20 transition-colors cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-20 text-center">
              <h3 className="text-3xl font-bold text-[#CECECD] mb-8">Our Tools & Technologies</h3>
              <div className="relative overflow-hidden">
                <div className="flex gap-4 animate-[scroll_40s_linear_infinite]">
                  {["Blender", "After Effects", "Cinema 4D", "Arnold", "Affinity", "Ai", "Adobe Suite", "DaVinci Resolve", "Google Analytics", "SEMrush", "HubSpot", "Mailchimp", "Hootsuite", "Meta Ads Manager", "Google Ads", "Canva"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="px-6 py-3 bg-[#0A0A0F] border border-[#E0E220]/30 rounded-lg text-[#CECECD] font-medium hover:border-[#E0E220] hover:bg-[#E0E220]/5 transition-all whitespace-nowrap shrink-0"
                      >
                        {tool}
                      </span>
                    )
                  )}
                  {["Blender", "After Effects", "Cinema 4D", "Arnold", "Affinity", "Ai", "Adobe Suite", "DaVinci Resolve", "Google Analytics", "SEMrush", "HubSpot", "Mailchimp", "Hootsuite", "Meta Ads Manager", "Google Ads", "Canva"].map(
                    (tool) => (
                      <span
                        key={`${tool}-duplicate`}
                        className="px-6 py-3 bg-[#0A0A0F] border border-[#E0E220]/30 rounded-lg text-[#CECECD] font-medium hover:border-[#E0E220] hover:bg-[#E0E220]/5 transition-all whitespace-nowrap shrink-0"
                      >
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-[#CECECD] mb-6">About Us</h2>
          </div>

          <div className="space-y-8 text-center">
            <p className="text-xl text-[#CECECD]/80 leading-relaxed">
              Manticore Studio is a new-age creative and marketing house redefining how visuals speak.
              We specialize in <span className="text-[#E0E220] font-bold">CGI, 3D & 2D animation, motion graphics, VFX, and brand storytelling</span> — blending art and strategy to create work that feels human, cinematic, and unforgettable.
            </p>
            <p className="text-lg text-[#CECECD]/70 leading-relaxed">
              From local businesses to lifestyle brands, we don't just design campaigns — we
              <span className="text-[#E0E220] font-semibold"> build identities, cultures, and emotions</span> that connect. Our work bridges creativity and communication, turning visuals into brand experiences through
              <span className="text-[#E0E220] font-semibold"> social media marketing</span> and comprehensive brand building.
            </p>
            <p className="text-lg text-[#CECECD]/70 leading-relaxed">
              Rooted in imagination and driven by innovation, Manticore Studio stands for one thing —
              <span className="text-[#E0E220] font-bold"> craft with purpose</span>. Our mission is to empower brands with cutting-edge visual solutions that inspire and engage audiences, setting new standards in creativity, precision, and storytelling.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { value: "Creativity", desc: "Pushing boundaries with every project" },
                { value: "Brand Building", desc: "Creating identities that connect and resonate" },
                { value: "Innovation", desc: "Leading the future of visual storytelling" },
              ].map((val, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#0A0A0F] border border-[#E0E220]/20 rounded-xl"
                >
                  <h3 className="text-2xl font-bold text-[#E0E220] mb-3">{val.value}</h3>
                  <p className="text-[#CECECD]/70">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-32 px-4 relative z-10 bg-linear-to-b from-[#0A0A0F] to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#CECECD] mb-6">Meet Our Team</h2>
            <p className="text-xl text-[#CECECD]/70">
              The creative minds behind Manticore Studio's exceptional work
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-none">
                {teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className={`w-full shrink-0 px-4 transition-all duration-500 ${
                      idx === currentSlide
                        ? "opacity-100 animate-[fadeIn_0.5s_ease-out]"
                        : "opacity-0 absolute inset-0 animate-[fadeOut_0.5s_ease-out]"
                    }`}
                    style={{ display: idx === currentSlide ? "block" : "none" }}
                  >
                    <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 hover:shadow-[0_0_30px_rgba(224,226,32,0.2)] max-w-md mx-auto">
                      <CardHeader className="text-center">
                        <div
                          className={`w-32 h-32 mx-auto mb-6 bg-linear-to-br from-[#E0E220] to-[#134652] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(224,226,32,0.3)] ${
                            member.image ? "bg-cover! bg-center!" : ""
                          }`}
                          style={member.image ? { backgroundImage: `url(${member.image})` } : {}}
                        >
                          {!member.image && <User className="h-16 w-16 text-black" />}
                        </div>
                        <CardTitle className="text-3xl text-[#CECECD] mb-3">{member.name}</CardTitle>
                        <CardDescription className="text-[#E0E220] font-semibold text-xl mb-6">
                          {member.role}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center pb-8">
                        <a
                          href={member.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-8 py-4 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-lg text-[#CECECD] hover:bg-[#E0E220] hover:text-black transition-all font-medium text-lg"
                        >
                          {member.icon === "linkedin" ? (
                            <Linkedin className="h-6 w-6" />
                          ) : (
                            <Instagram className="h-6 w-6" />
                          )}
                          {member.icon === "linkedin" ? "Connect on LinkedIn" : "View Portfolio"}
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-full flex items-center justify-center hover:bg-[#E0E220] hover:border-[#E0E220] transition-all disabled:opacity-50 disabled:cursor-not-allowed group z-10"
              aria-label="Previous team member"
            >
              <ChevronLeft className="h-6 w-6 text-[#E0E220] group-hover:text-black" />
            </button>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-full flex items-center justify-center hover:bg-[#E0E220] hover:border-[#E0E220] transition-all disabled:opacity-50 disabled:cursor-not-allowed group z-10"
              aria-label="Next team member"
            >
              <ChevronRight className="h-6 w-6 text-[#E0E220] group-hover:text-black" />
            </button>

            <div className="flex justify-center gap-3 mt-12">
              {teamMembers.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all disabled:cursor-not-allowed ${
                    idx === currentSlide ? "bg-[#E0E220] w-8" : "bg-[#E0E220]/30 hover:bg-[#E0E220]/60"
                  }`}
                  aria-label={`Go to team member ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-4 relative z-10 bg-linear-to-t from-black to-[#0A0A0F]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#CECECD] mb-6">Let's Create Together</h2>
            <p className="text-xl text-[#CECECD]/70">
              Start a project: Let's create a bold, lasting impression in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="bg-[#0A0A0F] border-[#E0E220]/20">
              <CardHeader>
                <CardTitle className="text-2xl text-[#CECECD]">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[#CECECD] mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-[#E0E220]/30 rounded-lg text-[#CECECD] focus:border-[#E0E220] focus:outline-none focus:ring-2 focus:ring-[#E0E220]/20"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#CECECD] mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-[#E0E220]/30 rounded-lg text-[#CECECD] focus:border-[#E0E220] focus:outline-none focus:ring-2 focus:ring-[#E0E220]/20"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#CECECD] mb-2 font-medium">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-black border border-[#E0E220]/30 rounded-lg text-[#CECECD] focus:border-[#E0E220] focus:outline-none focus:ring-2 focus:ring-[#E0E220]/20 resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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
                      <a
                        href="mailto:manticorecreatives@gmail.com"
                        className="text-[#CECECD]/70 hover:text-[#E0E220] transition-colors"
                      >
                        manticorecreatives@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-[#E0E220]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-[#CECECD] mb-1">Phone</h4>
                      <p className="text-[#CECECD]/70">
                        <a
                          href="tel:+919073495717"
                          className="hover:text-[#E0E220] transition-colors"
                        >
                          +91 9073495717
                        </a>
                        <br />
                        <a
                          href="tel:+919831012176"
                          className="hover:text-[#E0E220] transition-colors"
                        >
                          +91 9831012176
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-lg flex items-center justify-center shrink-0">
                      <MessageCircle className="h-6 w-6 text-[#E0E220]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-[#CECECD] mb-1">WhatsApp</h4>
                      <a
                        href="https://wa.me/919831012176"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#CECECD]/70 hover:text-[#E0E220] transition-colors"
                      >
                        +91 9831012176
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#CECECD] mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/manticorestudio_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-lg flex items-center justify-center hover:bg-[#E0E220] hover:border-[#E0E220] transition-all group"
                  >
                    <Instagram className="h-6 w-6 text-[#E0E220] group-hover:text-black" />
                  </a>
                  <a
                    href="https://www.behance.net/Manticorestudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-lg flex items-center justify-center hover:bg-[#E0E220] hover:border-[#E0E220] transition-all group"
                  >
                    <Globe className="h-6 w-6 text-[#E0E220] group-hover:text-black" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/manticorestudio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-lg flex items-center justify-center hover:bg-[#E0E220] hover:border-[#E0E220] transition-all group"
                  >
                    <Linkedin className="h-6 w-6 text-[#E0E220] group-hover:text-black" />
                  </a>
                  <a
                    href="https://youtube.com/@manticorestudio-p5t?si=SshBrsBcKU7EcROD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-lg flex items-center justify-center hover:bg-[#E0E220] hover:border-[#E0E220] transition-all group"
                  >
                    <Youtube className="h-6 w-6 text-[#E0E220] group-hover:text-black" />
                  </a>
                </div>
                <p className="text-sm text-[#CECECD]/50 mt-4">
                  View our full portfolio on Behance: Manticore Studio in India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E0E220]/20 py-8 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/icon-1762235219951.png?width=8000&height=8000&resize=contain"
                alt="Manticore Studio Logo"
                className="w-8 h-8 rounded-lg"
              />

              <span className="font-bold text-[#CECECD]">Manticore Studio</span>
            </div>
            <p className="text-[#CECECD]/60 text-sm">
              &copy; 2024 Manticore Studio. All rights reserved. | Empowering brands through creative visual storytelling.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
