import { collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { app } from './setup';

const firestore = getFirestore(app);

export async function writeToDB(item) {
    try {
        const docRef = await addDoc(collection(firestore, "entries"), item);
    } catch (e) {
        console.log(e);
    }
}

export async function deleteFromDB(key) {
    try {
        await deleteDoc(doc(firestore, "entries", key));
    } catch (e) {
        console.log(e);
    }
}

export async function updateFromDB(key, status) {
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