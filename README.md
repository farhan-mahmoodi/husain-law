# Husain Law LLC — website

A static, dependency-free website for Husain Law LLC, live at https://www.husain.law and hosted on Netlify.

- `index.html` — home: statement, numbered sections for the firm, practice areas, the attorney, how the firm works, common questions, and contact
- `practice-areas.html` — Tax Law & Controversy, Personal Injury, Civil Litigation, Commercial Transactions (anchor links: `#tax`, `#personal-injury`, `#civil-litigation`, `#commercial`)
- `attorney.html` — Daniyal Husain, Esq. profile
- `contact.html` — contact details, consultation form, link to the existing Google intake form, FAQ
- `assets/css/styles.css` — all styling; brand colours are the tokens at the top of the file
- `assets/js/main.js` — menu on small screens, practice-area section navigation, form handling
- `assets/img/` — logo (keyed from the original artwork), mark, headshot, favicon, social-share image
- `_redirects` — Netlify redirect rules sending the old Google Sites addresses (`/home`, `/contact-us`, `/attorney-profile`) to the new pages
- `404.html` — the page shown for an address that does not exist
- `sitemap.xml` and `robots.txt` — for Google Search Console

Brand colours are unchanged from the current site: deep green `#0a332a` / `#072a22` and gold `#c29b57` / `#c5a059`.
Fonts: EB Garamond (headings and long text) and Libre Franklin (navigation and labels), loaded from Google Fonts.

- `netlify.toml` — Netlify settings (publish directory is the repository root, no build step)

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Publish

The site is deployed by Netlify from this repository. Every push to the main branch goes live at https://www.husain.law within a minute or two. DNS for the domain is managed at GoDaddy and points at Netlify.

## The contact form

The form on `contact.html` has no server behind it. On submit it opens the visitor's email app with a pre-filled message to `daniyal@husain.law`. The page also links to the firm's existing Google consultation form.

To receive submissions directly instead, give the `<form>` an `action` from a form service (Formspree, Basin, Netlify Forms, Cloudflare Pages Functions) and remove the `submit` handler in `assets/js/main.js`.

## Editing content

Each page is a standalone HTML file; edit the text in place. The header and footer are repeated in every page, so a change to the navigation, address or disclaimer is made in all four files.
