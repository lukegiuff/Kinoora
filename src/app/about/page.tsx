import { getPageBySlug } from '@/lib/content'
import { notFound } from 'next/navigation'

export default async function AboutPage() {
  const pageContent = await getPageBySlug('about')

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
              Why Kinoora? A Founder&apos;s Story
            </h1>
            <p className="text-base md:text-lg mb-8 opacity-90 leading-relaxed drop-shadow-lg">
              Learn about our mission to empower filmmakers and connect audiences with the best in independent cinema.
            </p>
          </div>
        </div>
      </div>

      {/* Founder's Story */}
      <div className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                Founder&apos;s Note
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto mb-6 rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-teal-50 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold" style={{backgroundColor: '#7a33ab'}}>
                    D
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Daniel</h3>
                  <p className="text-sm text-gray-600">Founder, Filmmaker & Actor</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    Hi, I&apos;m Daniel—founder of <strong>kinoora</strong>, filmmaker, and actor. My journey in the film world has been filled with passion, creativity, and, honestly, a lot of obstacles. I&apos;ve seen firsthand how hard it is for indie filmmakers to get their work seen, whether it&apos;s a film, a series, or a short, and to be treated fairly.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Kinoora is my answer to those struggles. I created this platform to open doors for filmmakers who want to tell their stories without compromise—and for audiences who want to discover something real and new. My mission is simple: make it easier for all filmmakers to share their vision and for viewers to experience the future of indie cinema and series.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="section-padding bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto mb-8 rounded-full"></div>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-bold text-gray-900 mb-8 leading-relaxed">
              "To empower filmmakers, celebrate creativity, and connect audiences with the best in independent film and series."
            </blockquote>
            <p className="text-base text-gray-700 leading-relaxed">
              We believe that every story deserves to be told, and every filmmaker deserves a fair chance to reach their audience. At kinoora, we&apos;re not just building a platform—we&apos;re fostering a community where creativity thrives, where artists maintain control of their work, and where genuine connections form between creators and their audiences.
            </p>
          </div>
        </div>
      </div>

      {/* What We Stand For */}
      <div className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              What We Stand For
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Our core values drive everything we do at Kinoora
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#7a33ab'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Artistic Freedom</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                All legal stories and genres are welcome. We believe in the power of diverse voices and authentic storytelling.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#51c7be'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Fair Monetization</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Filmmakers keep 100% of their rights and benefit from transparent revenue sharing from subscriptions, rentals, and donations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#34124a'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Community Connection</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Direct interaction between filmmakers and audiences through comments, messaging, and community features.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#7a33ab'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Creative Control</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                No exclusivity requirements—share your work wherever you want while being part of our community.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#51c7be'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Global Reach</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Advanced services like subtitle translation and detailed analytics help filmmakers reach broader audiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding hero-gradient relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Join the Movement
          </h2>
          <p className="text-base text-white/90 mb-8 max-w-3xl mx-auto">
            Whether you&apos;re a filmmaker ready to share your vision or a film lover seeking authentic stories, kinoora is your home for independent cinema. Together, we&apos;re building the future of filmmaking—one story at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/filmmakers" className="btn-secondary px-8 py-4 text-lg font-semibold">
              For Filmmakers
            </a>
            <a href="/viewers" className="btn-primary px-8 py-4 text-lg font-semibold">
              For Viewers
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 