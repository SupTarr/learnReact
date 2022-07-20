// rce : React Class Export Component
import React, { Component } from "react";

// Named export
// Function Component
/* export default function Counter() {
  return <h1>My name is Tata</h1>
} */

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    // Asynchronous
    /* this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count);
      }
    ); */
    this.setState(
      (prevState, props) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log(this.state.count);
      }
    );
  }

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
