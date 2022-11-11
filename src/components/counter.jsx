// imported whatever is needed, but the react is not mandatory to import because is imported by default since lates react updates. 
import React, { Component } from 'react';

class Counter extends Component {
  // state is an object that is outside the render method
  state = {
    count: 0,
  };

  // this is the render method
  render() {
    // here you can pass javascript code
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';

    // this is actually what is shown in the browser, the UI 
    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  // this is just another function
  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

// exports the default component so you will not need to use {} to specify the component in other file and maybe increases performance
export default Counter;