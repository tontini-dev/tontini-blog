// @ts-nocheck
import { sanityClient } from '@/lib/sanity'
import { groq } from 'next-sanity'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import PortableTextRenderer from '@/components/PortableTextRenderer'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

// 🔍 Consulta Sanity para a página
const query = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  categories[]->{
    _id,
    title,
    slug
  },
  mainImage {
    asset -> {
      url
    }
  },
  body
}`

// ✅ Geração estática (SSG)
export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`
  const slugs = await sanityClient.fetch<{ slug: string }[]>(query)

  return slugs.map(({ slug }) => ({ slug }))
}

// ✅ Página individual do post
export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  const post = await sanityClient.fetch(query, { slug })

  if (!post) return notFound()

  return (
    <>
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md">
        <article>
          <Link
            href="/"
            className="inline-flex items-center text-[#14A5D6] hover:underline mb-6"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Volver a las publicaciones
          </Link>

          {post.categories?.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {post.categories.map((cat) => (
                <span
                  key={cat._id}
                  className="text-xs bg-[#14A5D6]/10 text-[#14A5D6] px-2 py-1 rounded-full font-medium"
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl font-bold text-[#8775BA] mb-3">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-6">
            Publicado el{' '}
            {new Date(post.publishedAt).toLocaleDateString('es-ES', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>

          {post.mainImage?.asset?.url && (
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              width={800}
              height={400}
              className="rounded-lg mb-6"
            />
          )}

          <div className="prose prose-lg prose-blue max-w-none">
            <PortableTextRenderer value={post.body} />
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}