# ShopEasy E-commerce Project

This is a clone of the e-commerce site based on the [reference site](http://edcenten0.github.io/Vite-E-commerce/) using the [Platzi Fake API](https://fakeapi.platzi.com/).

## Features

- Product listings with category filtering and sorting
- Product details with image gallery and related products
- Shopping cart functionality with local storage persistence
- User authentication with Firebase
- Checkout process with form validation
- Responsive design for mobile and desktop

## Technologies Used

- React 18
- React Router v6
- Styled Components
- Firebase Authentication
- Axios for API requests
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```
git clone https://github.com/Prashu2024/shopeasy
cd shopeasy
```

2. Install dependencies
```
npm install
```

3. Start the development server
```
npm run dev
```

4. Build for production
```
npm run build
```

5. Preview the production build
```
npm run preview
```

## Firebase Setup

This project uses Firebase for authentication. To set up your own Firebase project:

1. Create a project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password
3. Update the Firebase configuration in `.env` file.

## API Integration

This project uses the [Platzi Fake API](https://fakeapi.platzi.com/) for product data. The API endpoints are:

- GET `/products` - Get all products
- GET `/products/{id}` - Get a single product
- GET `/categories` - Get all categories
- GET `/categories/{id}/products` - Get products by category

## Deployment

The project is built using Vite and can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages. Plese checkout the deployed [app](https://shopeasy-pi.vercel.app/).

