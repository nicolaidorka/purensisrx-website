# PurensisRX Website

A professional website for PurensisRX (formerly Unistream/TissueLabs) featuring the PurePath annotation platform.

## 🌐 Website Structure

```
purensisRX-website/
├── index.html              # Landing page
├── pages/
│   ├── technology.html     # Technology explanation
│   └── platform.html       # PurePath platform with login
├── css/
│   ├── styles.css          # Main stylesheet
│   ├── technology.css      # Technology page styles
│   └── platform.css        # Platform page styles
├── js/
│   ├── main.js            # Main JavaScript
│   └── platform.js        # Platform/login functionality
├── images/                # Image assets (add your own)
└── README.md             # This file
```

## 🚀 Quick Start

### Local Development

1. **Open the website locally:**
   ```bash
   cd purensisRX-website

   # Option 1: Python HTTP server
   python3 -m http.server 8000

   # Option 2: Node.js HTTP server
   npx http-server -p 8000
   ```

2. **Open in browser:**
   Navigate to `http://localhost:8000`

## 📦 Deployment Options

### Option 1: GitHub Pages (Free & Easy)

**Perfect for static websites like this one!**

1. **Create a GitHub repository:**
   ```bash
   cd purensisRX-website
   git init
   git add .
   git commit -m "Initial PurensisRX website"
   ```

2. **Push to GitHub:**
   ```bash
   # Create a new repository on GitHub first
   git remote add origin https://github.com/YOUR_USERNAME/purensisrx-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/purensisrx-website/`

4. **Custom Domain (Optional):**
   - In GitHub Pages settings, add your custom domain (e.g., `www.purensisrx.com`)
   - Update your domain DNS settings:
     ```
     Type: CNAME
     Name: www
     Value: YOUR_USERNAME.github.io
     ```

### Option 2: Netlify (Recommended for Production)

**Free tier with custom domains and HTTPS!**

