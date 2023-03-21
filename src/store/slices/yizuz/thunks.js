import { collection, doc, setDoc } from "firebase/firestore/lite";
import { useDispatch } from "react-redux"
import { FireBaseDB } from "../../../firebase/config";


export const startAddProduct = (product)  => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;
        console.log('startAddProduct', product);

        const addProduct = {
            id: '',
            favorite: true,
        }

        const newDoc = doc( collection( FireBaseDB, `${uid}/Store/myBag` ) );
        await setDoc( newDoc, product );
    }
}