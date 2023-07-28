import { collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { firestore } from './setup';

export const writeToDB = async (item) => {
    try {
        await addDoc(collection(firestore, "entries"), item);
    } catch (e) {
        console.log(e);
    }
}

export const deleteFromDB = async (key) => {
    try {
        await deleteDoc(doc(firestore, "entries", key));
    } catch (e) {
        console.log(e);
    }
}

export const updateFromDB = async (key, status) => {
    try {
        const docRef = doc(firestore, "entries", key);
        const data = {
            isImportant: status
        }
        await updateDoc(docRef, data);
    } catch (e) {
        console.log(e);
    }
}