import './globals.css'
import { Poppins } from 'next/font/google'
import Link from 'next/link'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
})

export const metadata = {
  title: 'kinoora - Redefining Independent Cinema',
  description: 'A streaming platform for independent filmmakers and cinephile audiences. Discover, create, and connect with authentic stories beyond the mainstream.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-x-hidden`}>
        <div className="min-h-screen bg-white">
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4">
            <nav className="backdrop-blur-md bg-white/90 border border-white/30 shadow-xl rounded-2xl">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                      <img src="/assets/images/Kinoora_Logo.png" alt="Kinoora" className="h-8 w-auto" />
                    </Link>
                  </div>
                  <div className="hidden md:flex items-center space-x-8">
                    <Link href="/filmmakers" className="text-gray-700 nav-link font-medium transition-colors">
                      For Filmmakers
                    </Link>
                    <Link href="/viewers" className="text-gray-700 nav-link font-medium transition-colors">
                      For Viewers
                    </Link>
                    <Link href="/about" className="text-gray-700 nav-link font-medium transition-colors">
                      About
                    </Link>
                    <Link href="/contact" className="btn-primary px-3 py-2 rounded-lg font-medium transition-colors text-sm">
                      Contact
                    </Link>
                  </div>
                  <div className="md:hidden flex items-center">
                    <Link href="/filmmakers" className="btn-primary px-3 py-2 rounded-lg font-medium transition-colors text-sm">
                      Join
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <main>{children}</main>
          <footer className="text-white" style={{backgroundColor: 'var(--kinoora-primary)'}}>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <img src="/assets/images/Kinoora_Logo_White.png" alt="Kinoora" className="h-10 w-auto mb-4" />
                  <p className="text-purple-100 mb-4">
                    Redefining how independent films, series, and shorts are made, shared, and discovered.
                  </p>
                  <p className="text-sm text-purple-200 mb-6">
                    Launching Q4 2025 in the EU and UK
                  </p>
                  
                  {/* Social Media Links */}
                  <div className="flex space-x-4">
                    <a href="#" className="text-purple-200 hover:text-white transition-colors duration-300" aria-label="Follow us on X">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-purple-200 hover:text-white transition-colors duration-300" aria-label="Follow us on Instagram">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-purple-200 hover:text-white transition-colors duration-300" aria-label="Connect on LinkedIn">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-purple-200 hover:text-white transition-colors duration-300" aria-label="Subscribe to our YouTube">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-purple-200 hover:text-white transition-colors duration-300" aria-label="Like us on Facebook">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">For Creators</h4>
                  <ul className="space-y-2 text-purple-100">
                    <li><Link href="/filmmakers" className="hover:text-white transition-colors">Founding Filmmaker Program</Link></li>
                    <li><Link href="/filmmakers" className="hover:text-white transition-colors">Upload Your Work</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">For Viewers</h4>
                  <ul className="space-y-2 text-purple-100">
                    <li><Link href="/viewers" className="hover:text-white transition-colors">Join Waitlist</Link></li>
                    <li><Link href="/viewers" className="hover:text-white transition-colors">Discover Indie Films</Link></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-200">
                <p>&copy; 2025 kinoora. Empowering independent creators.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
} 