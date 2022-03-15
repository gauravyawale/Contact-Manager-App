import React from "react";
import ProfileImage from "../images/1024px-Circle-icons-profile.svg.png";
import { Link } from "react-router-dom";

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
      <Link to={`/contact/${id}`} state={{details:props.contact}}>
        <div
          className="header"
          style={{ marginTop: "4px", marginBottom: "8px", fontSize:"18px" }}
        >
          {name}
        </div>
        <div style={{fontSize:"16px"}}>{email}</div>
      </Link>
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
