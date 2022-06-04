import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCaEv3NhTcSDSQDkkEUG-oaw7kaJrbx9DI",
  authDomain: "uploade-files.firebaseapp.com",
  projectId: "uploade-files",
  storageBucket: "uploade-files.appspot.com",
  messagingSenderId: "28636317717",
  appId: "1:28636317717:web:75528813299f627f9c661c"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };
