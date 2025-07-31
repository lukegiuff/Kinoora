import { getPageBySlug } from '@/lib/content'
import { notFound } from 'next/navigation'

export default async function FilmmakerPage() {
  const pageContent = await getPageBySlug('filmmakers')

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
              Your Stage. Your Story.
            </h1>
            <p className="text-base md:text-lg mb-8 opacity-90 leading-relaxed drop-shadow-lg">
              Kinoora puts filmmakers first. Keep your rights, reach passionate audiences, and earn fair rewards—on your terms.
            </p>
            <a href="#founding-program" className="btn-secondary inline-block px-8 py-4 text-lg font-semibold">
              Join Founding Filmmaker Program
            </a>
          </div>
        </div>
      </div>

      {/* Founding Filmmaker Program */}
      <div id="founding-program" className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Founding Filmmaker Program
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Be one of just 50 pioneering filmmakers at the heart of Kinoora&apos;s journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Be One of the First. Shape What&apos;s Next.</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Step into the spotlight as a <strong>Kinoora Founding Filmmaker</strong>—an exclusive community of creators who will shape the platform&apos;s future from day one.
              </p>
              <a href="#" className="btn-primary px-8 py-4 text-lg font-semibold">
                Join the Waitlist
              </a>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-teal-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-6 text-gray-900">Founding Member Benefits</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#7a33ab'}}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Beta Tester Status</h3>
                    <p className="text-gray-700">First access to new features and direct input on platform direction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#7a33ab'}}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Higher Revenue Shares</h3>
                    <p className="text-gray-700">Boosted earnings during your first year</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#7a33ab'}}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Founding Filmmaker Badge</h3>
                    <p className="text-gray-700">Special profile recognition as a Kinoora original</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#7a33ab'}}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Exclusive Community</h3>
                    <p className="text-gray-700">Join a select circle of 50 pioneering filmmakers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#7a33ab'}}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Premium Features Access</h3>
                    <p className="text-gray-700">Free access to paid premium features like advanced analytics and subtitle translations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#7a33ab'}}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Lifetime Premium Support</h3>
                    <p className="text-gray-700">Dedicated support and assistance throughout your journey on Kinoora</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Choose Founding Filmmakers */}
      <div className="section-padding bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              How Do We Choose the Founding Filmmakers?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <div className="max-w-3xl mx-auto">
              <p className="text-base text-gray-700 leading-relaxed">
                Sign up for the waitlist to stay in the loop. When the time comes, we will reach out and you'll have the chance to claim your spot as one of our 50 founding filmmakers—first come, first serve.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Types */}
      <div className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Is Kinoora the Right Platform for Me?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              We are not the new TikTok or YouTube. Our platform is designed for original cinematic content.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#7a33ab'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Independent Films</h3>
              <p className="text-sm text-gray-700">Feature-length narratives, character studies, and genre-defying adventures.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#51c7be'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Original Series</h3>
              <p className="text-sm text-gray-700">Multi-episode storytelling with complete creative freedom for showrunners.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#34124a'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Documentary Stories</h3>
              <p className="text-sm text-gray-700">Real stories, investigative pieces, and perspectives that need to be heard.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#7a33ab'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Short Films</h3>
              <p className="text-sm text-gray-700">Powerful storytelling in condensed format—from 1 minute to 40 minutes.</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Not sure if your film or series fits? Check out our <a href="/#faq" className="text-purple-600 hover:text-purple-800 underline font-medium transition-colors">FAQ</a> for more details about content guidelines.
            </p>
          </div>
        </div>
      </div>

      {/* Why Join Section */}
      <div className="section-padding bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-gray-900">
            Why Choose Kinoora?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#7a33ab'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Keep 100% Rights</h3>
              <p className="text-sm text-gray-700">Your work stays yours. No exclusivity required—always.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#51c7be'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Fair Monetization</h3>
              <p className="text-sm text-gray-700">Earn through subscriptions, rentals, or donations on your terms.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#34124a'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Direct Connection</h3>
              <p className="text-sm text-gray-700">Engage directly with your audience through messaging and community features.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#7a33ab'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Advanced Analytics</h3>
              <p className="text-sm text-gray-700">Real insights about what works in your storytelling.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#51c7be'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Global Reach</h3>
              <p className="text-sm text-gray-700">Subtitle translation services to reach international audiences.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#34124a'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Artistic Freedom</h3>
              <p className="text-sm text-gray-700">All legal stories and genres welcome—your vision, your way.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding hero-gradient relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Ready to Join the Movement?
          </h2>
          <p className="text-base text-white/90 mb-8 max-w-3xl mx-auto">
            Be part of the platform that&apos;s changing how independent films and series reach their audiences.
          </p>
          <a href="#" className="btn-secondary px-8 py-4 text-lg font-semibold">
            Become a Founding Filmmaker
          </a>
        </div>
      </div>
    </div>
  )
} 