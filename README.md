# Tania — UX/UI Designer Portfolio

A small, fast, **no-build** portfolio website. Just HTML, CSS and a little
JavaScript — so it opens by double-clicking `index.html` and deploys free
almost anywhere.

```
TaniaDesign/
├── index.html              ← Home (hero, work, about teaser, contact)
├── about.html              ← About (bio, tools, timeline w/ ITSCHOOL)
├── work/
│   ├── project-one.html    ← Case study 1
│   └── project-two.html    ← Case study 2
└── assets/
    ├── css/styles.css      ← All styling + theme (edit variables at top)
    ├── js/main.js          ← Theme toggle, mobile menu, animations
    └── img/                ← Photos & project images go here
```

## ✏️ What to personalize

Every spot to change is tagged with a `TODO` comment in the HTML. Search the
project for **`TODO`** to jump between them. The essentials:

- [ ] **Her name** — currently "Tania". Find/replace if a full name is wanted.
- [ ] **Photo** — drop a square photo at `assets/img/tania.jpg`, then point the
      two `<img class="avatar" ...>` tags at it (they use `avatar.svg` for now).
- [ ] **Intro / bio** — the hero text on `index.html` and the story on `about.html`.
- [ ] **The 2 projects** — titles, descriptions, and the case study content in
      `work/project-one.html` and `work/project-two.html`.
- [ ] **Project images** — replace the colored gradient placeholders with real
      screenshots (each has a `TODO` showing the `<img>` to use).
- [ ] **Contact links** — real email (`mailto:`) and LinkedIn URL. They appear in
      each page's contact section and footer.
- [ ] **Location, tools, dates** on `about.html`.

## 🎨 Re-theming (colors & fonts)

Open `assets/css/styles.css` — everything is driven by variables at the very top:

```css
:root {
  --accent: #5b4be1;   /* change this one line to recolor the whole site */
  --bg:     #fbfbf9;
  --text:   #17171a;
  ...
}
```

Dark mode is included automatically (respects the visitor's OS setting) with a
toggle in the top-right. Fonts are Space Grotesk + Inter, loaded from Google Fonts.

## 👀 Preview locally

Just open `index.html` in a browser. For nicer local behavior you can run a tiny
static server:

```bash
# Python (already on most machines)
python -m http.server 8000
# then visit http://localhost:8000
```

## 🚀 Deploy (free)

Any static host works. Easiest options:

- **Netlify** — drag the whole folder onto https://app.netlify.com/drop
- **Vercel** — `vercel` in this folder, or import the git repo
- **GitHub Pages** — push to GitHub, enable Pages on the `main` branch

No build step, no dependencies. What you see locally is what ships.

---

Built as a starting point — swap in real content and it's ready to share. 💜
