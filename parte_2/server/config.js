
const firebase = require("firebase")

const firebaseConfig = {
    apiKey: "AIzaSyB0LTz_P3XnPzx9pe-5Rq7Irdp0bX-Wolg",
    authDomain: "quiz-19cb3.firebaseapp.com",
    projectId: "quiz-19cb3",
    storageBucket: "quiz-19cb3.appspot.com",
    messagingSenderId: "561437606722",
    appId: "1:561437606722:web:fb3921ebd102ad1c49bedb"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const User = db.collection("Users")

module.exports = User
