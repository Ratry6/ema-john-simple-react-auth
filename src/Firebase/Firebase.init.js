import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const InitializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default InitializeAuthentication;


// steps for authentication
// Initial Setup
// 1. firebase.com : create project
//2. project settings : create web app
//3. get configuration ( firebase.config.js in src-> firebase folder)
//4.initialize firebase ( firebase.init.js in src-> firebase folder)
//5. sign-in-method enabled