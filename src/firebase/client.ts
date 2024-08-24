import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjbGaTcQY27g0_xv_aAPLGGzNt7Wdsdfo",
  authDomain: "login2-19e47.firebaseapp.com",
  projectId: "login2-19e47",
  storageBucket: "login2-19e47.appspot.com",
  messagingSenderId: "711602173851",
  appId: "1:711602173851:web:2909c2ef98202a6453133e",
};

// Inicializar la app de Firebase
const app = initializeApp(firebaseConfig);

// Configurar auth 
export const auth = getAuth(app);
export { app };