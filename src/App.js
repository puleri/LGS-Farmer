import logo from './logo.svg';
import './App.css';
import {db} from './firebase'

import { collection, addDoc } from "firebase/firestore";


function App() {
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={() => testWrite()}
        >
          TEST
        </button>
      </header>
    </div>
  );
}

export default App;
