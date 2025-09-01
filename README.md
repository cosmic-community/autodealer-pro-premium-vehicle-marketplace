# AutoDealer Pro - Premium Vehicle Marketplace

![App Preview](https://imgix.cosmicjs.com/4c89a6d0-8748-11f0-822a-71b898000c45-photo-1618843479313-40f8afb4b4d8-1756740503321.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A sophisticated vehicle marketplace platform built with Next.js 15 and Cosmic, showcasing premium automotive listings with detailed specifications, dealer information, and brand profiles. Designed for the German automotive market with a focus on luxury vehicles.

## ✨ Features

- **Dynamic Vehicle Listings** - Browse vehicles with comprehensive details and specifications
- **Advanced Filtering** - Filter by brand, category, fuel type, transmission, and price range  
- **Detailed Vehicle Pages** - Complete vehicle information with image galleries and dealer contact
- **Brand & Category Management** - Organized content structure with brand profiles
- **Dealer Directory** - Complete dealer profiles with contact information
- **Responsive Design** - Mobile-first design optimized for all devices
- **Search Functionality** - Find specific vehicles quickly and easily
- **Professional UI** - Clean, automotive-focused design with high-quality imagery

<!-- CLONE_PROJECT_BUTTON -->

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a clone of the following website https://www.finn.com/de-DE"

### Code Generation Prompt  

> "Build a Next.js website that uses my existing objects in this bucket"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic** - Headless CMS for content management
- **React** - UI library for building components
- **Bun** - Fast package manager and runtime

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun installed
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Add your Cosmic credentials to `.env.local`

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetch All Vehicles
```typescript
const vehicles = await cosmic.objects
  .find({ type: 'vehicle-listings' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Get Vehicle by Slug
```typescript
const vehicle = await cosmic.objects
  .findOne({ type: 'vehicle-listings', slug })
  .depth(1);
```

### Filter by Brand
```typescript
const vehiclesByBrand = await cosmic.objects
  .find({ 
    type: 'vehicle-listings',
    'metadata.make': brandId 
  })
  .depth(1);
```

## 🎛 Cosmic CMS Integration

This application integrates with four main Cosmic object types:

- **Vehicle Listings** - Main content with specifications, pricing, and images
- **Brands** - Automotive manufacturers with logos and descriptions  
- **Vehicle Categories** - Classification system (SUV, Sedan, etc.)
- **Dealers** - Seller information with contact details and business profiles

The app uses Cosmic's depth parameter to efficiently fetch connected objects in single queries, ensuring optimal performance.

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Netlify
1. Push code to GitHub  
2. Connect repository to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy

### Environment Variables
Set these in your deployment platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY` 
- `COSMIC_WRITE_KEY`