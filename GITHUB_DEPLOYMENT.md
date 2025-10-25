# Deploy PurensisRX Website to GitHub Pages

## ✅ What's Been Done

- ✅ Git repository initialized
- ✅ All website files committed
- ✅ Main branch created

## 🚀 Next Steps (Follow These)

### Step 1: Create GitHub Repository

1. **Go to GitHub:** https://github.com/new

2. **Create new repository with these settings:**
   ```
   Repository name: purensisrx-website
   Description: Official website for PurensisRX - Precision Tissue Isolation Platform
   Visibility: Public
   ❌ Do NOT initialize with README (we already have files)
   ❌ Do NOT add .gitignore
   ❌ Do NOT add license
   ```

3. **Click "Create repository"**

### Step 2: Push Your Code to GitHub

Open terminal in the `purensisRX-website` folder and run:

```bash
# Add GitHub as remote (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/purensisrx-website.git

# Push to GitHub
git push -u origin main
```

**Example:**
```bash
# If your GitHub username is "nicolaidorka"
git remote add origin https://github.com/nicolaidorka/purensisrx-website.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. **Go to your repository on GitHub:**
   `https://github.com/YOUR_USERNAME/purensisrx-website`

2. **Click "Settings"** (top menu)

3. **Click "Pages"** (left sidebar)

4. **Under "Source":**
   - Branch: Select **main**
   - Folder: Select **/ (root)**

5. **Click "Save"**

6. **Wait 2-3 minutes** for deployment

7. **Your website will be live at:**
   ```
   https://YOUR_USERNAME.github.io/purensisrx-website/
   ```

### Step 4: Test Your Website

Visit your website URL and check:
- ✅ Landing page loads
- ✅ Technology page works
- ✅ Platform page loads
- ✅ Navigation works
- ✅ CSS styles applied
- ✅ Mobile responsive

## 🌐 Optional: Add Custom Domain

If you want `www.purensisrx.com` instead of `username.github.io/purensisrx-website`:

### 1. Buy Domain

Buy a domain from:
- **Namecheap:** https://www.namecheap.com
- **Google Domains:** https://domains.google.com
- **Cloudflare:** https://www.cloudflare.com/products/registrar/

Suggested domains:
- `purensisrx.com`
- `purepath.bio`
- `purensis.io`

### 2. Configure DNS

In your domain registrar's DNS settings, add these records:

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 3600
```

**For apex domain (optional):**
```
Type: A
Name: @
Values:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
TTL: 3600
```

### 3. Add Custom Domain to GitHub

1. Go to GitHub repository → Settings → Pages

2. Under "Custom domain", enter:
   ```
   www.purensisrx.com
   ```

3. Click "Save"

4. Wait for DNS check (can take up to 48 hours)

5. Once verified, check "Enforce HTTPS"

## 🔄 Making Updates

Whenever you want to update your website:

```bash
# Make your changes to HTML/CSS/JS files

# Add changes to git
git add .

# Commit changes
git commit -m "Update: describe what you changed"

# Push to GitHub (auto-deploys)
git push
```

GitHub Pages will automatically update your live site within 1-2 minutes!

## 📊 Monitoring

### Check Deployment Status

1. Go to your repository on GitHub
2. Click "Actions" tab
3. See deployment status for each push

### View Analytics

Add Google Analytics to track visitors:

1. Create account: https://analytics.google.com
2. Get tracking ID
3. Add to all HTML files before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Problem: "404 - Page not found"
**Solution:** Wait 2-3 minutes after enabling GitHub Pages

### Problem: "CSS not loading"
**Solution:**
1. Check GitHub Pages is enabled
2. Wait for deployment to complete
3. Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Problem: "Images not showing"
**Solution:**
1. Make sure images are in `images/` folder
2. Check image paths in HTML
3. Commit and push images to GitHub

### Problem: "Changes not appearing"
**Solution:**
1. Make sure you committed: `git commit -m "Your message"`
2. Make sure you pushed: `git push`
3. Check GitHub Actions for deployment status
4. Clear browser cache

## 📁 Adding Content

### Add Images/Screenshots

1. Create `images` folder:
   ```bash
   mkdir -p images
   ```

2. Add your images:
   ```
   images/
   ├── logo.png
   ├── platform-screenshot.png
   ├── technology-demo.png
   └── hero-background.jpg
   ```

3. Update HTML to use images:
   ```html
   <img src="images/platform-screenshot.png" alt="PurePath Platform">
   ```

4. Commit and push:
   ```bash
   git add images/
   git commit -m "Add images and screenshots"
   git push
   ```

### Update Content

Just edit the HTML files:
- `index.html` - Landing page
- `pages/technology.html` - Technology page
- `pages/platform.html` - Platform/login page

Then:
```bash
git add .
git commit -m "Update content"
git push
```

## 🔐 Connect to Real Authentication

To make the login actually work, update `js/platform.js`:

```javascript
// Replace the authenticateUser function with real API calls
function authenticateUser(username, password, remember) {
    fetch('https://your-api-endpoint.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, remember })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to your annotation platform
            window.location.href = 'https://purepath.yourplatform.com';
        }
    });
}
```

## ✅ Final Checklist

Before going live:

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Website loads correctly
- [ ] All links work
- [ ] Mobile responsive
- [ ] Images loading (if added)
- [ ] Contact email updated
- [ ] Logo added (if you have one)
- [ ] Custom domain configured (optional)
- [ ] HTTPS enabled
- [ ] Analytics added (optional)

## 📞 Quick Command Reference

```bash
# Check git status
git status

# See what branch you're on
git branch

# Add all changes
git add .

# Commit with message
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes
git pull

# View remote URL
git remote -v

# Start local server for testing
./serve.sh
# Or: python3 -m http.server 8000
```

## 🎉 You're Done!

Your PurensisRX website is now:
- ✅ Hosted on GitHub (free!)
- ✅ Automatically deployed when you push
- ✅ Has HTTPS enabled
- ✅ Accessible from anywhere
- ✅ Fast and reliable

**Next step:** Share your website URL with your team!

---

**Need Help?**
- GitHub Pages Docs: https://docs.github.com/en/pages
- GitHub Issues: Create an issue in your repository
- Email: contact@purensisrx.com

**Created:** January 2025
**Version:** 1.0
