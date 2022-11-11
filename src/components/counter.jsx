// imported whatever is needed, but the React is not mandatory to import because is imported by default since lates react updates. 
import React, { Component } from 'react';

class Counter extends Component {
  // state is an object that is outside the render method
  state = {
    count: 0,
  };
  
  // this is the render method
  render() {
    // here you can pass javascript code

    // this is actually what is shown in the browser, the UI 
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  // this is a function while pressed "Ctrl+Shift+R" and choosed the extract function option, and automatically made me a function, and positioned it in a perfect place of the code
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  // this is just another function
  formatCount() {
    // used object deconstruction, so... to avoid writing everythime "this.state.count"
    const { count } = this.state; // is like writing "this.state.count" and storing in a variable with a simpler name
    return count === 0 ? 'Zero' : count; // you can use ternary operator like this too, in the return statement if you maybe forgot
  }
}

// exports the default component so you will not need to use {} to specify the component in other file and maybe increases performance
export default Counter;