import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBv1TFZqnRViFyFo0yf-zy37Edzximak48",
  authDomain: "uploading-file-35254.firebaseapp.com",
  projectId: "uploading-file-35254",
  storageBucket: "uploading-file-35254.appspot.com",
  messagingSenderId: "276594568758",
  appId: "1:276594568758:web:72246f9cd7b93a53db7297",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
