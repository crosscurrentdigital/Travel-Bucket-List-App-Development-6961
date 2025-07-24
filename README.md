# Bucket List App

A travel wishlist application that helps users track destinations they want to visit and alerts them when prices match their budget.

## Features

- Add destinations with budget caps and ideal travel windows
- Track flight and hotel deals
- Receive alerts when prices fall within budget
- Book directly through integrated travel partners
- Manage your travel profile and preferences

## Deployment

This project is configured for easy deployment to Netlify.

### Deploying to Netlify

1. Push your code to a GitHub repository
2. Sign in to Netlify using GitHub authentication
3. Click "New site from Git"
4. Select your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Set environment variables:
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY
7. Click "Deploy site"

### Environment Variables

Copy `.env.example` to `.env` for local development and add your Supabase credentials.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```