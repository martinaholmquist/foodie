import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyAKlEqT-lVQFvqQWInRZwLP4fbDAaDHzVc",
  authDomain: "foodie-382912.firebaseapp.com",
  projectId: "foodie-382912",
  storageBucket: "foodie-382912.appspot.com",
  messagingSenderId: "1018883152975",
  appId: "1:1018883152975:web:cf0e6135bb7241ef0ade3a",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
