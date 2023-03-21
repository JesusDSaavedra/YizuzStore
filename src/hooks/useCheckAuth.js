import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FireBaseAuth } from "../firebase/config";
import { login, logout } from "../store/slices/auth";
// import { startLoadingNotes } from "../store/journal";


export const useCheckAuth = () => {
  
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {
        
        onAuthStateChanged( FireBaseAuth, async( user ) => {
        if ( !user ) return dispatch( logout() );

        const { uid, email, displayName, photoURL } = user;
        
        dispatch( login({ uid, email, displayName, photoURL }) );
        // dispatch( startLoadingNotes() );
        })

    }, [])
  
    return status;
}