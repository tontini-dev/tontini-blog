import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#f6f6f6]">
      <h1 className="text-6xl font-bold text-[#14A5D6] mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Página no encontrada</p>
      <Link
        href="/blog"
        className="text-[#14A5D6] font-medium hover:underline"
      >
        ← Volver al blog
      </Link>
    </main>
  )
}