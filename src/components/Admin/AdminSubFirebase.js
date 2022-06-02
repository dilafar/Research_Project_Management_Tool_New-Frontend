import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlpXT5dGDSdppfvKAeqRlJCZixGuukcaM",
  authDomain: "react-test-4e576.firebaseapp.com",
  projectId: "react-test-4e576",
  storageBucket: "react-test-4e576.appspot.com",
  messagingSenderId: "211602391592",
  appId: "1:211602391592:web:87c1ec85daf933e1466b1d"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };
