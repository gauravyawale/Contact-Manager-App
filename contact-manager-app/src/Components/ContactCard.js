import React from "react";
import ProfileImage from "./1024px-Circle-icons-profile.svg.png";

function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="item" style={{ position: "relative", borderTop:"1px solid gray",borderBottom:"0.5px solid gray", padding:"8px", width:"30rem" }}>
      <img
        className="ui avtar image"
        src={ProfileImage}
        alt="img"
        style={{ width: "50px", marginRight: "20px" }}
      />
      <div className="content">
        <div
          className="header"
          style={{ marginTop: "4px", marginBottom: "8px", fontSize:"18px" }}
        >
          {name}
        </div>
        <div style={{fontSize:"16px"}}>{email}</div>
      </div>
      <div>
        <i
          className="trash alternate icon"
          style={{
            color: "red",
            fontSize: "25px",
            position: "absolute",
            marginLeft: "25rem",
            marginTop: "-30px",
          }}
          onClick={() => props.handleDeleteContact(id)}
        ></i>
      </div>
    </div>
  );
}

export default ContactCard;
