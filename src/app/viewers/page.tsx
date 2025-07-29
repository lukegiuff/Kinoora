import { getPageBySlug } from '@/lib/content'
import { notFound } from 'next/navigation'

export default async function ViewersPage() {
  const pageContent = await getPageBySlug('viewers')

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

      {/* Hero Section */}
      <div className="hero-gradient text-white relative overflow-hidden py-32 pt-52">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl">
              Discover the Unseen
            </h1>
            <p className="text-base md:text-lg mb-8 opacity-90 leading-relaxed drop-shadow-lg">
              Step into a new world of indie films and series. Experience authentic stories beyond the mainstream.
            </p>
            <a href="#early-adopter" className="btn-secondary inline-block px-8 py-4 text-lg font-semibold">
              Join Early Adopters
            </a>
          </div>
        </div>
      </div>

      {/* Discovery Features */}
      <div className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              A New Way to Discover
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Experience cinema like never before with personalized discovery and direct creator connections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#7a33ab'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10M7 4v16a1 1 0 001 1h8a1 1 0 001-1V4M7 4H5a1 1 0 00-1 1v14a1 1 0 001 1h2M17 4h2a1 1 0 011 1v14a1 1 0 01-1 1h-2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">TikTok-Style Discovery</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Fast, fun trailer feed that learns your preferences and introduces you to perfect matches.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#51c7be'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Direct Creator Connection</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Message filmmakers, ask questions, and become part of their creative journey.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#34124a'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Community-Driven</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Discover through passionate cinephiles who share your love for authentic storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Early Adopter Section */}
      <div id="early-adopter" className="section-padding bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-purple-50 to-teal-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  Early Adopter Perks
                </h2>
                <p className="text-base text-gray-700 mb-8 leading-relaxed">
                  Be among the first to join Kinoora and unlock special benefits for early viewers!
                </p>
                <a href="#" className="btn-primary px-8 py-4 text-lg font-semibold">
                  Join the Waitlist
                </a>
              </div>
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#7a33ab'}}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Lower Launch Pricing</h3>
                      <p className="text-gray-700">Enjoy reduced subscription fees when we launch.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#51c7be'}}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Beta Testing Access</h3>
                      <p className="text-gray-700">Help shape the platform by testing new features first.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#34124a'}}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Exclusive Content</h3>
                      <p className="text-gray-700">Access to special screenings and behind-the-scenes content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Types */}
      <div className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-gray-900">
            What You'll Discover
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#7a33ab'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Independent Films</h3>
              <p className="text-sm text-gray-700">Intimate character studies to genre-defying adventures that mainstream won't touch.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#51c7be'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Original Series</h3>
              <p className="text-sm text-gray-700">Binge-worthy series with complete creative freedom from independent showrunners.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#34124a'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Documentary Stories</h3>
              <p className="text-sm text-gray-700">Real stories from real people—perspectives that need to be heard.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#7a33ab'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Short Films</h3>
              <p className="text-sm text-gray-700">Powerful stories told in minutes—perfect for your commute or coffee break.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Launch Info */}
      <div className="section-padding bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Coming Soon to EU & UK
          </h2>
          <p className="text-base text-gray-700 mb-8">
            Launching <strong>Q4 2025</strong> in the EU and UK, expanding globally in 2026
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <p className="text-lg text-gray-700 mb-6">
              Get notified when Kinoora launches and gain access to exclusive early adopter benefits.
            </p>
            <p className="text-sm text-gray-500">No spam, just updates on our progress and launch timeline.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding hero-gradient relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Ready to Discover Something New?
          </h2>
          <p className="text-base text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of film lovers waiting to experience the future of independent cinema.
          </p>
          <a href="#" className="btn-secondary px-8 py-4 text-lg font-semibold">
            Join the Viewer Waitlist
          </a>
        </div>
      </div>
    </div>
  )
} 