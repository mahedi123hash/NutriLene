# ToolVerse — Free Online Tools Website

A production-ready Next.js 14 website with 50+ free online tools, built for Google SEO and AdSense monetization.

## 🚀 Quick Deploy (Free)

### Option 1: Vercel (Recommended)
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Click **Deploy** — done!
5. Your site will be live at `your-project.vercel.app`

### Option 2: Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site**
3. Connect GitHub repo
4. Build command: `npm run build`
5. Publish directory: `.next`

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout with SEO metadata
│   ├── sitemap.ts            # Auto-generated XML sitemap
│   ├── robots.ts             # robots.txt
│   ├── not-found.tsx         # 404 page
│   ├── tools/[slug]/         # Dynamic tool pages (50 tools)
│   ├── blog/                 # Blog listing
│   ├── about/                # About Us (AdSense required)
│   ├── contact/              # Contact Us (AdSense required)
│   ├── privacy-policy/       # Privacy Policy (AdSense required)
│   └── terms/                # Terms & Conditions (AdSense required)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── tools/
│   │   ├── ToolCard.tsx
│   │   ├── ToolRenderer.tsx
│   │   └── implementations/  # Individual tool UIs
│   └── ui/
│       ├── AdBanner.tsx       # Replace with real AdSense code
│       ├── HeroSearch.tsx
│       ├── CategoryCard.tsx
│       ├── BlogCard.tsx
│       └── StatsBanner.tsx
└── lib/
    └── tools.ts               # All 50 tools data
```

---

## 💰 AdSense Setup

1. Apply at [google.com/adsense](https://google.com/adsense) (requires custom domain)
2. Get your Publisher ID (`ca-pub-XXXXXXXXXXXXXXXX`)
3. In `src/components/ui/AdBanner.tsx`, replace the placeholder with:

```tsx
<ins
  className="adsbygoogle"
  style={{ display: 'block' }}
  data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
  data-ad-slot="XXXXXXXXXX"
  data-ad-format="auto"
  data-full-width-responsive="true"
/>
```

4. Add this script to `src/app/layout.tsx` inside `<head>`:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX" crossorigin="anonymous"></script>
```

### Ad placements already set up:
- Homepage: header + middle + footer
- Tool pages: above tool + sidebar (×2) + below result
- Blog pages: after intro + middle + end

---

## 🔍 SEO Features

- ✅ Dynamic metadata per tool page (`generateMetadata`)
- ✅ Auto XML sitemap at `/sitemap.xml`
- ✅ robots.txt at `/robots.txt`
- ✅ Open Graph + Twitter Card tags
- ✅ Semantic HTML structure
- ✅ SEO content section on each tool page
- ✅ Clean URL structure: `/tools/age-calculator`

---

## 🌱 Growth Roadmap

| Month | Goal |
|-------|------|
| 1 | Deploy, 50 tools live, submit sitemap to Google |
| 2 | Publish 30 blog posts, optimize page titles |
| 3 | 100 tools, build backlinks |
| 6 | 200 tools, 100 blog posts, 50k+ monthly visitors |

---

## 🛠 Adding New Tools

1. Add tool data to `src/lib/tools.ts`
2. Create implementation in `src/components/tools/implementations/`
3. Register it in `src/components/tools/ToolRenderer.tsx`

---

## 💡 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + inline styles
- **Hosting**: Vercel (free tier)
- **CDN**: Cloudflare (free)
- **Domain**: ~$10–15/year

**Total startup cost: ~$10–15/year**
