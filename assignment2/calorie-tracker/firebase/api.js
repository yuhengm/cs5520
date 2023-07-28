import { collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { firestore } from './setup';

const COLLECTION_NAME = 'calorie-entries';

export const writeToDB = async (item) => {
    try {
        await addDoc(collection(firestore, COLLECTION_NAME), item);
    } catch (e) {
        console.log(e);
    }
}

export const deleteFromDB = async (key) => {
    try {
        await deleteDoc(doc(firestore, COLLECTION_NAME, key));
    } catch (e) {
        console.log(e);
    }
}

export const updateFromDB = async (key, status) => {
    try {
        const docRef = doc(firestore, COLLECTION_NAME, key);
        const data = {
            isImportant: status
        }
        await updateDoc(docRef, data);
    } catch (e) {
        console.log(e);
    }
}