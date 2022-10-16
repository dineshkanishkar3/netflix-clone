import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDf9PsxogD-wlzrsBF5JbAtDzHTBoOyqrY",
  authDomain: "netflix-clone-86cd7.firebaseapp.com",
  projectId: "netflix-clone-86cd7",
  storageBucket: "netflix-clone-86cd7.appspot.com",
  messagingSenderId: "921398651791",
  appId: "1:921398651791:web:0d86d05fb761cd61b4b9fa",
  measurementId: "G-30MMVZJ0E5"
  }

  const firebase = Firebase.initializeApp(config)


  export {firebase}