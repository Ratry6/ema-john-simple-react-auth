import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const InitializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default InitializeAuthentication;


// /steps for authentication

// Step:1- Initial Setup
//  1. firebase.com : create project
// 2. project settings : create web app
// 3. get configuration ( firebase.config.js in src-> firebase folder)
// 4.initialize firebase ( firebase.init.js in src-> firebase folder)
// 5. sign-in-method enabled

//------------

//Step:2-
//1.Create Login Component
//2.Create Register Component
//3.Create route for login & register

//step:3-
//1. set up signInWithGoogle
//2. set up Sign Out Method
//3.use State 
//4.special observer (onAuthChanged)