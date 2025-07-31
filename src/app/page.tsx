import { getPageBySlug, getSiteConfig } from '@/lib/content'
import { notFound } from 'next/navigation'

export default async function HomePage() {
  const [siteConfig, pageContent] = await Promise.all([
    getSiteConfig(),
    getPageBySlug('home')
  ])

  if (!pageContent) {
    notFound()
  }

  return (
    <div className="relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-teal-50"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #7a33ab 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #51c7be 0%, transparent 50%)`,
          backgroundSize: '400px 400px'
        }}></div>
      </div>

      {/* Hero Section - extends to top */}
      <div className="hero-gradient text-white relative overflow-hidden h-[85vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/images/hero_image.jpg)'
          }}
        ></div>
        {/* Less transparent overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-teal-900/40"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 pt-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight drop-shadow-2xl">
            Forget Everything You Know About Streaming
          </h1>
          <p className="text-base md:text-lg mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            At <strong>kinoora</strong>, we&apos;re rewriting the rules for filmmakers and film lovers alike. Are you in?
          </p>
          <p className="text-sm md:text-base mb-12 opacity-80 max-w-3xl mx-auto drop-shadow-lg">
            Ready for a world where indie films and series take center stage—and you&apos;re part of the story? See what&apos;s waiting at kinoora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/filmmakers" className="btn-secondary text-center px-6 py-3 text-base font-semibold">
              For Filmmakers: Become a Founding Filmmaker
            </a>
            <a href="/viewers" className="btn-primary text-center px-6 py-3 text-base font-semibold">
              For Viewers: Join the Waitlist
            </a>
          </div>
        </div>
      </div>

      {/* How Kinoora Works - Light Grey Background */}
      <div className="section-padding bg-gray-50 relative border-t border-gray-100">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237a33ab' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              How Kinoora Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Kinoora is redefining how independent films, series, and shorts are made, shared, and discovered. We empower filmmakers to take control and invite film lovers to experience authentic stories beyond the mainstream.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg" style={{backgroundColor: '#7a33ab'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">For Filmmakers</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Upload your films, series, documentaries, or shorts. Keep your rights, earn from subscriptions, rentals, or donations, and benefit from powerful services and analytics to help your work reach its audience.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg" style={{backgroundColor: '#51c7be'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">For Viewers</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Discover new films and series with our TikTok-style trailer feed, interact with filmmakers, and support the stories you love.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg" style={{backgroundColor: '#34124a'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Community First</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We believe in artistic freedom, fair revenue, and real connections between filmmakers and audiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Kinoora - White with subtle gradient */}
      <div className="section-padding bg-gradient-to-br from-white via-gray-50 to-white relative border-t border-gray-100">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-teal-100 to-transparent rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Why Join Kinoora?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-1 shadow-sm" style={{backgroundColor: '#7a33ab'}}></div>
                  <p className="text-sm text-gray-700">Break free from the mainstream and discover independent voices.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-1 shadow-sm" style={{backgroundColor: '#7a33ab'}}></div>
                  <p className="text-sm text-gray-700">Filmmakers retain 100% of their rights—no exclusivity required.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-1 shadow-sm" style={{backgroundColor: '#7a33ab'}}></div>
                  <p className="text-sm text-gray-700">Viewers access a world of creative, diverse cinema and series.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-1 shadow-sm" style={{backgroundColor: '#7a33ab'}}></div>
                  <p className="text-sm text-gray-700">Transparent, fair monetization for filmmakers.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-1 shadow-sm" style={{backgroundColor: '#7a33ab'}}></div>
                  <p className="text-sm text-gray-700">A supportive, growing community.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-1 shadow-sm" style={{backgroundColor: '#7a33ab'}}></div>
                  <p className="text-sm text-gray-700">A new era of self-distribution without any gatekeeping.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - Light Grey with pattern */}
      <div id="faq" className="section-padding bg-gray-100 relative border-t border-gray-200">
        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2551c7be' fill-opacity='0.03'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20zM40 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about kinoora and how we&apos;re revolutionizing independent cinema.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#7a33ab'}}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">What is Kinoora?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">Kinoora is a new streaming platform for independent films, series, documentaries, and shorts—connecting filmmakers and viewers in a fair, creative community.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#51c7be'}}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Who can join Kinoora?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">Any filmmaker or cinephile looking for something beyond the mainstream.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#34124a'}}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">When and where will Kinoora launch?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">We&apos;re launching in Q4 2025, starting in the EU and UK, with plans to expand to more regions in 2026.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#7a33ab'}}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">How do I join?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">Sign up for our waiting list as a filmmaker or viewer for early access and exclusive updates.</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-gradient-to-r from-purple-50 to-teal-50 rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#51c7be'}}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">What makes Kinoora different?</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">We prioritize filmmaker rights, community, and artistic freedom—no gatekeeping, no exclusivity, just great stories. Our platform empowers creators while connecting them directly with audiences who appreciate authentic, independent content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 