import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq1E4D_Rt1sq-6SdNTUswdkNDSLIxwpr4",
  authDomain: "emplist-3c004.firebaseapp.com",
  projectId: "emplist-3c004",
  storageBucket: "emplist-3c004.appspot.com",
  messagingSenderId: "878544616976",
  appId: "1:878544616976:web:b55c25c6b954477b4c9495"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);