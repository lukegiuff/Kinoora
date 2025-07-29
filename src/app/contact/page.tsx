import { getPageBySlug } from '@/lib/content'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function ContactPage() {
  const pageContent = await getPageBySlug('contact')

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
              Get in Touch
            </h1>
            <p className="text-base md:text-lg mb-8 opacity-90 leading-relaxed drop-shadow-lg">
              Have a question or want to connect? We&apos;d love to hear from you and help you on your journey.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                Send Us a Message
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-base text-gray-700">
                Fill out the form below and we&apos;ll get back to you within 24-48 hours.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-teal-50 rounded-3xl p-8 md:p-12">
              <form className="max-w-2xl mx-auto space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label" htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="form-input" 
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="form-input" 
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" className="form-input">
                    <option value="">Select a topic</option>
                    <option value="filmmaker">Filmmaker Program</option>
                    <option value="viewer">Viewer Questions</option>
                    <option value="press">Press Inquiries</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    className="form-textarea" 
                    placeholder="Tell us how we can help you or what you'd like to know about kinoora..."
                    rows={6}
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button type="submit" className="btn-primary px-8 py-4 text-lg font-semibold">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="section-padding bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Other Ways to Reach Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Prefer direct contact? Choose the method that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#7a33ab'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">General Inquiries</h3>
              <p className="text-sm text-gray-700 mb-4">For questions about Kinoora</p>
              <a href="mailto:hello@kinoora.com" className="text-purple-600 font-semibold hover:text-purple-700">
                hello@kinoora.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#51c7be'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Press & Media</h3>
              <p className="text-sm text-gray-700 mb-4">Media kits and press inquiries</p>
              <a href="mailto:press@kinoora.com" className="text-purple-600 font-semibold hover:text-purple-700">
                press@kinoora.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#34124a'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Partnerships</h3>
              <p className="text-sm text-gray-700 mb-4">Collaboration opportunities</p>
              <a href="mailto:partnerships@kinoora.com" className="text-purple-600 font-semibold hover:text-purple-700">
                partnerships@kinoora.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ & Response Info */}
      <div className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                Before You Reach Out
              </h2>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                You might find your answer in our FAQ section. We cover common questions about:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-1" style={{backgroundColor: '#7a33ab'}}></div>
                  <span className="text-sm text-gray-700">Platform launch timeline</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-1" style={{backgroundColor: '#51c7be'}}></div>
                  <span className="text-sm text-gray-700">Filmmaker and viewer programs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-1" style={{backgroundColor: '#34124a'}}></div>
                  <span className="text-sm text-gray-700">Technical requirements</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-1" style={{backgroundColor: '#7a33ab'}}></div>
                  <span className="text-sm text-gray-700">Revenue sharing details</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-1" style={{backgroundColor: '#51c7be'}}></div>
                  <span className="text-sm text-gray-700">Content guidelines</span>
                </li>
              </ul>
              <Link href="/#faq" className="btn-outline px-6 py-3 text-base font-semibold">
                View FAQ Section
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Response Time</h3>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                We typically respond to all inquiries within <strong>24-48 hours</strong> during business days. For urgent matters, please indicate this in your subject line.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">Follow Our Journey</h3>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Stay updated on our progress:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full" style={{backgroundColor: '#7a33ab'}}></div>
                  <span className="text-sm text-gray-700">Join our newsletter for regular updates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full" style={{backgroundColor: '#51c7be'}}></div>
                  <span className="text-sm text-gray-700">Follow us on social media</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding hero-gradient relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Building Something Special Together
          </h2>
          <p className="text-base text-white/90 mb-8 max-w-3xl mx-auto">
            Kinoora is more than a platform—it&apos;s a community. Whether you&apos;re a filmmaker with a story to tell or a viewer seeking authentic cinema, we&apos;re here to connect, support, and grow together. Your feedback, questions, and ideas help shape what we&apos;re building.
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