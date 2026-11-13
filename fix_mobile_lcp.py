import os
import re
from PIL import Image

ROOT_DIR = r"D:\SEO Project\SEO Website"

# 1. Resize & compress hero-homepage.webp (329.6 KiB -> ~32 KiB)
hero_path = os.path.join(ROOT_DIR, "assets", "images", "hero", "hero-homepage.webp")
if os.path.exists(hero_path):
    before_kb = os.path.getsize(hero_path) / 1024
    with Image.open(hero_path) as img:
        resized = img.resize((960, 536), Image.Resampling.LANCZOS)
        resized.save(hero_path, "WEBP", quality=80, method=6)
    after_kb = os.path.getsize(hero_path) / 1024
    print(f"[OK] hero-homepage.webp: {before_kb:.1f} KiB -> {after_kb:.1f} KiB")
else:
    print(f"[ERROR] File not found: {hero_path}")

# 2. Add hero preload hint in root index.html to eliminate resource load delay
root_index = os.path.join(ROOT_DIR, "index.html")
if os.path.exists(root_index):
    with open(root_index, "r", encoding="utf-8") as f:
        idx_html = f.read()
    preload_tag = '<link rel="preload" as="image" href="/assets/images/hero/hero-homepage.webp" fetchpriority="high">\n</head>'
    if 'rel="preload" as="image"' not in idx_html and "</head>" in idx_html:
        idx_html = idx_html.replace("</head>", preload_tag, 1)
        with open(root_index, "w", encoding="utf-8") as f:
            f.write(idx_html)
        print("[OK] Added hero image preload hint to index.html")

# 3. Defer GTM-KK4GDS9F across all HTML files to clear "Reduce unused JavaScript (75 KiB)"
OLD_GTM_PATTERN = re.compile(
    r'<!-- Google tag \(gtag\.js\) -->\s*<script async src="https://www\.googletagmanager\.com/gtm\.js\?id=GTM-KK4GDS9F"></script>\s*<script>[\s\S]*?</script>',
    re.MULTILINE
)

DEFERRED_GTM = """<!-- Google tag (gtag.js) - Deferred for Core Web Vitals -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  (function() {
    var loaded = false;
    function loadGTM() {
      if (loaded) return;
      loaded = true;
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-KK4GDS9F';
      document.head.appendChild(s);
    }
    window.addEventListener('load', function() { setTimeout(loadGTM, 2500); });
    ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(function(evt) {
      window.addEventListener(evt, loadGTM, { once: true, passive: true });
    });
  })();
</script>"""

gtm_updated = 0
for subdir, _, files in os.walk(ROOT_DIR):
    for file in files:
        if file.endswith(".html"):
            fp = os.path.join(subdir, file)
            with open(fp, "r", encoding="utf-8") as f:
                html = f.read()
            new_html, count = OLD_GTM_PATTERN.subn(DEFERRED_GTM, html)
            if count > 0:
                with open(fp, "w", encoding="utf-8") as f:
                    f.write(new_html)
                gtm_updated += 1

print(f"[OK] Deferred GTM script across {gtm_updated} HTML pages.")