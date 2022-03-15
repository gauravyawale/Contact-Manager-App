import React from "react";
import image from "../images/photo-1593085512500-5d55148d6f0d.avif";
import {useLocation, useNavigate} from "react-router-dom";

function DisplayCard(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const {name, email} = location.state.details;


    const backToHome = () => {
        navigate("/");
    }

  return (
    <div className="main" style={{marginTop:"100px"}}>
      <div className="ui card centered">
        <div className="image">
          <img src={image} alt="user img" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="discription">{email}</div>
        </div>
        <div className="content">
          <div className="discription">"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</div>
        </div>
        
      </div>
      <div className="ui card centered">
            <button className="ui button blue" onClick={backToHome}>Back to Home</button>
        </div>
    </div>
  );
}

export default DisplayCard;
