# Modern Portfolio Website

A professional portfolio website built with React, TypeScript, and Express, showcasing 5+ years of frontend engineering experience.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, Express
- **Responsive Design**: Mobile-first approach with smooth animations
- **Interactive UI**: Scroll-triggered animations, theme switching, hover effects
- **Contact Form**: Real email integration with Gmail SMTP
- **Professional Sections**: About, Skills, Experience, Projects, Contact
- **Performance Optimized**: Fast loading with Vite build system

## 🛠️ Technologies Used

### Frontend
- React 18 with TypeScript
- Redux Toolkit for state management
- Tailwind CSS for styling
- Shadcn/ui component library
- Framer Motion for animations
- React Hook Form with Zod validation

### Backend
- Node.js with Express
- TypeScript for type safety
- Nodemailer for email functionality
- Zod for data validation

### Build & Development
- Vite for fast development and builds
- ESBuild for server bundling
- Hot Module Replacement (HMR)

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility libraries
│   │   └── store/          # Redux store
├── server/                 # Backend Express server
├── shared/                 # Shared types and schemas
├── api/                    # Vercel serverless functions
└── dist/                   # Built files
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect GitHub repository** to Vercel
2. **Add environment variables** in Vercel dashboard:
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-specific-password
   NODE_ENV=production
   ```
3. **Deploy** - Vercel will automatically build and deploy

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📧 Email Configuration

For the contact form to work, you need:

1. **Gmail account** with 2-factor authentication enabled
2. **App-specific password** generated from Google Account settings
3. **Environment variables** set in your deployment platform:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your app-specific password

## 🔧 Build Commands

- **Development**: `npm run dev` - Start development server
- **Build**: `npm run build` - Build for production
- **Start**: `npm start` - Start production server

## 📝 Customization

### Personal Information
Update personal details in `shared/constants.ts`:
- Name, email, phone, location
- Social media links
- Experience years
- Professional title

### Skills & Experience
Modify the data in respective component files:
- `client/src/components/Skills.tsx`
- `client/src/components/Experience.tsx`

### Styling & Theme
- Colors: `client/src/index.css`
- Components: `client/src/components/ui/`
- Animations: CSS custom properties and Tailwind classes

## 🌟 Key Features

- **Professional Loader**: Multi-colored spinning rings animation
- **Section Decorations**: Animated gradient underlines and dividers
- **Technology Icons**: Authentic brand logos with proper colors
- **Smooth Animations**: Scroll-triggered and hover effects
- **Dark/Light Mode**: Complete theme switching support
- **Form Validation**: Client and server-side validation
- **Email Templates**: Professional HTML email formatting

## 📱 Responsive Design

- **Mobile First**: Optimized for all screen sizes
- **Breakpoints**: Tailwind CSS responsive utilities
- **Navigation**: Collapsible mobile menu
- **Grid Layouts**: Adaptive card arrangements

## 🔒 Security

- **Data Validation**: Zod schemas on frontend and backend
- **Environment Variables**: Secure API key management
- **CORS**: Proper cross-origin resource sharing
- **Input Sanitization**: Protection against malicious inputs

## 📈 Performance

- **Fast Loading**: Vite's optimized build system
- **Code Splitting**: Automatic code splitting
- **Image Optimization**: Efficient asset handling
- **Caching**: Browser caching strategies

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and adapt for your own use.

## 📄 License

MIT License - feel free to use this project as inspiration for your own portfolio.

---

Built with ❤️ by Sumit S. Lokhande