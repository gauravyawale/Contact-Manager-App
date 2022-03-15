import React, { useState, useEffect } from "react";
// import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import DisplayCard from "./DisplayCard";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const LocalStorageKey = "ContactsList";
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const handleDeleteContact = (id) => {
    const newContactsList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactsList);
  };

  useEffect(() => {
    const retrive = JSON.parse(localStorage.getItem(LocalStorageKey));
    if (retrive) setContacts(retrive);
  }, []);

  useEffect(() => {
    localStorage.setItem(LocalStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContact={handleDeleteContact}
              />
            }
          />

          <Route
            exact
            path="/add"
            element={<AddContact handleAddContact={handleAddContact} />}
          />

          <Route exact path={`/contact/:id`} element={<DisplayCard />} />

          {/* <AddContact handleAddContact={handleAddContact} /></Route> */}
          {/* <ContactList contacts={contacts} getContact={handleDeleteContact} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
