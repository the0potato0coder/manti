import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// In Next.js 15, page params are awaited
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // In a real app, you would fetch the post data from a database or CMS using resolvedParams.slug
  // For now, we use placeholder content.
  const post = {
    title: resolvedParams.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    category: "Marketing Strategy",
    date: "Oct 24, 2024",
    content: `
      <p>This is placeholder content for the blog post titled <strong>${resolvedParams.slug}</strong>. In a fully implemented system, this content would be pulled from a database (like Turso) or a Headless CMS (like Sanity or Contentful).</p>
      <h2>Why this matters</h2>
      <p>Digital marketing in Kolkata is highly competitive. Having a strong, SEO-optimized blog helps capture top-of-funnel traffic. By providing valuable insights, you establish Manticore Studio as an authority in the space.</p>
      <h2>Next Steps</h2>
      <p>When you are ready, we can integrate a markdown parser or a rich-text renderer to safely inject HTML content right here.</p>
    `
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Simple Navigation */}
      <nav className="border-b border-[#E0E220]/20 bg-black/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/icon-1762235219951.png?width=8000&height=8000&resize=contain" alt="Logo" width={40} height={40} className="w-10 h-10 rounded-lg"/>
              <span className="text-xl font-bold text-[#CECECD] hidden md:block">Manticore Studio</span>
          </Link>
          <Button variant="ghost" className="text-[#CECECD] hover:text-[#E0E220]" asChild>
            <Link href="/blog"><ArrowLeft className="mr-2 w-4 h-4"/> Back to Blogs</Link>
          </Button>
        </div>
      </nav>

      <article className="container mx-auto max-w-3xl px-4 py-20">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="bg-[#E0E220]/20 text-[#E0E220] px-4 py-1 rounded-full text-sm font-semibold">{post.category}</span>
            <span className="flex items-center gap-2 text-[#CECECD]/60 text-sm"><Calendar className="w-4 h-4" /> {post.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#CECECD] leading-tight mb-8">{post.title}</h1>
        </div>

        {/* Article Prose Styling */}
        <div 
          className="prose prose-invert prose-lg max-w-none prose-headings:text-[#E0E220] prose-a:text-[#E0E220] hover:prose-a:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        <div className="mt-20 pt-10 border-t border-[#E0E220]/20 text-center">
            <h3 className="text-2xl font-bold text-[#CECECD] mb-6">Want to apply these insights to your brand?</h3>
            <Button size="lg" className="bg-[#E0E220] text-black hover:bg-[#E0E220]/90 font-bold" asChild>
              <Link href="/contact">Let's Talk Strategy</Link>
            </Button>
        </div>
      </article>
    </div>
  );
}