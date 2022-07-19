import React, { Component } from "react";

// Class Component
export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ message: "Thank you for Subscribing" });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>Subscribe</button>
      </div>
    );
  }
}
