import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFp624fMPj6aNphN_Q9a-0FfFo1WeYiMM",
    authDomain: "alpaago-ff924.firebaseapp.com",
    projectId: "alpaago-ff924",
    storageBucket: "alpaago-ff924.appspot.com",
    messagingSenderId: "858132213803",
    appId: "1:858132213803:web:d9d34f019eafdd72bd3a6e"
  };
  
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

export {  auth };