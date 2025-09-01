import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            AutoDealer Pro
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              All Vehicles
            </Link>
            <Link href="/brands" className="hover:text-blue-400 transition-colors">
              Brands
            </Link>
            <Link href="/dealers" className="hover:text-blue-400 transition-colors">
              Dealers
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}