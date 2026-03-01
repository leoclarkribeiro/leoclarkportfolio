# Leo Clark Ribeiro — Portfolio

A cinematic, elegant portfolio website with buttery smooth scroll animations and modern web capabilities.

## Features

- **Lenis smooth scroll** — Physics-based, silky scrolling
- **Scroll-triggered reveals** — Sections animate into view as you scroll
- **Cinematic aesthetic** — Dark film-inspired design with Cormorant Garamond + Syne typography
- **Responsive** — Works on desktop, tablet, and mobile
- **Respects motion preferences** — Animations disabled when users prefer reduced motion

## Local development

```bash
# Using Python (if installed)
python -m http.server 8000

# Or using Node.js (npx)
npx serve .
```

Then open [http://localhost:8000](http://localhost:8000).

## Deployment

The site is static HTML/CSS/JS. Deploy to any host:

- **Netlify** / **Vercel** — Drag the folder or connect your repo
- **GitHub Pages** — Push to a repo and enable Pages
- **Your own server** — Upload the files via FTP/SFTP

## Customization

### Video embeds

Replace the placeholder `iframe` `src` attributes and `.video-placeholder` divs with your actual YouTube or Vimeo embed URLs. Format:

- YouTube: `https://www.youtube.com/embed/VIDEO_ID`
- Vimeo: `https://player.vimeo.com/video/VIDEO_ID`

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
  --bg-dark: #070707;
  --accent: #c9a227;  /* Gold accent */
  --text-primary: #f5f0e8;
}
```
