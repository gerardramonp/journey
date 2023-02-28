import { initializeApp } from 'firebase/app';

import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAH01L11ZyoLyv9LUbg-4JSFxpDT7nTOIs',
  authDomain: 'journey-851f7.firebaseapp.com',
  databaseURL:
    'https://journey-851f7-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'journey-851f7',
  storageBucket: 'journey-851f7.appspot.com',
  messagingSenderId: '936899247820',
  appId: '1:936899247820:web:7a1579df16ceaf0d6e4c69',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDb = getDatabase(firebaseApp);
