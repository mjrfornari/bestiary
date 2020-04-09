import firebase from 'firebase/app';
import 'firebase/database';

function initializeFirebirdDatabase() {
    var firebaseConfig = {
        apiKey: "AIzaSyA53hqTGhsR2bxFkhMs6lpGs1gvxjTVA-Y",
        authDomain: "bestiary-c5d0a.firebaseapp.com",
        databaseURL: "https://bestiary-c5d0a.firebaseio.com",
        projectId: "bestiary-c5d0a",
        storageBucket: "bestiary-c5d0a.appspot.com",
        messagingSenderId: "929951231752",
        appId: "1:929951231752:web:031ae0843c49ddd4d706bd",
        measurementId: "G-JKVM4BSQVE"
    };
  
    firebase.initializeApp(firebaseConfig);
}

initializeFirebirdDatabase()

const api = {
    getData: async (path) => {
        return new Promise((resolve, reject) => {
            firebase.database().ref(path).on('value', (snapshot) => {
                resolve(snapshot.val())
            })
        })
    }
}



export default api 