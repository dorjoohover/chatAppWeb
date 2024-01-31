import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { GoogleAuthProvider } from "@firebase/auth/cordova";

const firebaseConfig = {
  apiKey: "AIzaSyD3KdM1dShQnDwjHug04fS8w2wr104YF70",

  authDomain: "chatapp-52450.firebaseapp.com",

  projectId: "chatapp-52450",

  storageBucket: "chatapp-52450.appspot.com",

  messagingSenderId: "1045595376762",

  appId: "1:1045595376762:web:1891e18614ddf23593ffc3",

  measurementId: "G-LQPZXPE3CG",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
export { auth, provider };

export default app;
