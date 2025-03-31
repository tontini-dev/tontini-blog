import { sanityClient } from '@/lib/sanity'
import { groq } from 'next-sanity'
import type { Metadata } from 'next'

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  excerpt,
  mainImage {
    asset -> {
      url
    }
  }
}`

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await sanityClient.fetch(query, { slug: params.slug })

  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage?.asset?.url
        ? [
            {
              url: post.mainImage.asset.url,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
  }
}