# SEO and favicon launch checklist

Kemahiran.AI uses Next.js file-based icon metadata and generated page metadata.
The favicon is served from `/favicon.ico`; larger browser and device icons are
served from `/icon.png` and `/apple-icon.png`.

## Before launch approval

1. Set `NEXT_PUBLIC_SITE_URL=https://kemahiran.ai` in the production
   environment.
2. Keep `SITE_INDEXABLE=false` for local, preview and pre-launch deployments.
3. Keep resource records at their reviewed pre-publication status until their
   publication gates are complete.
4. Deploy and verify that the three icon URLs return `200` with the expected
   image content types.

## Enable search indexing

Only after product-owner launch approval and publication of the intended
resource records:

1. Set `SITE_INDEXABLE=true` on the production deployment only.
2. Deploy again.
3. Verify `/robots.txt` allows crawling and references
   `https://kemahiran.ai/sitemap.xml`.
4. Verify `/sitemap.xml` contains both locale versions of every published page
   and reciprocal `hreflang` links.
5. Inspect representative Malay and English pages to confirm a unique title,
   description, self-referencing canonical URL, locale alternates, social-card
   metadata and JSON-LD.

Preview deployments remain non-indexable when Vercel exposes
`VERCEL_ENV=preview`, even if the production flag is configured.

## Search engine follow-up

1. Add and verify the `kemahiran.ai` domain property in Google Search Console.
   DNS verification is an external production action and requires explicit
   authorisation.
2. Submit `https://kemahiran.ai/sitemap.xml`.
3. Use URL Inspection to test and request indexing for `/ms` and `/en`.
4. Monitor Page Indexing, Core Web Vitals and structured-data reports after
   Google recrawls the site.

Favicon and search-result updates are controlled by search engines and may take
days or weeks after deployment and recrawling. Their appearance is not
guaranteed even when the implementation meets published requirements.
