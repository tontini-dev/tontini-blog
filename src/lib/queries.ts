export const getAllPostsQuery = `*[_type == "post"]{
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  categories[]->{
    _id,
    title,
    slug
  },
  mainImage {
    asset -> {
      url
    }
  }
} | order(publishedAt desc)`