import React, { Component } from 'react'

export class BindInClass extends Component {

    // In class based components, if we use any function having
    // this keyword, then due to this being bind to whomsoever calls
    // it, the this keyword may behave strangly
    // So, to prevent this, we have to bind "this" keyword to our
    // class object

    // We can do this by using .bind method
    constructor(props) {
      super(props)
    
      this.state = {
         first: "First message"
      }

      // 3rd way to bind and best way*
      this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState({
            first: "Second message"
        })
    }

    // 4th way to bind
    clickHandler = () => {
        this.setState({
            first: "Second Message"
        })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.first}</h1>
        {/* <button onClick={this.clickHandler} >Click</button> */}
        {/* Above way of handling events will throw an error, as this get bind
        to event rather than the class
        To solve this, we need to bind it*/}

        {/* Ways to bind -  */}
        {/* 1. Using bind method */}
        <button onClick={this.clickHandler.bind(this)}>Click</button>

        {/* 2. Using arrow function */}
        <button onClick={() => this.clickHandler() }>Click</button>

        {/* 3. Binding event handler in constructor instead of function call */}
        {/* Shown above in constructor function */}

        {/* 4. Making functions being used as arrow functions */}
      </div>
    )
  }
}

export default BindInClass