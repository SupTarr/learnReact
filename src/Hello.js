import React, { Component } from "react";

// Named export
// Function Component
/* export default function Hello() {
  return <h1>My name is Tata</h1>
} */

// Class Component
export default class Hello extends Component {
  render() {
    return (
      <div id="hello" className="hello">
        <h1>
          Welcome {this.props.name} a.k.a {this.props.nickName}
        </h1>
      </div>
    );
    /* return React.createElement(
      'div',
      { id: 'hello', className: 'hello' },
      React.createElement('h1', null, 'My name is Tata')
    ) */
  }
}
