# Academic Homepage Template

A clean, minimal academic homepage template — no build step, no framework, just static HTML/CSS/JS. Drop in your data, push to GitHub Pages, and you're done.

- Demo: [Academic-Homepage-Template](https://arvid-pku.github.io/Academic-Homepage-Template/index.html)
- Customization Guide: [CUSTOMIZATION.md](CUSTOMIZATION.md)
- Author Homepage: [Xunjian Yin](https://xunjianyin.github.io/)

## Features

- **Six pages out of the box**: Home, Publications, Projects, Blogs, Photography, CV
- **Single source of truth**: edit `data.js` for publications/projects/talks/etc. — every page picks it up
- **Shared site shell**: nav and footer are injected by `site-shell.js`, so you only edit them in one place
- **Dark mode**: toggle in the nav, persisted in `localStorage`, follows system preference by default
- **Markdown blog**: write posts as `.md` files in `blogs/` and register them in `blog-data.js`
- **Photography masonry gallery** with keyboard-navigable lightbox
- **Responsive**: works from phone to desktop
- **No build**: just open `index.html` in a browser

## Quick start

1. **Fork this repo** to your GitHub account.
2. **Rename** the fork to `yourusername.github.io` (so GitHub Pages serves it at `https://yourusername.github.io`).
3. **Clone** locally and start editing:
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```
4. **Replace placeholders**:
   - `index.html` — your name, bio, contact links, news items
   - `data.js` — publications, projects, research experience, teaching, talks, services, honors
   - `blog-data.js` + `blogs/*.md` — your blog posts (delete the sample if you don't want a blog)
   - `site-shell.js` — footer social links and copyright name
   - `cv.html` — education entries and contact bar
   - `figures/me.jpg`, `figures/logo.png` — your profile photo and favicon
   - `files/CV.pdf` — your CV
   - `photos/` — your photography (and `photos/project-demo/` for project thumbnails)
   - `sitemap.xml`, `robots.txt` — your real domain
5. **Commit and push**. Enable GitHub Pages: Settings → Pages → Source: Deploy from branch → Branch: `main`.

See [CUSTOMIZATION.md](CUSTOMIZATION.md) for details, and [setup.md](setup.md) for a checklist.

## File layout

```
.
├── index.html              # Home (profile, news, selected papers/projects)
├── publications.html       # All preprints + publications
├── projects.html           # All projects with demo images
├── blogs.html              # Blog list
├── blog-post.html          # Single blog post viewer (?id=...)
├── photography.html        # Masonry gallery with lightbox
├── cv.html                 # Education + everything from data.js
├── data.js                 # ALL of your content (papers, projects, talks, ...)
├── blog-data.js            # Blog post metadata
├── blog-manager.js         # Markdown loading + rendering
├── main.js                 # Renders data.js into each page
├── site-shell.js           # Injects shared nav + footer
├── utils.js                # Dark mode + back-to-top
├── stylesheet.css          # Base styles + dark mode variables
├── shared-styles.css       # Nav, footer, publication list, back-to-top
├── blog-styles.css         # Blog list + post styles
├── vendor/marked.umd.js    # Markdown parser (vendored)
├── figures/                # Profile photo + favicon
├── files/                  # CV.pdf, talk slides, etc.
├── photos/                 # Photography page images
│   └── project-demo/       # Project thumbnails referenced by data.js
├── blogs/                  # Markdown blog posts
├── sitemap.xml
├── robots.txt
└── README.md
```

## Editing content

### Profile (`index.html`)

The profile section, news list, and contact links are inline in `index.html`. Search for `Your Name` and replace.

### Publications and projects (`data.js`)

`data.js` is the single source of truth. Every page reads from it.

```javascript
const publications = [
  {
    title: "Paper Title",
    authors: "<b>Your Name</b>, Co-Author",
    venue: "Conference YYYY",
    links: [
      { text: "Paper", url: "https://..." },
      { text: "Code", url: "https://..." }
    ],
    abstract: "Abstract text shown in the expandable Abstract toggle.",
    citation: `<pre><code>@inproceedings{...}</code></pre>`,
    isNew: true,        // shows a "New" badge
    isPreprint: false,  // true → shown under Preprints, false → under Publications
    isSelected: true    // true → also shown on the homepage and CV
  }
];

const projects = [
  {
    title: "Project Name",
    description: "Short description with <a href=\"...\">Project Homepage</a> link.",
    badges: [
      { url: "https://...", img: "https://img.shields.io/..." }
    ],
    isSelected: true,             // true → shown on the homepage
    demoPath: "photos/project-demo/your-project.png"
  }
];
```

Other arrays in `data.js` you can edit:
- `researchExperience`, `teaching`, `academicServices`, `talks`, `honors`

### Blog posts

1. Drop a `.md` file into `blogs/`.
2. Register it in `blog-data.js`:
   ```javascript
   {
     id: "my-post",
     title: "My Post",
     date: "2025-01-01",
     author: "Your Name",
     excerpt: "One-sentence preview.",
     tags: ["Tag1", "Tag2"],
     readTime: 5,
     markdownFile: "blogs/my-post.md",
     content: null,
     htmlContent: null
   }
   ```

### Photography

Edit `photography.html` directly — each photo is an inline `<div class="photo-item">` block. Drop the image into `photos/` and update the `<img>` src.

### Navigation and footer

`site-shell.js` defines `NAV_ITEMS` and `FOOTER_SOCIALS` — edit there instead of touching every HTML page.

### Colors

Edit the CSS variables at the top of `stylesheet.css`:

```css
:root {
  --primary-color: #0065C0;
  --secondary-color: #f09228;
  /* ... */
}

[data-theme="dark"] {
  --primary-color: #6BA3F5;
  /* ... */
}
```

## Deployment

### GitHub Pages

Enable Pages on a `yourusername.github.io` repo and the site is live. Pushes to `main` redeploy automatically.

### Anywhere else

It's static HTML — Netlify, Vercel, S3, plain nginx, etc. all work. No build step.

## License

Free to use for personal and academic homepages. Attribution appreciated but not required.
