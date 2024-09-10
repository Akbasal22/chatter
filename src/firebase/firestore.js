import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    Timestamp
} from "firebase/firestore"
import { app, auth } from "./firebase"


//configures
const db = getFirestore(app);

//functions
// message body, photo, uid, timestamp

export async function sendMessage(message) {
    try {
        const docRef = await addDoc(collection(db, 'messages'), {
            body: message,
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL,
            sentAt: serverTimestamp(),
        });
    } catch (error) {
        console.log(error);
    }
}


export function getSnapshot(setMessages) {
    try {
        return onSnapshot(collection(db, 'messages'), (querySnapshot) => {
            const messagesArray = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const sentAt = data.sentAt instanceof Timestamp ? data.sentAt.toDate() : new Date(0);
                messagesArray.push({
                    id: doc.id,
                    ...data,
                    class: data.uid === auth.currentUser.uid ? 'sent' : 'received',
                    sentAt: sentAt,
                });
            });

            // Sort messagesArray by sentAt
            messagesArray.sort((a, b) => a.sentAt - b.sentAt);
            setMessages(messagesArray);
        });
    } catch (error) {
        console.error("Error with Firestore connection:", error);
    }
}



