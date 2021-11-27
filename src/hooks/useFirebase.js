import { useEffect, useState } from "react"
import { getAuth,signInWithPopup,onAuthStateChanged, getRedirectResult, signOut, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase=()=>{

const [user,setUser] = useState({})
const auth = getAuth();
const googleProvider=new GoogleAuthProvider()


const signInUsingGoogle = ()=>{
 signInWithPopup(auth, googleProvider)
 .then(result=>{
     console.log(result.user)
 })
}
  
const logOut=()=>{
    signOut(auth)
    .then(()=>{
        setUser({})
    })
}

useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
        if (user) {        
         setUser(user)          
        }
      });
},[])

return{
    user,
    logOut,
    signInUsingGoogle,
    
}

}

export default useFirebase