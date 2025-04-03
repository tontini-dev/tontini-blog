import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { sanityClient } from '@/lib/sanity'
import { getAllPostsQuery } from '@/lib/queries'
import Image from 'next/image'
import Link from 'next/link'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  mainImage?: {
    asset: {
      url: string
    }
  }
  categories?: {
    _id: string
    title: string
    slug: { current: string }
  }[]
}

export default async function BlogHome() {
  const posts: Post[] = await sanityClient.fetch(getAllPostsQuery)

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#8775BA] mb-10">Últimas publicaciones</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              href={`/${post.slug.current}`}
              key={post._id}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {post.mainImage?.asset?.url && (
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <div className="p-5 flex flex-col justify-between h-full">
                {Array.isArray(post.categories) && post.categories.length > 0 && (
                  <div className="mb-2 flex flex-wrap gap-2">
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
                <h2 className="text-xl font-semibold text-[#14A5D6] mb-2 group-hover:underline">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                  {new Date(post.publishedAt).toLocaleDateString('es-ES')}
                </p>
                <p className="text-gray-700 text-sm line-clamp-3">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}