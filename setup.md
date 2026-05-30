# Setup Checklist

A checklist for the first-time customization. See [README.md](README.md) for context and [CUSTOMIZATION.md](CUSTOMIZATION.md) for details.

## 1. Identity

- [ ] `index.html` — replace name, pronunciation, bio, news items, contact links
- [ ] `cv.html` — update education entries and the contact bar
- [ ] `site-shell.js` — `FOOTER_SOCIALS` (your social URLs) and `getFooterCopy()` (your copyright name)
- [ ] All HTML files — `<title>`, `<meta>`, Open Graph, Twitter Card, JSON-LD (in `index.html`)

## 2. Content (`data.js`)

- [ ] Replace the sample publication with your own
- [ ] Replace the sample project with your own (set `demoPath` to a real image)
- [ ] Update `researchExperience`, `teaching`, `academicServices`, `talks`, `honors`
- [ ] Mark featured items with `isSelected: true` so they show on the homepage and CV

## 3. Blog (`blog-data.js`, `blogs/`)

- [ ] Add your `.md` posts to `blogs/`
- [ ] Register them in `blogPosts` (`blog-data.js`)
- [ ] Or remove the Blogs nav entry in `site-shell.js` if you don't want a blog

## 4. Photography

- [ ] Drop your photos into `photos/`
- [ ] Edit the `<div class="photo-item">` blocks in `photography.html`
- [ ] Or remove the Photography nav entry in `site-shell.js` if you don't want it

## 5. Assets

- [ ] `figures/me.jpg` — your profile photo (square, ~400×400 looks great)
- [ ] `figures/logo.png` — favicon
- [ ] `files/CV.pdf` — your CV
- [ ] `photos/project-demo/*.png` — one image per project, referenced via `demoPath`

## 6. SEO

- [ ] `sitemap.xml` — replace `yourwebsite.com`
- [ ] `robots.txt` — replace the sitemap URL
- [ ] Confirm `og:url`, `og:image`, and JSON-LD `url` use your real domain

## 7. Deploy

- [ ] Repo is named `yourusername.github.io`
- [ ] GitHub Pages enabled (Settings → Pages → Source: Deploy from branch → `main`)
- [ ] Visit `https://yourusername.github.io` and verify
  - Profile + photo render
  - Nav toggles dark mode
  - Publications, Projects, CV all populated
  - Blog list loads (if used) and a single post opens via `blog-post.html?id=...`
  - Photography lightbox opens

## 8. Smoke test

- [ ] All external links open in a new tab
- [ ] CV PDF link opens
- [ ] Mobile layout looks correct (DevTools → Responsive)
- [ ] Dark mode preference persists across reloads

That's it — you're live.
