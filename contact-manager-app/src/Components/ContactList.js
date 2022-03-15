import React from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";

function ContactList (props){

  const handleDeleteContact = (id) => {
    props.getContact(id);
  }
  const renderedContact = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} handleDeleteContact={handleDeleteContact} key={contact.id}/>
    );
  });

  return (
  <div className="ui container">
  <div style={{fontSize:"24px", marginTop:"70px", fontWeight:"bold"}}>Contact List <Link to="/add"> <button className="ui button blue" style={{marginLeft:"160px"}}>Add Contact</button> </Link> </div>
  <div className="ui list">{renderedContact}</div>
  </div>
  )
};

export default ContactList;
