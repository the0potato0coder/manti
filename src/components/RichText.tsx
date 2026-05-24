"use client";

import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity";
import Image from "next/image";

// Initialize the image builder with your Sanity client
const builder = imageUrlBuilder(client as any);

function urlFor(source: any) {
  return builder.image(source);
}

// Create a custom component mapping for images
const components = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-96 my-8 rounded-xl overflow-hidden border border-[#E0E220]/20">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
};

export function RichText({ content }: { content: any }) {
  if (!content) return null;

  return <PortableText value={content} components={components} />;
}
