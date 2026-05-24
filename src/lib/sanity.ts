import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-20',
  useCdn: false,
})

export const ALL_POSTS_QUERY = `*[_type == "post"] | order(date desc) {
  title,
  "slug": slug.current,
  excerpt,
  category,
  date,
  featured
}`

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  excerpt,
  category,
  date,
  content
}`
