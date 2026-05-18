"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", businessType: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <Card className="bg-[#0A0A0F] border-[#E0E220]/20 h-fit">
      <CardHeader>
        <CardTitle className="text-2xl text-[#CECECD]">Send Us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[#CECECD] mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-black border border-[#E0E220]/30 rounded-lg text-[#CECECD] focus:border-[#E0E220] outline-none"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#CECECD] mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-black border border-[#E0E220]/30 rounded-lg text-[#CECECD] focus:border-[#E0E220] outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-[#CECECD] mb-2 text-sm font-medium">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-black border border-[#E0E220]/30 rounded-lg text-[#CECECD] focus:border-[#E0E220] outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-[#CECECD] mb-2 text-sm font-medium">Business Type / Industry</label>
            <input
              type="text"
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              className="w-full px-4 py-3 bg-black border border-[#E0E220]/30 rounded-lg text-[#CECECD] focus:border-[#E0E220] outline-none"
            />
          </div>
          <div>
            <label className="block text-[#CECECD] mb-2 text-sm font-medium">Message</label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-black border border-[#E0E220]/30 rounded-lg text-[#CECECD] focus:border-[#E0E220] outline-none resize-none"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold py-6 text-lg" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Request Free Consultation"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
