import os

ROOT_DIR = r"D:\SEO Project\SEO Website"

SEO_SNIPPET = """
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtm.js?id=GTM-KK4GDS9F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
</script>

<!-- OpenGraph Metadata -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="ErgoStarter" />
<meta property="og:title" content="ErgoStarter: Budget Ergonomic Desk Setups in India" />
<meta property="og:description" content="Practical posture fixes, DIY workspace improvements, and budget ergonomic desk gear under ₹5,000 for Indian students and WFH beginners." />
<meta property="og:url" content="https://ergostarter.pro/" />

<!-- JSON-LD Structured Data (Organization & WebSite) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ergostarter.pro/#organization",
      "name": "ErgoStarter",
      "url": "https://ergostarter.pro/",
      "description": "Budget ergonomic workspace design and posture optimization guides for Indian students and remote workers."
    },
    {
      "@type": "WebSite",
      "@id": "https://ergostarter.pro/#website",
      "url": "https://ergostarter.pro/",
      "name": "ErgoStarter",
      "publisher": {
        "@id": "https://ergostarter.pro/#organization"
      }
    }
  ]
}
</script>
</head>"""

updated_count = 0
for subdir, _, files in os.walk(ROOT_DIR):
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(subdir, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            # Inject right before </head> on full pages only, avoiding duplicates
            if "</head>" in content and "GTM-KK4GDS9F" not in content:
                new_content = content.replace("</head>", SEO_SNIPPET, 1)
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated: {filepath}")
                updated_count += 1

print(f"\nDone! Injected Google Tag (GTM-KK4GDS9F) + Schema + OG tags into {updated_count} pages.")