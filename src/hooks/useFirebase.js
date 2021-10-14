import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import InitializeAuthentication from "../Firebase/Firebase.init";

InitializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
               
                setUser(result.user);
            })
            .catch(error => {
                console.log(error.message);
            }
            )
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

    useEffect( () =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
          });
    
}, [])

return{
    user,
    signInUsingGoogle,
    logOut
    
}
}

export default useFirebase;

