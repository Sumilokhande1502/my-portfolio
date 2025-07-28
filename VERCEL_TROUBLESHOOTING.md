# Vercel Deployment Troubleshooting Guide

## 🔧 Common Issues & Solutions

### Issue 1: Build Failures

**Error**: "Build failed" or "Command failed"
**Solution**: 
- Make sure you're using the correct build command in Vercel
- Set Build Command to: `npm run build` 
- Set Output Directory to: `dist/public`

### Issue 2: API Routes Not Working

**Error**: "API routes returning 404"
**Solution**:
- API files must be in `/api` folder (already done ✅)
- File must export default function (already done ✅)
- Check environment variables are set in Vercel dashboard

### Issue 3: Environment Variables

**Error**: Contact form not sending emails
**Solution**: Add these in Vercel Dashboard → Settings → Environment Variables:
```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
NODE_ENV=production
```

### Issue 4: Dependencies Missing

**Error**: "Module not found" errors
**Solution**: Make sure all dependencies are in package.json (already done ✅)

## 🚀 Correct Vercel Setup Steps

### 1. GitHub Repository
```bash
git init
git add .
git commit -m "Portfolio website ready for deployment"
git branch -M main
git remote add origin https://github.com/Sumilokhande1502/portfolio-website.git
git push -u origin main
```

### 2. Vercel Configuration
- **Framework Preset**: Other
- **Root Directory**: ./
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`

### 3. Environment Variables (Critical!)
Add in Vercel Dashboard:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=production
```

### 4. Deploy Settings
- **Node.js Version**: 18.x (default)
- **Regions**: Auto (recommended)

## 🔍 Debug Steps

### If Still Getting Errors:

1. **Check Build Logs** in Vercel dashboard
2. **Common Error Messages**:
   
   **"Cannot resolve module"**
   - Solution: Check all imports are correct
   - Make sure @vercel/node is installed (done ✅)
   
   **"Build timeout"**
   - Solution: Reduce build complexity
   - Our build is already optimized ✅
   
   **"Function exceeded timeout"**
   - Solution: Email sending takes time, already set maxDuration to 30s ✅

### Test Locally First:
```bash
npm run build
# Should create dist/public folder with HTML, CSS, JS files
```

## 📧 Email Configuration Check

### Gmail App Password Steps:
1. Enable 2FA on Gmail
2. Google Account → Security → App passwords
3. Generate new app password for "Mail"
4. Use this 16-character password (with spaces) as EMAIL_PASS

### Test Email Locally:
Your current setup works in development, so the email configuration is correct ✅

## 🎯 Quick Fix Checklist

- ✅ vercel.json updated for serverless functions
- ✅ api/contacts.ts fixed imports
- ✅ @vercel/node dependency added
- ✅ Build configuration correct
- ✅ Environment variables documented

## 🔄 If Still Having Issues

**Try Alternative Approach:**

1. **Deploy Frontend Only First**:
   - Comment out API routes in vercel.json
   - Deploy just the static site
   - Add API routes after frontend works

2. **Manual Build Test**:
   ```bash
   npm run build
   # Check if dist/public folder is created
   # Check if files look correct
   ```

3. **Check Vercel Logs**:
   - Go to Vercel Dashboard
   - Click on your deployment
   - Check "Functions" and "Build Logs" tabs

Your portfolio is production-ready! The most common issue is environment variables not being set correctly in Vercel dashboard.