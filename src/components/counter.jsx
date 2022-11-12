// imported whatever is needed, but the React is not mandatory to import because is imported by default since lates react updates.
import React, { Component } from 'react';

class Counter extends Component {
  // state is an object that is outside the render method
  state = {
    value: this.props.value,
    tags: ['tag_1', 'tag_2', 'tag_3'],
  };

  // used an arrow function because arrow functions INHERIT the "this" keyword
  handleIncrement = () => {
    // that is not going to work, react does not work that way
    // this.state.value++;

    // here is the propper aproach, you must change the value with the state, so react will know what to do
    this.setState({ value: this.state.value + 1 });
  };

  // this is the render method
  render() {
    // here you can pass javascript code

    // this is actually what is shown in the browser, the UI
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  // this is a function while pressed "Ctrl+Shift+R" and choosed the extract function option, and automatically made me a function, and positioned it in a perfect place of the code
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  // this is just another function
  formatValue() {
    // used object deconstruction, so... to avoid writing everythime "this.state.value"
    const { value } = this.state; // is like writing "this.state.value" and storing in a variable with a simpler name
    return value === 0 ? 'Zero' : value; // you can use ternary operator like this too, in the return statement if you maybe forgot
  }
}

// exports the default component so you will not need to use {} to specify the component in other file and maybe increases performance
export default Counter;