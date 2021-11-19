import React, { useState } from "react";

import './App.css';

import Create from './components/Create';
import Footer from './components/Footer';
import Header from './components/Header';
import Notes from './components/Notes';

function App() {

  //State Variable
  const [storeNotes, setStoreNotes] = useState([]);

  // Add Note Function Using Create
  function AddNote(newNote) {
    setStoreNotes(prevState => {
      return [...prevState, newNote];
    });
  }

  // Delete Note Function Using Notes
  function deleteNote(id) {
    setStoreNotes(prevState => {
      return prevState.filter((noteItem, index) => {
        return index !== id;
      })
    });
  }

  return (
    <div className="App">
      <Header />
      <Create onAdd={AddNote} />
      <Notes notes={storeNotes} onDelete={deleteNote} />
      <Footer />
    </div>
  );
}

export default App;
