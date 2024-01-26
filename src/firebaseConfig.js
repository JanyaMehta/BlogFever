/* Steps To Connect Project with Real Time Firebase Databse Available at4 

https://firebase.google.com/docs/web/setup#add-sdk-and-initialize
https://firebase.google.com/docs/database/web/start

*/

import { initializeApp } from 'firebase/app';
import { getDatabase} from "firebase/database";

// replaced config values gotten from firebase after creating web app in there, using enviornmental varibale(env files).

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,

  realtimeDatabaseURL:process.env.REACT_APP_FIREBASE_REALTIME_DATABASE_URL,
  
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export {app}
export default database;