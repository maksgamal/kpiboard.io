# KPI Board Website

This is the KPI Board website project with all files properly organized and linked.

## Project Structure

```
kpiboard/
├── index.html          # Main HTML file (homepage)
├── blogs.html          # Blogs listing page
├── the-retail-ecommerce-metrics-that-actually-drive-profit.html
├── struggling-with-scattered-reports-save-20-hours-a-month-with-smarter-bi-dashboards.html
├── the-hidden-leak-how-one-e-commerce-brand-discovered-a-120k-problem-using-data.html
├── how-one-digital-agency-stopped-drowning-in-spreadsheets-and-started-scaling-smarter.html
└── thankyou.html          # Thank you page
├── css/                # CSS stylesheets
│   ├── kpi-board-io.webflow.shared.9853a9406.css
│   ├── splide.min.css
│   ├── swiper-bundle.min.css
│   └── google-fonts.css
├── js/                 # JavaScript files
│   ├── webflow.29c1b644.14fee8983ef199cf.js
│   ├── webflow.ba30bb47.96f6178d36e2a168.js
│   ├── webflow.schunk.02e3e65efd8387ec.js
│   ├── webflow.schunk.36b8fb49256177c8.js
│   ├── webflow.schunk.82f44582d86d1ea9.js
│   ├── clarity_script-0.5.6.js
│   ├── nq4v4hjm-1.1.1.js
│   ├── splide.min.js
│   ├── swiper-bundle.min.js
│   ├── jquery-3.5.1.min.dc5e7f18c8.js
│   └── cmsload.js
├── assets/             # Images and other assets (if needed)
└── fonts/              # Font files (if needed)
```

## How to Launch

### Option 1: Using Local Web Server (Recommended)

1. **Using Python** (if installed):
   ```powershell
   python -m http.server 8080
   ```
   Then open your browser and go to: `http://localhost:8080`

2. **Using the provided scripts**:
   - Double-click `start-server.bat` (Windows)
   - Or run `.\start-server.ps1` in PowerShell

### Option 2: Direct File Opening

Simply open the HTML files in your web browser:
- Double-click `index.html` for the homepage
- Double-click `blogs.html` for the blogs listing page
- Open any of the 4 blog post HTML files to view individual blog articles
- Or use: `Start-Process <filename>.html` in PowerShell
- Or drag and drop the files into your browser

**Note:** Using a local web server is recommended to avoid CORS issues and ensure all resources load correctly.

## What Was Fixed

1. ✅ Created clean project structure with organized folders
2. ✅ Updated all CSS file references to use local paths (both pages)
3. ✅ Updated all JavaScript file references to use local paths (both pages)
4. ✅ Added Webflow JS files that were missing
5. ✅ Set up `index.html` (homepage), `blogs.html` (blogs listing), 4 blog post pages, and `thankyou.html`
6. ✅ All files are now properly linked and working

## Notes

- External resources like Google Fonts, analytics scripts (Google Analytics, Facebook Pixel, etc.) still load from their CDNs, which is normal and expected
- Images may still reference external URLs - if you want to use local images, you'll need to copy them to the `assets/` folder and update the references in `index.html` and `blogs.html`
- The website should now work offline for the main functionality (excluding external analytics and fonts)

## Browser Compatibility

The website should work in all modern browsers:
- Chrome
- Firefox
- Edge
- Safari

