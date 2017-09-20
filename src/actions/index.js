// import Firebase from "firebase";
// export const SIGN_OUT_USER = "SIGN_OUT_USER";
// export const AUTH_ERROR = "AUTH_ERROR";
// export const AUTH_USER = "AUTH_USER";

// const config = {
//   apiKey: "AIzaSyCUEYEHx3GRyYTYtF-HzNsLgGpdIQVbjrI",
//   authDomain: "innovation-project-46354.firebaseapp.com",
//   databaseURL: "https://innovation-project-46354.firebaseio.com"
// };

// Firebase.initializeApp(config);

// export function signUpUser(credentials) {
//   return function(dispatch) {
//     Firebase.auth()
//       .createUserWithEmailAndPassword(credentials.email, credentials.password)
//       .then(response => {
//         dispatch(authUser());
//       })
//       .catch(error => {
//         console.log(error);
//         dispatch(authError(error));
//       });
//   };
// }

// export function signInUser(credentials) {
//   return function(dispatch) {
//     Firebase.auth()
//       .signInWithEmailAndPassword(credentials.email, credentials.password)
//       .then(response => {
//         dispatch(authUser());
//       })
//       .catch(error => {
//         dispatch(authError(error));
//       });
//   };
// }

// export function signOutUser() {
//   return function(dispatch) {
//     Firebase.auth().signOut().then(() => {
//       dispatch({
//         type: SIGN_OUT_USER
//       });
//     });
//   };
// }

// export function verifyAuth() {
//   return function(dispatch) {
//     Firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         dispatch(authUser());
//       } else {
//         dispatch(signOutUser());
//       }
//     });
//   };
// }

// export function authUser() {
//   return {
//     type: AUTH_USER
//   };
// }

// export function authError(error) {
//   return {
//     type: AUTH_ERROR,
//     payload: error
//   };
// }