1. **Sign up at [Netlify](https://www.netlify.com)**

2. **Deploy via Git:**
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `.`
   - Click "Deploy site"

3. **Or Deploy via Drag & Drop:**
   - Drag the `purensisRX-website` folder to Netlify
   - Instant deployment!

4. **Custom Domain:**
   - Go to Site settings → Domain management
   - Add custom domain
   - Follow DNS configuration instructions

**Netlify URL:** `https://your-site-name.netlify.app`

### Option 3: Vercel

**Great performance and free SSL!**

1. **Sign up at [Vercel](https://vercel.com)**

2. **Deploy:**
   ```bash
   npm install -g vercel
   cd purensisRX-website
   vercel
   ```

3. **Follow the prompts:**
   - Link to GitHub (optional)
   - Configure project settings
   - Deploy!

### Option 4: Traditional Web Hosting

**For cPanel, Hostinger, Bluehost, etc.**

1. **Purchase hosting and domain**

2. **Upload files via FTP:**
   - Use FileZilla or similar FTP client
   - Connect to your hosting server
   - Upload all files to `public_html` or `www` directory

3. **Configure domain:**
   - Point domain to hosting server
   - Wait for DNS propagation (up to 48 hours)

### Option 5: AWS S3 + CloudFront

**For enterprise-grade hosting**

1. **Create S3 bucket:**
   ```bash
   aws s3 mb s3://purensisrx-website
   ```

2. **Upload files:**
   ```bash
   aws s3 sync . s3://purensisrx-website --acl public-read
   ```

3. **Enable static website hosting:**
   - Go to S3 bucket → Properties → Static website hosting
   - Enable and set index.html as index document

4. **Create CloudFront distribution** for HTTPS and CDN

## 🔧 Configuration

### Connecting to Your Annotation Platform

Update `js/platform.js` to connect the login form to your actual annotation platform:

```javascript
// In authenticateUser() function, replace the TODO with:
fetch('https://your-api-endpoint.com/auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username: username,
        password: password,
        remember: remember
    })
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        // Store token
        localStorage.setItem('auth_token', data.token);

        // Redirect to annotation platform
        window.location.href = 'https://yourplatform.com/annotation';
    }
})
```

### Adding Your Logo

1. Add your logo image to `images/` folder:
   ```
   images/logo.png
   images/logo-white.png
   ```

2. Update the navigation in all HTML files:
   ```html
   <a href="index.html" class="logo">
       <img src="images/logo.png" alt="PurensisRX Logo">
   </a>
   ```

### Adding Screenshots

1. Add platform screenshots to `images/` folder:
   ```
   images/platform-screenshot.png
   images/segmentation-demo.png
   images/annotation-demo.png
   ```

2. Replace SVG placeholders in HTML:
   ```html
   <!-- Replace this: -->
   <div class="placeholder-box">
       <svg>...</svg>
   </div>

   <!-- With this: -->
   <img src="../images/platform-screenshot.png" alt="Platform Screenshot">
   ```

### Customizing Colors

Edit `css/styles.css` to change the color scheme:

```css
:root {
    --primary-color: #0066cc;      /* Your brand color */
    --secondary-color: #00cc99;    /* Accent color */
    --accent-color: #ff6b6b;       /* Highlights */
}
```

## 🔐 Authentication Setup

The login form is currently a placeholder. To make it functional:

### Option A: Backend API

Create a backend authentication service:

1. **Node.js + Express example:**
   ```javascript
   app.post('/api/auth/login', async (req, res) => {
       const { username, password } = req.body;

       // Verify credentials
       const user = await authenticateUser(username, password);

       if (user) {
           const token = generateJWT(user);
           res.json({ success: true, token, redirectUrl: '/platform' });
       } else {
           res.status(401).json({ success: false, message: 'Invalid credentials' });
       }
   });
   ```

2. **Update `js/platform.js` to call your API**

### Option B: Firebase Authentication

1. **Add Firebase to your project:**
   ```html
   <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"></script>
   <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js"></script>
   ```

2. **Initialize Firebase:**
   ```javascript
   const firebaseConfig = { /* your config */ };
   firebase.initializeApp(firebaseConfig);
   ```

3. **Update login function:**
   ```javascript
   firebase.auth().signInWithEmailAndPassword(username, password)
       .then((userCredential) => {
           window.location.href = '/annotation-platform';
       });
   ```

### Option C: Auth0

1. **Sign up for Auth0**
2. **Install Auth0 SDK**
3. **Configure login redirect**

## 📧 Contact Form Setup

To make the contact form functional, you can use:

1. **Formspree** (easiest):
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **EmailJS** (free email service):
   ```javascript
   emailjs.send('service_id', 'template_id', {
       from_name: name,
       message: message,
       reply_to: email
   });
   ```

3. **Your own backend API**

## 🎨 Customization Tips

### Adding New Pages

1. Create new HTML file in `pages/` directory
2. Copy header/footer from existing page
3. Add link to navigation menu
4. Create corresponding CSS file if needed

### SEO Optimization

Add to `<head>` section of each page:

```html
<meta name="description" content="PurensisRX - Precision tissue isolation platform">
<meta name="keywords" content="tissue isolation, laser microdissection, AI segmentation">
<meta property="og:title" content="PurensisRX">
<meta property="og:description" content="Automated tissue isolation platform">
<meta property="og:image" content="images/og-image.png">
```

### Analytics

Add Google Analytics:

```html
<!-- Before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Styles not loading
- Check file paths are correct
- Ensure CSS files are in `css/` folder
- Clear browser cache

### Images not showing
- Check image paths
- Ensure images are in `images/` folder
- Check file extensions match

### Login not working
- Check console for errors (F12 → Console)
- Verify API endpoint is correct
- Check CORS settings on backend

## 📱 Mobile Responsive

The website is fully responsive and works on:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🔒 Security Best Practices

1. **Always use HTTPS** (automatically provided by Netlify/Vercel/GitHub Pages)
2. **Never store passwords** in frontend code
3. **Use secure authentication** tokens (JWT)
4. **Validate all inputs** on backend
5. **Enable CORS** properly on your API

## 📚 Resources

- **Hosting Providers:**
  - [GitHub Pages](https://pages.github.com/) - Free
  - [Netlify](https://www.netlify.com/) - Free tier
  - [Vercel](https://vercel.com/) - Free tier
  - [AWS Amplify](https://aws.amazon.com/amplify/) - Pay as you go

- **Domain Registration:**
  - [Namecheap](https://www.namecheap.com/)
  - [Google Domains](https://domains.google/)
  - [Cloudflare](https://www.cloudflare.com/products/registrar/)

- **Learning Resources:**
  - [MDN Web Docs](https://developer.mozilla.org/)
  - [Web.dev](https://web.dev/)

## 💡 Next Steps

1. **Add real images** to replace SVG placeholders
2. **Configure authentication** backend
3. **Set up custom domain**
4. **Add SSL certificate** (automatic with most hosts)
5. **Connect to annotation platform**
6. **Test on multiple devices**
7. **Deploy to production!**

## 📞 Support

For questions or issues:
- Email: contact@purensisrx.com
- GitHub: https://github.com/nicolaidorka

---

Built for PurensisRX | © 2025
