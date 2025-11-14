# My Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Quick Setup for Netlify Drop

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation Steps

1. **Create project folder and navigate to it:**
```bash
mkdir my-portfolio
cd my-portfolio
```

2. **Copy all the files** into your project folder with this structure:
```
my-portfolio/
├── public/
│   └── _redirects
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── README.md
```

3. **Install dependencies:**
```bash
npm install
```

4. **Run development server (optional - to preview):**
```bash
npm run dev
```
Then open http://localhost:5173 in your browser.

5. **Build for production:**
```bash
npm run build
```
This creates a `dist` folder with your production-ready files.

6. **Deploy to Netlify:**
- Go to https://app.netlify.com/drop
- Drag and drop the entire `dist` folder
- Wait 30 seconds
- Your site is live! 🎉

## 📝 Customization

### Update Personal Information

In `src/App.jsx`, find and replace:

1. **Your Name and Title** (around line 130):
```javascript
<h1>Your Name</h1>
<h2>Full Stack Developer</h2>
```

2. **Profile Initials** (around line 125):
```javascript
<div className="...">YN</div>  // Change to your initials
```

3. **About Me Text** (around line 185):
```javascript
<p>I'm a passionate full-stack developer...</p>
```

4. **Social Links** (around line 155):
```javascript
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourusername">
<a href="mailto:your.email@example.com">
```

5. **Projects** (around line 28):
Replace the projects array with your own projects.

6. **Skills** (around line 52):
Update the skills array with your technologies.

7. **Footer** (around line 320):
```javascript
<p>© 2024 Your Name...</p>
```

### Change Colors

Find and replace these color classes throughout `src/App.jsx`:
- `purple-400` → your preferred color
- `purple-600` → your accent color
- `pink-400` → your gradient color

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📱 Mobile Responsive

This portfolio is fully optimized for mobile devices with:
- Responsive navigation menu
- Touch-friendly buttons
- Optimized layouts for all screen sizes
- Smooth animations

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Free to use for personal and commercial projects.

## 💡 Tips

- Optimize images before adding them
- Keep project descriptions concise
- Test on multiple devices
- Update contact form to use real email service (Netlify Forms, EmailJS, etc.)

## 🆘 Need Help?

If you encounter any issues:
1. Make sure Node.js is installed: `node --version`
2. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
3. Check that all files are in the correct folders
4. Ensure you're using Node.js version 16 or higher

---

Built with ❤️ using React, Vite, and Tailwind CSS