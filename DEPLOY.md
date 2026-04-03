# Deploy

## Recommended deployment path

This site is configured for **GitHub Pages via GitHub Actions**.

## Repo assumptions

- repo name: `practical-ai-workflows-site`
- Pages URL: `https://751zaid-rgb.github.io/practical-ai-workflows-site/`

If you rename the repo, update:
- `astro.config.mjs`
- `src/data/site.ts`

## First-time GitHub Pages setup

1. Push the repo to GitHub.
2. Open the GitHub repo.
3. Go to **Settings -> Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Push to `main` or run the deploy workflow manually.

## Contact form launch step

The current build uses a static-safe email fallback in the contact form so it still works on GitHub Pages without a backend.

For a cleaner launch form:
1. Create a Formspree or similar static form endpoint.
2. Update `src/data/site.ts`:
   - `formMode: 'post'`
   - `formAction: 'https://formspree.io/f/your-endpoint'`
3. Rebuild and redeploy.

## Local build

```bash
npm install
npm run build
```

## Local preview

```bash
npm run preview
```
