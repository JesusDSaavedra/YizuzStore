import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FireBaseAuth } from "./config";



const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async() => {

    try {
        
        const result = await signInWithPopup( FireBaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const user = result.user;
        const { displayName, email, photoURL, uid } = user

        return {
            ok: true,
            // User info
            displayName, email, photoURL, uid
        }

    } catch (error) {

        const errorCode = error.code; 
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,
        }
        
    }

}

export const registerUserWithEmailPassword  = async({ email, password, displayName }) => {

    try {

        const resp = await createUserWithEmailAndPassword( FireBaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        // console.log(resp);
        await updateProfile(FireBaseAuth.currentUser, { displayName })

        return{
            ok: true,
            uid, photoURL, email, displayName
        }
        
    } catch (error) {
        // console.log(error.message);
        return { ok: false, errorMessage: 'Correo ya en uso!' }

    }

}

export const loginWithEmailPassword = async({ email, password }) => {

    try {
        
        const resp = await signInWithEmailAndPassword( FireBaseAuth, email, password )
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {

        return {
            ok: false,
            errorMessage: error.message,
        }
        
    } 

}

export const logoutFirebase = async() => {
    return await FireBaseAuth.signOut();
}