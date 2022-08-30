
// Refs allows us to access DOM elements from our components

import React, { Component } from 'react'

class Refs extends Component {

  constructor(props) {
    super(props)
    this.inputRef = React.createRef() // Creating a ref 
    this.state = {
       first: '' 
    }
  }

  componentDidMount(){
    // Here, as soon as component mounts, we use the ref created
    // The ref returns an object which has lots of property
    // which we can use to manipulate the DOM
    this.inputRef.current.focus()
    console.log(this.inputRef)

  }

  // We can also use  refs to get the input value, 
  // no need to create new ref , using this.inputRef we can do both
  
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        {/* Attaching the ref with the DOM element */}
      </div>
    )
  }
}

export default Refs

// Assume as we load our page, we want our input field to be
// focussed, so we can use ref for it