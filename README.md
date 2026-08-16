# Code Crafted - 5 Page Static Website

A professional, responsive 5-page static website built with HTML5, CSS3, and JavaScript.

## 📁 Project Structure

```
project/
├── index.html              # Home page
├── pages/
│   ├── about.html          # About us page
│   ├── services.html       # Services and pricing page
│   ├── blog.html           # Blog articles page
│   └── contact.html        # Contact and FAQ page
├── css/
│   └── style.css           # All styling
├── js/
│   └── script.js           # Interactivity and functionality
└── README.md               # This file
```

## 🌐 Pages Included

### 1. **Home Page (index.html)**
- Hero section with call-to-action
- Features showcase with 3 feature cards
- Responsive navigation with mobile menu

### 2. **About Page (pages/about.html)**
- Company story and mission
- Core values section with 4 value items
- Team information

### 3. **Services Page (pages/services.html)**
- 6 service cards with icons and descriptions
- Pricing plans section (Starter, Professional, Enterprise)
- Call-to-action buttons

### 4. **Blog Page (pages/blog.html)**
- 6 blog article cards with dates
- Newsletter subscription form
- Blog categories with emoji icons

### 5. **Contact Page (pages/contact.html)**
- Contact information (address, phone, email, hours)
- Contact form with validation
- FAQ section with expandable items
- Map placeholder

## ✨ Features

### Interactive Elements
- **Mobile-responsive navigation** with hamburger menu
- **Smooth scroll animations** for better UX
- **Form validation** for contact and newsletter forms
- **Notification system** for form submissions
- **Scroll-to-top button** that appears on scroll
- **Keyboard shortcuts** (H for Home, ? for Help)

### Design Features
- **Modern gradient backgrounds** for visual appeal
- **Responsive grid layouts** that adapt to all screen sizes
- **Hover effects** on cards and buttons
- **Smooth transitions and animations**
- **Professional color scheme** (blues, purples, and grays)
- **Consistent styling** across all pages

### Responsive Design
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Extra small devices (< 480px)

## 🚀 Getting Started

### Installation
No installation required! This is a static website.

### Running the Website

#### Option 1: Open in Browser Directly
1. Open any of the HTML files in your web browser
2. Start with `index.html` for the home page

#### Option 2: Use a Local Server (Recommended)
1. **Python 3:**
   ```bash
   python -m http.server 8000
   ```

2. **Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```

3. **Node.js (using http-server):**
   ```bash
   npx http-server
   ```

4. **VS Code Live Server:**
   - Install the Live Server extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

Then open your browser and navigate to:
- `http://localhost:8000` (or the port shown)

## 📝 Customization Guide

### Change Website Title/Logo
Edit the navigation logo in all HTML files:
```html
<a href="index.html" class="logo">MyWebsite</a>
```

### Change Colors
Edit the primary color in `css/style.css`:
- Search for `#3498db` (primary blue) and replace with your color
- Search for `#667eea` and `#764ba2` for gradient colors

### Add Your Content
1. Update text in each HTML file
2. Replace placeholder emails/phone numbers in contact page
3. Add your business hours and address
4. Update social media links in footer

### Add Images
1. Create an `images/` folder
2. Add your images there
3. Update the HTML to reference the images:
```html
<img src="images/your-image.jpg" alt="Description">
```

## 🎨 CSS Customization

The CSS file is organized into sections:
- General Styles
- Navigation
- Hero Section
- Buttons
- Feature Sections
- Page-specific styles
- Footer
- Responsive Design

Each section has clear comments for easy navigation and modification.

## 📱 JavaScript Features

The `script.js` file includes:
- Mobile menu toggle functionality
- Smooth scroll behavior
- Form validation and handling
- Notification system
- Scroll-to-top button
- Page load animations
- Keyboard shortcuts
- Utility functions

## 🔧 Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance Tips

1. **Optimize images:** Compress images before adding to site
2. **Minify CSS/JS:** For production, minify the files
3. **Lazy loading:** Add lazy loading for images if you have many
4. **Caching:** Set up proper caching headers on server

## 🚀 Deployment

To deploy this website:

### Option 1: Netlify
1. Drag and drop the project folder to [netlify.com](https://netlify.com)

### Option 2: GitHub Pages
1. Create a GitHub repository
2. Push the files to the repo
3. Enable GitHub Pages in settings

### Option 3: Traditional Hosting
1. Upload files to your web hosting via FTP
2. Make sure `index.html` is in the root directory

## 📖 File Sizes

- CSS: ~30KB (compressed)
- JavaScript: ~8KB (compressed)
- Total HTML: ~20KB

## ✅ Checklist for Customization

- [x] Update all instances with "Code Crafted"
- [ ] Change the logo and branding
- [ ] Update contact information
- [ ] Add your services/products
- [ ] Update pricing if applicable
- [ ] Add your blog posts
- [ ] Replace social media links
- [ ] Test all forms
- [ ] Test on mobile devices
- [ ] Deploy to production

## 📧 Contact Form Note

The current form shows a notification but doesn't send emails. To send emails, you'll need to:
1. Set up a backend service (Node.js, Python Flask, etc.)
2. Use a third-party service like Formspree, Netlify Forms, or EmailJS
3. Update the form handling in `script.js`

## 🎓 Learning Resources

- HTML: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- CSS: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- JavaScript: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📄 License

This template is free to use and modify for personal and commercial projects.

## 🤝 Support

For questions or issues:
1. Check the comments in the code
2. Review the customization guide above
3. Test in different browsers
4. Check browser console for errors (F12)

---

**Created:** 2026-08-15
**Last Updated:** 2026-08-15

Enjoy your new website! 🎉
