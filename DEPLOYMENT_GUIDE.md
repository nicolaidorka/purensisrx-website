# PurensisRX Website - Quick Deployment Guide

## 🎯 Recommended: Deploy with Netlify (5 minutes)

### Why Netlify?
- ✅ Free hosting with custom domains
- ✅ Automatic HTTPS/SSL
- ✅ Continuous deployment from Git
- ✅ Easy to use interface
- ✅ Great performance with CDN

### Step-by-Step Deployment

#### Method 1: Drag & Drop (Easiest - 2 minutes)

1. **Go to [Netlify](https://www.netlify.com/)**
   - Sign up for free account

2. **Drag & Drop Deployment:**
   - Click on "Sites" in the top menu
   - Scroll down to "Want to deploy a new site without connecting to Git?"
   - **Drag the entire `purensisRX-website` folder** onto the upload area
   - Wait 30 seconds for deployment

3. **Your site is live!**
   - You'll get a URL like: `https://random-name-12345.netlify.app`
   - Click on it to view your website

4. **Custom Domain (Optional):**
   - Click "Domain settings"
   - Click "Add custom domain"
   - Follow the DNS configuration instructions

#### Method 2: Git Deployment (Recommended for updates)

1. **Create GitHub Repository:**
   ```bash
   cd purensisRX-website
   git init
   git add .
   git commit -m "Initial commit - PurensisRX website"
   ```

2. **Push to GitHub:**
   - Create a new repository on GitHub: https://github.com/new
   - Name it: `purensisrx-website`
   - Then run:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/purensisrx-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Netlify:**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Authorize Netlify to access your GitHub
   - Select your `purensisrx-website` repository
   - Click "Deploy site"

4. **Automatic Updates:**
   - Now, whenever you push to GitHub, Netlify auto-deploys!
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```

---

## 🌐 Alternative: GitHub Pages (Free)

### Quick Setup

1. **Push to GitHub** (if you haven't already):
   ```bash
   cd purensisRX-website
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/purensisrx-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository settings
   - Click "Pages" in left sidebar
   - Under "Source", select "main" branch
   - Click "Save"

3. **Access your site:**
   - URL: `https://YOUR_USERNAME.github.io/purensisrx-website/`
   - Takes 2-3 minutes to deploy

4. **Custom Domain:**
   - Add file named `CNAME` with your domain:
     ```
     www.purensisrx.com
     ```
   - Configure DNS at your domain registrar:
     ```
     Type: CNAME
     Name: www
     Value: YOUR_USERNAME.github.io
     ```

---

## 🚀 Alternative: Vercel (Modern & Fast)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd purensisRX-website
   vercel
   ```

3. **Follow prompts:**
   - Login to Vercel
   - Configure project
   - Deploy!

4. **Production:**
   ```bash
   vercel --prod
   ```

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] **Replace placeholder content**
  - Add real images to `images/` folder
  - Replace SVG placeholders with actual screenshots
  - Update contact email addresses

- [ ] **Add your branding**
  - Add logo images
  - Customize color scheme in `css/styles.css`
  - Update company information in footer

- [ ] **Configure authentication**
  - Update `js/platform.js` with your API endpoint
  - Set up backend authentication service
  - Test login functionality

- [ ] **SEO optimization**
  - Add meta descriptions
  - Add Open Graph images
  - Create sitemap.xml

- [ ] **Test thoroughly**
  - Check all links work
  - Test on mobile devices
  - Test in different browsers
  - Verify form submissions

---

## 🔧 Post-Deployment Configuration

### 1. Add Custom Domain

**On Netlify:**
1. Go to Site settings → Domain management
2. Add custom domain (e.g., `www.purensisrx.com`)
3. Configure DNS records at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

**On GitHub Pages:**
1. Add `CNAME` file to repository root
2. Configure DNS at domain registrar
3. Wait for DNS propagation (up to 48 hours)

### 2. Enable HTTPS

- **Netlify/Vercel:** Automatic (free SSL certificate)
- **GitHub Pages:** Automatic for custom domains
- **Traditional hosting:** Get Let's Encrypt certificate or use cPanel SSL

### 3. Set up Analytics

**Google Analytics:**
1. Create account at https://analytics.google.com
2. Get tracking ID
3. Add to all HTML pages before `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### 4. Configure Contact Form

**Using Formspree (easiest):**
1. Sign up at https://formspree.io
2. Create new form
3. Get form endpoint
4. Update contact form action:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## 🔗 Domain Setup Guide

### Buying a Domain

**Recommended Registrars:**
- **Namecheap**: https://www.namecheap.com (cheap, good UI)
- **Google Domains**: https://domains.google (simple, reliable)
- **Cloudflare**: https://www.cloudflare.com/products/registrar/ (at-cost pricing)

**Suggested domains:**
- `purensisrx.com`
- `purepath.bio`
- `purensis.io`

### DNS Configuration

After purchasing domain, configure DNS:

**For Netlify:**
```
Type: CNAME
Name: www
Value: your-site.netlify.app

Type: A (optional, for apex domain)
Name: @
Value: 75.2.60.5
```

**For GitHub Pages:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io

Type: A (for apex domain)
Name: @
Values:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
```

**DNS Propagation:** Can take 24-48 hours worldwide

---

## 🧪 Testing Your Deployment

### Before Going Live:

1. **Test all pages:**
   ```
   ✓ Landing page (index.html)
   ✓ Technology page
   ✓ Platform page
   ✓ All navigation links
   ```

2. **Test responsiveness:**
   - Desktop (1920px)
   - Laptop (1366px)
   - Tablet (768px)
   - Mobile (375px)

3. **Test in browsers:**
   - Chrome
   - Firefox
   - Safari
   - Edge

4. **Check performance:**
   - Use Google PageSpeed Insights: https://pagespeed.web.dev/
   - Optimize images if needed

5. **Verify HTTPS:**
   - URL should show padlock icon
   - Certificate should be valid

---

## 🆘 Common Issues & Solutions

### Issue: "Site not found" after deployment
**Solution:** Wait 2-3 minutes for DNS propagation, clear browser cache

### Issue: CSS/JS not loading
**Solution:** Check file paths are correct, especially when using custom domain

### Issue: Images broken
**Solution:** Ensure images are uploaded to `images/` folder, check paths in HTML

### Issue: Login not working
**Solution:** Check browser console (F12) for errors, verify API endpoint

### Issue: Slow loading
**Solution:** Compress images, use Netlify/Vercel CDN, enable caching

---

## 📞 Need Help?

1. **Check the main README.md** for detailed documentation
2. **Netlify Docs:** https://docs.netlify.com/
3. **GitHub Pages Docs:** https://docs.github.com/en/pages
4. **Contact:** nicolaidorka on GitHub

---

## ✅ Success Checklist

After deployment:

- [ ] Website loads at custom domain
- [ ] HTTPS enabled (padlock icon)
- [ ] All pages accessible
- [ ] Mobile responsive
- [ ] Images loading correctly
- [ ] Forms working
- [ ] Analytics tracking
- [ ] Contact information updated
- [ ] Logo and branding in place

**Congratulations! Your PurensisRX website is live! 🎉**

---

## 📊 Monitoring & Maintenance

### Regular Updates

**Monthly:**
- Check for broken links
- Review analytics
- Update content as needed
- Check SSL certificate validity

**As Needed:**
- Update technology descriptions
- Add new screenshots
- Announce new features
- Update contact information

### Backup

Your site is backed up automatically if using:
- Git repository (GitHub)
- Netlify (keeps deployment history)
- Vercel (keeps deployment history)

**Manual backup:**
```bash
zip -r purensisrx-backup-$(date +%Y%m%d).zip purensisRX-website/
```

---

**Last Updated:** January 2025
**Maintained by:** PurensisRX Team
