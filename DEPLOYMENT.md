# Vercel Deployment Guide

Your portfolio is now **ready for Vercel deployment**! Follow these steps to deploy your project.

## 📋 What's Been Prepared

✅ **vercel.json** - Vercel configuration file
✅ **api/contacts.ts** - Serverless function for contact form
✅ **README.md** - Complete project documentation
✅ **Existing build setup** - Already configured in package.json

## 🚀 Deployment Steps

### 1. Push to GitHub

1. **Create a new repository** on GitHub (github.com/Sumilokhande1502)
2. **Initialize git** in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Modern portfolio website"
   git branch -M main
   git remote add origin https://github.com/Sumilokhande1502/your-repo-name.git
   git push -u origin main
   ```

### 2. Deploy to Vercel

1. **Go to vercel.com** and sign up/login
2. **Import your GitHub repository**
3. **Configure the project**:
   - Framework Preset: **Other**
   - Root Directory: **.**
   - Build Command: `npm run build` (will use existing script)
   - Output Directory: `dist/public`

### 3. Add Environment Variables

In Vercel dashboard, add these environment variables:

```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-specific-password
NODE_ENV=production
```

**Important**: Use your Gmail app-specific password, not your regular password.

### 4. Deploy!

Click **Deploy** and Vercel will:
- ✅ Build your frontend with Vite
- ✅ Create serverless functions for your API
- ✅ Deploy everything with HTTPS
- ✅ Provide you with a `.vercel.app` URL

## 📧 Gmail Setup for Contact Form

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Select "Mail" and generate password
3. **Use this app password** as EMAIL_PASS in Vercel

## 🔧 Project Configuration

### Current Build Setup
- **Frontend**: `vite build` → `dist/public/`
- **Backend**: Serverless functions in `api/` folder
- **Contact Form**: Works via `/api/contacts` endpoint

### Vercel.json Configuration
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    },
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist/public" }
    }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/server/index.ts" },
    { "src": "/(.*)", "dest": "/dist/public/$1" }
  ]
}
```

## ✨ Features That Will Work

- ✅ **Contact Form** - Real email sending via Gmail
- ✅ **Responsive Design** - All screen sizes
- ✅ **Fast Loading** - Optimized builds
- ✅ **Professional UI** - All animations and effects
- ✅ **Dark/Light Theme** - Theme switching
- ✅ **GitHub Integration** - Links to your repositories

## 🌐 After Deployment

1. **Test the contact form** with your own email
2. **Check all navigation links** work properly
3. **Verify responsive design** on mobile devices
4. **Test theme switching** functionality
5. **Add custom domain** (optional, in Vercel dashboard)

## 📝 Optional Package.json Update

If you want to add a specific Vercel build command, you can manually add this to your package.json scripts section:

```json
"vercel-build": "vite build"
```

But the current setup will work perfectly with the existing build script.

## 🎉 Your Portfolio Will Be Live!

Once deployed, you'll have:
- **Professional URL**: `https://your-portfolio.vercel.app`
- **Automatic HTTPS**: Secure connection
- **Global CDN**: Fast loading worldwide
- **Automatic Deployments**: Updates when you push to GitHub

Ready to deploy your amazing portfolio! 🚀