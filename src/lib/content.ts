import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const contentDirectory = path.join(process.cwd(), 'content')

export interface ContentItem {
  slug: string
  title: string
  description?: string
  published: boolean
  content: string
  frontmatter: any
}

export interface BlogPost extends ContentItem {
  date: string
  author: string
  tags: string[]
}

export interface SiteConfig {
  title: string
  description: string
  url: string
  logo?: string
}

export async function getSiteConfig(): Promise<SiteConfig> {
  try {
    const configPath = path.join(contentDirectory, 'config', 'site.json')
    const configContent = fs.readFileSync(configPath, 'utf8')
    return JSON.parse(configContent)
  } catch {
    return {
      title: 'Kinoora',
      description: 'A modern website built with Next.js and managed with Decap CMS',
      url: 'https://your-domain.com'
    }
  }
}

export async function getPageBySlug(slug: string): Promise<ContentItem | null> {
  try {
    const pagesDirectory = path.join(contentDirectory, 'pages')
    const files = fs.readdirSync(pagesDirectory)
    
    for (const file of files) {
      if (file.endsWith('.md')) {
        const filePath = path.join(pagesDirectory, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContent)
        
        if (data.slug === slug && data.published !== false) {
          return {
            slug: data.slug,
            title: data.title,
            description: data.description,
            published: data.published !== false,
            content: await marked(content),
            frontmatter: data
          }
        }
      }
    }
    return null
  } catch {
    return null
  }
}

export async function getAllPages(): Promise<ContentItem[]> {
  try {
    const pagesDirectory = path.join(contentDirectory, 'pages')
    const files = fs.readdirSync(pagesDirectory)
    
    const pages = await Promise.all(files
      .filter(file => file.endsWith('.md'))
      .map(async file => {
        const filePath = path.join(pagesDirectory, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContent)
        
        return {
          slug: data.slug,
          title: data.title,
          description: data.description,
          published: data.published !== false,
          content: await marked(content),
          frontmatter: data
        }
      }))
    
    return pages.filter(page => page.published)
  } catch {
    return []
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const postsDirectory = path.join(contentDirectory, 'posts')
    const files = fs.readdirSync(postsDirectory)
    
    const posts = await Promise.all(files
      .filter(file => file.endsWith('.md'))
      .map(async file => {
        const filePath = path.join(postsDirectory, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContent)
        
        return {
          slug: data.slug,
          title: data.title,
          description: data.description,
          published: data.published !== false,
          content: await marked(content),
          frontmatter: data,
          date: data.date,
          author: data.author,
          tags: data.tags || []
        }
      }))
    
    const filteredPosts = posts.filter(post => post.published)
    return filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch {
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const postsDirectory = path.join(contentDirectory, 'posts')
    const files = fs.readdirSync(postsDirectory)
    
    for (const file of files) {
      if (file.endsWith('.md')) {
        const filePath = path.join(postsDirectory, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContent)
        
        if (data.slug === slug && data.published !== false) {
          return {
            slug: data.slug,
            title: data.title,
            description: data.description,
            published: data.published !== false,
            content: await marked(content),
            frontmatter: data,
            date: data.date,
            author: data.author,
            tags: data.tags || []
          }
        }
      }
    }
    return null
  } catch {
    return null
  }
} 