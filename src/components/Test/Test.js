import { db } from '../../firebase'
import { collection, addDoc } from "firebase/firestore";

import css from './Test.module.css'

function TestPage() {

    const testWrite = async () => {
        try {
            const docRef = await addDoc(collection(db, "test"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <>
            <div className={css.container}>
                <h1>
                    Hello World
                </h1>
            </div>
        </>
    );
}

export default TestPage;


