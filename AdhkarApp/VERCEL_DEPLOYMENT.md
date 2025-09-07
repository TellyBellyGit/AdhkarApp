# Deploying Islamic Adhkar & Ruqyah to Vercel

This guide explains how to deploy your Cordova app as a web application on Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, or Bitbucket)
3. **Vercel CLI** (optional): Install with `npm i -g vercel`

## Deployment Methods

### Method 1: Vercel Dashboard (Recommended)

1. **Push to Git Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your Git repository
   - Select "AdhkarApp" as the root directory

3. **Configure Build Settings**:
   - **Framework Preset**: Other
   - **Root Directory**: `AdhkarApp`
   - **Build Command**: Leave empty (static files)
   - **Output Directory**: `www`
   - **Install Command**: Leave empty

4. **Deploy**: Click "Deploy" and wait for completion

### Method 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from AdhkarApp directory**:
   ```bash
   cd AdhkarApp
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N`
   - Project name: `islamic-adhkar-ruqyah`
   - Directory: `./` (current directory)

## Configuration Files

### vercel.json (Already Created)
The `vercel.json` file configures:
- Static file serving from `www` directory
- Clean URLs (removes .html extensions)
- Proper routing for single-page application

### Package.json Updates (Optional)
Add deployment scripts to your `package.json`:

```json
{
  "scripts": {
    "deploy": "vercel --prod",
    "deploy:preview": "vercel"
  }
}
```

## Important Notes

### 🔄 **Cordova vs Web Deployment**
- This deploys the **web version** of your app
- Cordova-specific features (device APIs) won't work
- Perfect for sharing your app as a Progressive Web App (PWA)

### 📱 **Mobile App Features**
- Remove or conditionally load Cordova plugins for web
- Consider adding PWA manifest for mobile-like experience
- Test thoroughly in browsers before deployment

### 🌐 **Domain & URLs**
- Vercel provides: `https://your-project-name.vercel.app`
- Custom domains available in Vercel dashboard
- Automatic HTTPS and global CDN

## Troubleshooting

### Build Errors
- Ensure `www` directory contains all necessary files
- Check that paths in HTML/CSS/JS are relative
- Verify no Cordova-specific code breaks in browser

### 404 Errors
- Check `vercel.json` routing configuration
- Ensure file paths match exactly (case-sensitive)
- Verify `index.html` exists in `www` directory

### Performance
- Optimize images in `www/img` directory
- Minify CSS/JS files if needed
- Enable compression (Vercel does this automatically)

## Post-Deployment

1. **Test Your App**: Visit the Vercel URL and test all features
2. **Set Custom Domain**: Configure in Vercel dashboard if needed
3. **Monitor**: Use Vercel Analytics to track usage
4. **Updates**: Push to Git to trigger automatic redeployments

## Quick Deploy Commands

```bash
# One-time setup
cd AdhkarApp
npm install -g vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

Your Islamic Adhkar & Ruqyah app will be live at: `https://islamic-adhkar-ruqyah.vercel.app`

---

**Need Help?** Check [Vercel Documentation](https://vercel.com/docs) or the troubleshooting section above.