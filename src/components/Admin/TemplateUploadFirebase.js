import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDp_XlkVYOu1lqfJOexv2SyZCdO7P2OeVM",
  authDomain: "template-submission.firebaseapp.com",
  projectId: "template-submission",
  storageBucket: "template-submission.appspot.com",
  messagingSenderId: "797087454737",
  appId: "1:797087454737:web:e420668540cf81f6fc83b0"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };
