import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCUEYEHx3GRyYTYtF-HzNsLgGpdIQVbjrI",
  authDomain: "innovation-project-46354.firebaseapp.com",
  databaseURL: "https://innovation-project-46354.firebaseio.com"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
