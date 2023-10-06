import { cartError, cartFetched } from "../slices/CartSlice";
import { addDoc, collection, deleteDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

export const addToCart = (userId, id) => async (dispatch) => {
    try{
        await addDoc(collection(db, `users/${userId}/cart`),{
            // user: userId,
            item: id,
        });
        dispatch(fetchCart(userId));
    }
    catch(e){
        cartError(e.message);
    }
};

export const fetchCart = (userId) => async (dispatch) =>{
    try{
        const q = query(collection(db, `users/${userId}/cart`));
        const querySnapshot = await getDocs(q);
        // console.log("query", querySnapshot?.docs[0]?.data());
        let dataArray = [];
        querySnapshot.forEach((doc) => {
            dataArray.push(doc.data().item);
        });
        // console.log('data array', dataArray)
        dispatch(cartFetched(dataArray));
    }
    catch(e){
        dispatch(cartError(e.message));
    }
}

export const removeFromCart = (userId, id) => async(dispatch) => {
    try{
        const ref = collection(db, `users/${userId}/cart`);
        const q = query(ref, where("item", "==", id));
        const querySnapshot = await getDocs(q);
        // console.log("removeCartQuery", querySnapshot?.docs[0]?.data());

        querySnapshot.forEach(async (doc) => {
            await deleteDoc(doc.ref);
        });

        dispatch(fetchCart(userId));
    }
    catch(e){
        cartError(e.message);
    }
};