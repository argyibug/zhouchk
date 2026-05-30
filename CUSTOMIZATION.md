# Customization Guide

How to make this template look and read like *your* homepage.

## Colors

All colors are CSS variables defined at the top of `stylesheet.css`. Edit there once and every page updates.

```css
:root {
  --primary-color: #0065C0;   /* main accent (links, headings) */
  --secondary-color: #f09228; /* hover/active accent */
  --text-color: #000000;
  --bg-color: #FFFFFF;
  --border-color: #bbb;
  --hover-bg: rgba(240, 146, 40, 0.08);
}

[data-theme="dark"] {
  --primary-color: #6BA3F5;
  --secondary-color: #FFB366;
  --text-color: #D4D4D4;
  --bg-color: #1F1F1F;
  /* ... */
}
```

A few palettes you might like:

| Palette | primary | secondary |
| --- | --- | --- |
| Academic blue (default) | `#0065C0` | `#f09228` |
| Forest green | `#2E8B57` | `#FF6B35` |
| Modern purple | `#6A4C93` | `#F72585` |
| Classic red | `#B31B1B` | `#FFD700` |

## Fonts

The template uses `Lato` from Google Fonts. To switch:

1. Edit the `@font-face` block (or just remove it) at the top of `stylesheet.css`.
2. Update `body, p, strong, td, th, tr, a` font-family declarations.

## Navigation and footer

`site-shell.js` injects the nav and footer on every page. Edit there once.

```javascript
const NAV_ITEMS = [
  { key: 'home',         href: 'index.html',        label: 'Home' },
  { key: 'publications', href: 'publications.html', label: 'Publications' },
  // add or remove pages here
];

const FOOTER_SOCIALS = [
  { href: 'https://github.com/yourusername',  label: 'GitHub',         icon: '<svg ...>' },
  // add LinkedIn, Twitter, ORCID, Bluesky, ...
];
```

To add a new page that the nav points to, also add an entry to `pageMap` in `getCurrentPage()` so the active-page underline works.

## Profile section

The profile (photo + name + bio + contact links) is inline in `index.html`. Easier to edit one HTML block than a config object.

```html
<div class="profile-section">
  <div class="profile-text">
    <div class="name">Your Name</div>
    <div class="pronunciation">(Optional pronunciation)</div>
    <p class="bio">...</p>
    <div class="profile-links">
      <a href="mailto:...">Email</a> /
      <a href="...">GitHub</a> /
      ...
    </div>
  </div>
  <img class="profile-photo" src="figures/me.jpg" ...>
</div>
```

## Adding a publication

In `data.js`, append to the `publications` array. Minimum required fields:

```javascript
{
  title: "...",
  authors: "<b>You</b>, Co-Author",
  venue: "Venue YYYY",
  links: [{ text: "Paper", url: "..." }],
  isPreprint: false,    // true → Preprints section
  isSelected: false     // true → also shown on homepage and CV
}
```

Optional: `abstract`, `citation` (HTML), `isNew` (shows a "New" badge).

## Adding a project

```javascript
{
  title: "Project Name",
  description: "Short blurb. (<a href=\"https://github.com/.../repo\">Project Homepage</a>)",
  badges: [
    { url: "https://github.com/.../repo/stargazers", img: "https://img.shields.io/github/stars/.../repo" },
    { url: "https://...",                            img: "https://img.shields.io/badge/Demo-Live-brightgreen" }
  ],
  isSelected: true,
  demoPath: "photos/project-demo/your-project.png"
}
```

The Project Homepage link in the description is parsed out and used to make the title and demo image clickable.

## Hiding a section on the homepage

Wrap or delete the `<div class="homepage-section">` in `index.html`. Sections are:
- News
- Selected Papers
- Selected Projects

Add new sections by following the same pattern.

## Photography

Each photo is one `<div class="photo-item">` in `photography.html`:

```html
<div class="photo-item" data-year="2025" data-location="City">
  <img src="photos/your-photo.jpg" alt="..." loading="lazy">
  <div class="photo-caption">
    <div class="photo-title">Photo Title</div>
    <div class="photo-meta">City • Month YYYY</div>
  </div>
</div>
```

The lightbox cycles through every `.photo-item` in DOM order. Use `data-year` / `data-location` if you want to add filtering later.

## Blog

Two-step:

1. Drop a Markdown file into `blogs/`.
2. Add an entry to `blogPosts` in `blog-data.js`:

```javascript
{
  id: "post-slug",
  title: "Post Title",
  date: "2025-01-01",
  author: "Your Name",
  excerpt: "Preview text.",
  tags: ["LLM", "Notes"],
  readTime: 5,
  markdownFile: "blogs/post-slug.md",
  content: null,
  htmlContent: null
}
```

Markdown is rendered by [marked](https://marked.js.org/) (vendored at `vendor/marked.umd.js`).

## Adding a brand-new page

1. Copy `publications.html` as a starting point — it has the right shell.
2. Replace `<main>` content.
3. Register the page in `site-shell.js` (`NAV_ITEMS` and `pageMap`).

## Easter egg / extra scripts

The original homepage loads an `easter-egg.js` lazily. The template strips that out. Add your own bonus scripts at the bottom of any HTML page or inside `site-shell.js`.

## Analytics

Add to the `<head>` of every HTML page (or to a snippet you append in `site-shell.js`):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## Common tweaks

| I want to ... | Change |
| --- | --- |
| Square profile photo | remove `border-radius` from `.profile-photo` (already square here) |
| Wider content area | increase `max-width` on `.page-shell` in `shared-styles.css` |
| Add a new social icon | add to `FOOTER_SOCIALS` in `site-shell.js` |
| Disable dark mode | remove the `theme-toggle` button from `buildNav()` in `site-shell.js` |
| Change copyright | edit `getFooterCopy()` in `site-shell.js` |
| Custom nav active style | edit `.nav-button[aria-current="page"]` in `shared-styles.css` |

## Testing locally

The template is plain static files — no build step. Either:

```bash
# any of these
python3 -m http.server 8000
npx serve .
```

Then open `http://localhost:8000`. (Opening `index.html` with `file://` works for most pages; the blog page needs `http://` because it `fetch`es markdown files.)

## Browser support

Modern Chromium, Firefox, Safari. Uses CSS variables, IntersectionObserver, and `fetch`.
