import { getAllPosts } from '@/lib/content'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Blog</h1>
        
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-base">No blog posts yet.</p>
            <p className="text-gray-500 mt-2 text-sm">
              <a href="/admin" className="text-blue-600 hover:text-blue-800">
                Create your first post
              </a>
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-gray-200 pb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                <div className="text-gray-600 text-xs mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  {post.author && <span> • by {post.author}</span>}
                </div>
                
                {post.description && (
                  <p className="text-gray-700 mb-3 text-sm">{post.description}</p>
                )}
                
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <span 
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 