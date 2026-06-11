import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Starfield } from "@/components/Starfield";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Our Work & Creative Portfolio | Manticore Studio",
  description:
    "Explore our portfolio of branding projects, digital campaigns, website development, and content production for businesses in Kolkata and beyond.",
  alternates: {
    canonical: "/showcase",
  },
};

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-black relative">
      <Starfield />

      <section className="pt-40 pb-24 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-[#CECECD] mb-6">
              Our <span className="text-[#E0E220]">Showcase</span>
            </h1>
            <p className="text-xl text-[#CECECD]/70 max-w-3xl mx-auto leading-relaxed">
              Branding projects, digital campaigns, and content production - take a look at what we have built for the businesses we work with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/241508869?ilo0=1"
                  title="New Project Behance preview"
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
                  title="Branding Project Behance preview"
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
                  title="3D Animation Project Behance preview"
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
                  title="Liquid Motion Graphics Behance preview"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl">Liquid Motion Graphics</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold">Fruites in 3D</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/205267559?ilo0=1"
                  title="Concept Project Behance preview"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl">Concept Project</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold">Stone on Air</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/200628625?ilo0=1"
                  title="Naked Eye Animation Behance preview"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl">Naked Eye Animation</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold">Concept Porsche</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/224147613?ilo0=1"
                  title="Featured Project Behance preview"
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
                  <span className="text-[#E0E220] font-semibold">lequioer splashes</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/250885253?ilo0=1"
                  title="Recent Project Behance preview"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl">Recent Project</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold">Creative Work</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)]">
              <div className="aspect-video bg-linear-to-br from-[#134652] to-[#0A0A0F] relative overflow-hidden">
                <iframe
                  src="https://www.behance.net/embed/project/220158913?ilo0=1"
                  title="Creative Project Behance preview"
                  className="w-full h-full absolute inset-0"
                  allowFullScreen
                  loading="lazy"
                  allow="clipboard-write"
                  style={{ border: 0 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#CECECD] text-xl">Creative Project</CardTitle>
                <CardDescription className="text-[#CECECD]/60">
                  <span className="text-[#E0E220] font-semibold">Featured Work</span>
                </CardDescription>
              </CardHeader>
            </Card>

            <Link
              href="https://www.behance.net/Manticorestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="h-full bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220] transition-all duration-300 overflow-hidden group cursor-pointer hover:shadow-[0_0_30px_rgba(224,226,32,0.2)] flex items-center justify-center min-h-70">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#E0E220]/10 border border-[#E0E220]/30 rounded-full flex items-center justify-center group-hover:bg-[#E0E220] group-hover:border-[#E0E220] transition-all">
                    <ChevronRight className="h-10 w-10 text-[#E0E220] group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#CECECD] mb-2 group-hover:text-[#E0E220] transition-colors">View More</h3>
                  <p className="text-[#CECECD]/60">Explore our full portfolio on Behance</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
