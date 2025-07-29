# kinoora - Independent Cinema Platform

A modern streaming platform built with Next.js, TypeScript, Tailwind CSS, and Decap CMS, designed specifically for independent filmmakers and cinephile audiences.

## 🎬 About kinoora

kinoora is revolutionizing how independent films, series, and shorts are discovered, shared, and distributed. We empower creators to retain full rights, connect directly with viewers, and monetize their work fairly—without the barriers and gatekeeping of traditional platforms.

### Key Features

- **100% Rights Retention**: Filmmakers keep complete ownership of their work
- **Fair Monetization**: Transparent revenue sharing through subscriptions, rentals, and donations
- **No Exclusivity Requirements**: Share your content wherever you want
- **Advanced Analytics**: Real insights about your audience and content performance
- **Global Reach**: Subtitle translation services for international audiences
- **Community Features**: Direct interaction between filmmakers and viewers
- **TikTok-style Discovery**: Innovative trailer feed for content discovery

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Poppins font
- **CMS**: Decap CMS for content management
- **Authentication**: GitHub OAuth
- **Hosting**: Optimized for Cloudflare Pages
- **CDN**: Cloudflare Edge Network

## 📁 Project Structure

```
├── content/                 # CMS content files
│   ├── config/             # Site configuration
│   ├── pages/              # Website pages (Home, About, Filmmakers, Viewers, Contact)
│   ├── posts/              # Blog posts and articles
│   └── announcements/      # Platform updates and milestones
├── decap-proxy/            # Cloudflare Worker for OAuth
├── public/                 # Static assets and CMS admin
│   ├── admin/              # CMS admin interface
│   └── config.yml          # CMS configuration
└── src/
    ├── app/                # Next.js App Router pages
    └── lib/                # Content utilities and helpers
```

## 💻 Development

### Prerequisites
- Node.js 18+ 
- GitHub account
- Cloudflare account (for deployment)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Setup for Production

### 1. Repository Configuration
1. Make your repository public (required for Decap CMS)
2. Ensure your default branch is set correctly

### 2. GitHub OAuth App
1. Go to: https://github.com/settings/developers
2. Create a new OAuth App with:
   - **Homepage URL**: https://your-domain.com
   - **Authorization callback URL**: https://decap-proxy-kinoora.username.workers.dev/callback

### 3. Deploy Cloudflare Worker
```bash
cd decap-proxy
npm install
npx wrangler deploy
```

Add environment variables in Cloudflare Dashboard:
- `OAUTH_CLIENT_ID`: Your GitHub Client ID
- `OAUTH_CLIENT_SECRET`: Your GitHub Client Secret

### 4. Update Configuration
Edit `public/config.yml` with your:
- Repository details
- Worker URL
- Domain name

### 5. Deploy to Cloudflare Pages
- **Build command**: `npm run build`
- **Output directory**: `out`

## 📝 Content Management

### Content Types

- **Site Configuration**: Global settings and branding
- **Pages**: Main website pages (Home, Filmmakers, Viewers, About, Contact)
- **Blog Posts**: Articles and insights about independent cinema
- **Platform Updates**: Announcements about kinoora development

### Accessing Admin
Visit `/admin/` on your deployed site and log in with GitHub to manage content.

## 🎯 Platform Features

### For Filmmakers
- Founding Filmmaker Program (limited to 50 pioneers)
- Beta testing opportunities
- Enhanced revenue sharing during first year
- Advanced analytics and insights
- Direct audience engagement tools
- Subtitle translation services

### For Viewers
- Early adopter perks and lower launch pricing
- TikTok-style discovery feed
- Direct filmmaker interaction
- Access to exclusive independent content
- Community-driven recommendations

## 🌍 Launch Timeline

- **Q4 2025**: Initial launch in EU and UK
- **2026**: Expansion to additional regions
- **Now**: Founding Filmmaker and Viewer waitlists open

## 🤝 Contributing

This platform is built with the independent film community in mind. Contributions, feedback, and suggestions are welcome as we build the future of independent cinema together.

## 📞 Contact

- **General**: hello@kinoora.com
- **Press**: press@kinoora.com
- **Partnerships**: partnerships@kinoora.com

## 📄 License

MIT License - Built to empower independent creators everywhere.

---

**kinoora** - Redefining how independent films, series, and shorts are made, shared, and discovered. 