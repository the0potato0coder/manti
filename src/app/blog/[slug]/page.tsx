import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Starfield } from "@/components/Starfield";
import { client, POST_BY_SLUG_QUERY, ALL_POSTS_QUERY } from "@/lib/sanity";
import { RichText } from "@/components/RichText";
import { formatDate } from "@/lib/utils";

interface Post {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  content: unknown[];
}

export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: string }[]>(ALL_POSTS_QUERY);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await client.fetch<Post | null>(POST_BY_SLUG_QUERY, {
    slug: resolvedParams.slug,
  });

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Manticore Studio`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await client.fetch<Post | null>(POST_BY_SLUG_QUERY, {
    slug: resolvedParams.slug,
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black relative">
      <Starfield />

      <article className="pt-40 pb-24 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#CECECD]/60 hover:text-[#E0E220] transition-colors mb-12 font-medium"
          >
            <ArrowLeft className="mr-2 w-5 h-5" /> Back to Insights
          </Link>

          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-[#E0E220]/10 text-[#E0E220] border border-[#E0E220]/20 rounded-full text-sm font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-[#CECECD]/50 font-medium">
                {formatDate(post.date)}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#CECECD] leading-tight mb-8">
              {post.title}
            </h1>
          </div>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-[#CECECD] prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-p:text-[#CECECD]/80 prose-p:leading-relaxed prose-a:text-[#E0E220]">
            <RichText content={post.content} />
          </div>
        </div>
      </article>
    </div>
  );
}