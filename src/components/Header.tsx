import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white text-[#14A5D6] px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-50 mb-8">
      <Link href="/" className="flex items-center" aria-label="Volver al sitio principal">
        <Image
          src="/logo-tontini.png"
          alt="Logo Tontini.dev"
          width={120}
          height={40}
          priority
        />
      </Link>

      <nav>
        <Link href="/" className="hover:underline font-medium">
          Volver al sitio
        </Link>
      </nav>
    </header>
  )
}