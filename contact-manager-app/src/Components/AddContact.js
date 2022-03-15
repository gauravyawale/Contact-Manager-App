import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();

    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are Mandatory");
      return;
    } else {
      this.props.handleAddContact(this.state);
      this.setState({
        name: "",
        email: "",
      });

      alert("Added Successfully")

      // this.props.history.push("/");
    }
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>

        <form className="ui form" onSubmit={this.add}>
          {/* <!-- Name input --> */}
          <div className="field">
            <label htmlFor="form4Example1">Name</label>
            <input
              type="text"
              name="name"
              id="form4Example1"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          {/* <!-- Email input --> */}
          <div className="field">
            <label htmlFor="form4Example2">Email address</label>
            <input
              type="email"
              name="email"
              id="form4Example2"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
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
}
