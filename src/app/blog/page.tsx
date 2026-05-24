import { Metadata } from "next";
import { Starfield } from "@/components/Starfield";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { client, ALL_POSTS_QUERY } from "@/lib/sanity";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Marketing Insights & Blog | Manticore Studio",
  description:
    "Read the latest insights on digital marketing, SEO, branding, and web development.",
  alternates: { canonical: "/blog" },
};

export const revalidate = 60; // Revalidate the data every 60 seconds

interface Post {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  featured: boolean;
}

export default async function BlogPage() {
  const allPosts = await client.fetch<Post[]>(ALL_POSTS_QUERY);
  const featuredPost = allPosts.find((post) => post.featured) || allPosts[0];
  const posts = featuredPost
    ? allPosts.filter((post) => post.slug !== featuredPost.slug)
    : allPosts;

  return (
    <div className="min-h-screen bg-black relative">
      <Starfield />

      <section className="pt-40 pb-24 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-[#CECECD] mb-6">
              Marketing <span className="text-[#E0E220]">Insights</span>
            </h1>
            <p className="text-xl text-[#CECECD]/70 max-w-3xl mx-auto leading-relaxed">
              Actionable strategies, industry trends, and creative inspiration
              to help your business grow.
            </p>
          </div>

          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block mb-12 bg-linear-to-br from-[#134652]/40 to-[#0A0A0F] border border-[#E0E220]/20 rounded-3xl overflow-hidden hover:border-[#E0E220]/50 transition-all duration-300"
            >
              <div className="p-8 md:p-16">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 bg-[#E0E220]/10 text-[#E0E220] border border-[#E0E220]/20 rounded-full text-sm font-bold uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span className="text-[#CECECD]/50 font-medium">
                    {formatDate(featuredPost.date)}
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#CECECD] group-hover:text-[#E0E220] transition-colors mb-6 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-[#CECECD]/70 mb-8 max-w-3xl">
                  {featuredPost.excerpt}
                </p>
                <div className="inline-flex items-center text-[#E0E220] font-bold text-xl group-hover:translate-x-2 transition-transform duration-300">
                  Read Article <ArrowRight className="ml-2 w-6 h-6" />
                </div>
              </div>
            </Link>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-[#0A0A0F] border border-[#E0E220]/20 rounded-3xl overflow-hidden hover:border-[#E0E220]/50 transition-all duration-300 flex flex-col h-full"
              >
                <div className="p-8 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#E0E220]/10 text-[#E0E220] border border-[#E0E220]/20 rounded-full text-xs font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-[#CECECD]/50 text-sm font-medium">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#CECECD] group-hover:text-[#E0E220] transition-colors mb-4 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[#CECECD]/60 line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto inline-flex items-center text-[#E0E220] font-bold group-hover:translate-x-2 transition-transform duration-300">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}