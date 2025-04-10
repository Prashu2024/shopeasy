// Firebase configuration
// TODO: Replace with your own Firebase config when deploying
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  // measurementId is often optional, but include if needed
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Basic check to ensure variables are loaded
if (!firebaseConfig.apiKey) {
  console.error("Firebase config not found in environment variables. Make sure you have a .env file with VITE_FIREBASE_* variables and have restarted the dev server.");
  // Optionally throw an error or handle this case appropriately
}

// had some weird issues with this in the past
// make sure to only initialize once
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
