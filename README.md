# PG Hostel Tracker

A modern, responsive website for Avni PG Hostel in Shivaji Nagar, Jhansi.

## Features

- 🏠 Property showcase with image galleries
- 🛏️ Comprehensive amenities listing
- 📍 Prime location details with Google Maps integration
- 📱 Fully responsive design
- ⚡ Fast and optimized performance
- 🔒 Fraud warning system

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React

## Development

### Prerequisites

- Node.js 18+ 
- npm

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/PgHostelTracker.git
cd PgHostelTracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5000](http://localhost:5000) in your browser.

### Building for Production

```bash
npm run build:static
```

This creates a `dist` folder with the built static files.

## Deployment

### GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the main branch.

1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to "Pages" section
4. Set source to "GitHub Actions"
5. The site will be available at `https://yourusername.github.io/PgHostelTracker/`

### Manual Deployment

You can deploy the built files to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting
- Any web server

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utilities
│   └── public/            # Static assets
├── server/                # Backend (for development only)
├── shared/                # Shared types/schemas
└── .github/workflows/     # GitHub Actions for deployment
```

## Contact Information

**Avni PG Hostel**
- 📍 Shivaji Nagar, Jhansi, Uttar Pradesh
- 📞 +91 97952 04621
- 📞 +91 83180 10062
- 👤 Subhash Gupta (Owner)

## License

MIT License
