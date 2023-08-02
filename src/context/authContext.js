import React,{createContext,useContext,useEffect,useState} from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../firebase";

const authContext = createContext();

export const AuthUseContext = ({children})=>{
    const [user,setUser] = useState();
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
        .then((res)=>{
            const atk = res._tokenResponse.refreshToken
            sessionStorage.setItem('atk',atk)
            // console.log()
        })
    }
    const logOut = ()=>{
        return signOut(auth)
        .then(()=>{
            sessionStorage.removeItem('atk')
        })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged (auth,(currentUser)=>{ 
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    return(
        <authContext.Provider value={{user,logIn,logOut}}>
            {children}
        </authContext.Provider>
    )
}
export const useAuthContext = ()=>{
    return useContext(authContext)
}