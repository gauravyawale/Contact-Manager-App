import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
export default function AddContact(props) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
  });
  

  const add = (e) => {
    e.preventDefault();
    
    if (state.name === "" || state.email === "") {
      alert("All fields are Mandatory");
      return;
    } else {
      props.handleAddContact(state);
      setState({
        name: "",
        email: "",
      });
      
      alert("Added Successfully")
      navigate("/")
    }
  };
  
    return (
      <div className="ui main">
        <h2>Add Contact</h2>

        <form className="ui form" onSubmit={add}>
          {/* <!-- Name input --> */}
          <div className="field">
            <label htmlFor="form4Example1">Name</label>
            <input
              type="text"
              name="name"
              id="form4Example1"
              value={state.name}
              onChange={(e) => setState({ name: e.target.value, email:"" })}
            />
          </div>

          {/* <!-- Email input --> */}
          <div className="field">
            <label htmlFor="form4Example2">Email address</label>
            <input
              type="email"
              name="email"
              id="form4Example2"
              value={state.email}
              onChange={(e) => setState({ ...state,email: e.target.value })}
            />
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" className="ui button blue">
            Add
          </button>

          <Link to="/">
            <button className="ui button blue">
              Back to list
            </button>
          </Link>
        </form>
      </div>
    );
  
}
