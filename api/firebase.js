// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth/react-native';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyAnRLC3Eq9JwC68WiCu7HjB_ufihe3OE",
  authDomain: "lele-ride.firebaseapp.com",
  projectId: "lele-ride",
  storageBucket: "lele-ride.appspot.com",
  messagingSenderId: "973616406520",
  appId: "1:973616406520:web:48b9482a0b9a870ffd400d"
};

// Initialize Firebase
const app_length = getApps().length > 0;
const app = app_length ? getApp() : initializeApp(firebaseConfig);

//REFERENCE AUTH
const auth = app_length ? getAuth(app) :
  initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });

export const login = async ({ email, password }) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  return user;
}

export const register = async ({ name, email, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(auth.currentUser, {
      displayName: name,
    })
    return user;
  } catch (e) {
    console.log('error ...')
    console.log(e)
  }
}

export const logout = () => {
  signOut(auth);
}