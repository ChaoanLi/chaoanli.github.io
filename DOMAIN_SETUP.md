# Custom domain setup

The homepage uses GitHub Pages at `https://chaoanli.com/`.

1. In **Settings → Pages**, keep **GitHub Actions** as the publishing source.
2. Save `chaoanli.com` as **Custom domain** before changing DNS.
3. At the existing DNS provider, replace the root A record with these four values:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. Add `www CNAME chaoanli.github.io`.
5. After DNS validation and certificate issuance, enable **Enforce HTTPS**.

Keep the existing nameservers and unrelated email/TXT records. The separate
podcast repository must have its own Pages custom domain, `podcast.chaoanli.com`,
with `podcast CNAME chaoanli.github.io` at the DNS provider.

`public/CNAME` records the intended domain. With a custom Actions deployment,
the Pages settings control the domain; the file alone does not bind the domain.

Pushes to `main` deploy automatically. The build bundles Tailwind locally and
does not require the Tailwind CDN or Google Fonts to render the homepage.
The workflow copies the app entry to `404.html` so direct visits to React routes
can render. GitHub still returns HTTP 404 for these fallback requests.
