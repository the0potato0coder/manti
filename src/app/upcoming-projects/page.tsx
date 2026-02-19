"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Loader2, Calendar, TrendingUp, CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectUpdate {
  title: string;
  description: string | null;
  createdAt: string;
  createdBy: string | null;
}

interface Project {
  id: number;
  name: string;
  description: string | null;
  clientId: string | null;
  status: string;
  progressPercentage: number;
  startDate: string | null;
  estimatedCompletion: string | null;
  actualCompletion: string | null;
  createdAt: string;
  updatedAt: string;
  latestUpdate?: ProjectUpdate | null;
}

export default function UpcomingProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    void fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/projects");

      if (!response.ok) {
        setProjects([]);
        return;
      }

      const data: Project[] = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (value: string | null) => {
    if (!value) return null;
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return null;
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "planning":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "in_progress":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "review":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "completed":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "planning":
        return <Clock className="h-5 w-5" />;
      case "in_progress":
        return <TrendingUp className="h-5 w-5" />;
      case "review":
        return <Clock className="h-5 w-5" />;
      case "completed":
        return <CheckCircle2 className="h-5 w-5" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#E0E220]/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/icon-1762235219951.png?width=8000&height=8000&resize=contain"
                alt="Manticore Studio Logo"
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-2xl font-bold text-[#CECECD]">Upcoming Projects</span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-[#CECECD] hover:text-[#E0E220] hover:bg-[#E0E220]/10"
                asChild
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E0E220]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#134652]/30 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-[#CECECD] mb-4">
              Upcoming <span className="text-[#E0E220]">Projects</span>
            </h1>
            <p className="text-xl text-[#CECECD]/70">
              Track the progress of our creative projects in real-time
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32 px-4">
        <div className="container mx-auto max-w-6xl">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-12 w-12 text-[#E0E220] animate-spin" />
            </div>
          ) : projects.length === 0 ? (
            <Card className="bg-[#0A0A0F] border-[#E0E220]/20">
              <CardContent className="py-20 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-[#E0E220]/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-10 w-10 text-[#E0E220]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#CECECD] mb-2">No Projects Yet</h3>
                  <p className="text-[#CECECD]/60">Check back soon for upcoming projects!</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {projects.map((project) => {
                const startDate = formatDate(project.startDate);
                const targetDate = formatDate(project.actualCompletion || project.estimatedCompletion);
                const latestUpdateDate = formatDate(project.latestUpdate?.createdAt ?? null);

                return (
                  <Card
                    key={project.id}
                    className="bg-[#0A0A0F] border-[#E0E220]/20 hover:border-[#E0E220]/40 transition-all"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-2xl text-[#CECECD] mb-3">{project.name}</CardTitle>
                          {project.description && (
                            <p className="text-[#CECECD]/70 mb-4">{project.description}</p>
                          )}
                          <div className="flex items-center gap-3">
                            <span
                              className={`px-4 py-1.5 rounded-full text-sm font-semibold border flex items-center gap-2 ${getStatusColor(
                                project.status
                              )}`}
                            >
                              {getStatusIcon(project.status)}
                              {project.status.replace("_", " ").toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <div>
                        <div className="flex justify-between text-sm text-[#CECECD]/70 mb-2">
                          <span className="font-semibold">Project Progress</span>
                          <span className="font-bold text-[#E0E220] text-lg">
                            {project.progressPercentage}%
                          </span>
                        </div>
                        <div className="w-full bg-black/50 rounded-full h-3 overflow-hidden">
                          <div
                            className="bg-linear-to-r from-[#E0E220] to-[#134652] h-3 rounded-full transition-all duration-500"
                            style={{ width: `${project.progressPercentage}%` }}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {startDate && (
                          <div className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-[#E0E220]/10">
                            <div className="w-10 h-10 bg-[#E0E220]/10 rounded-full flex items-center justify-center shrink-0">
                              <Calendar className="h-5 w-5 text-[#E0E220]" />
                            </div>
                            <div>
                              <p className="text-xs text-[#CECECD]/60 font-semibold">Started</p>
                              <p className="text-[#CECECD] font-semibold">{startDate}</p>
                            </div>
                          </div>
                        )}

                        {targetDate && (
                          <div className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-[#E0E220]/10">
                            <div className="w-10 h-10 bg-[#E0E220]/10 rounded-full flex items-center justify-center shrink-0">
                              <TrendingUp className="h-5 w-5 text-[#E0E220]" />
                            </div>
                            <div>
                              <p className="text-xs text-[#CECECD]/60 font-semibold">
                                {project.status === "completed" ? "Completed" : "Est. Completion"}
                              </p>
                              <p className="text-[#CECECD] font-semibold">{targetDate}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {project.latestUpdate && (
                        <div className="p-4 bg-linear-to-br from-[#E0E220]/5 to-[#134652]/5 rounded-lg border border-[#E0E220]/10">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-[#E0E220]/20 rounded-full flex items-center justify-center shrink-0">
                              <TrendingUp className="h-5 w-5 text-[#E0E220]" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-[#E0E220]">Latest Update</h4>
                                {latestUpdateDate && (
                                  <span className="text-xs text-[#CECECD]/60">{latestUpdateDate}</span>
                                )}
                              </div>
                              <h5 className="font-semibold text-[#CECECD] mb-1">
                                {project.latestUpdate.title}
                              </h5>
                              {project.latestUpdate.description && (
                                <p className="text-sm text-[#CECECD]/70">
                                  {project.latestUpdate.description}
                                </p>
                              )}
                              {project.latestUpdate.createdBy && (
                                <p className="text-xs text-[#CECECD]/50 mt-2">
                                  By {project.latestUpdate.createdBy}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-[#E0E220]/20 py-8 px-4">
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
            <p className="text-[#CECECD]/60 text-sm">&copy; 2024 Manticore Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
