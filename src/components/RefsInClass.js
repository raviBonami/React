
import React, { Component } from 'react'

// Using ref from child to parent component

class RefsInClass extends Component {
constructor(props) {
  super(props)
    this.inputRef = React.createRef();
  this.state = {
     first: ''
  }
}

focusInput(){
    this.inputRef.current.focus();
}
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
      </div>
    )
  }
}

export default RefsInClass

// Now in a parent component, use this class component
// In that also, create a ref using React.createRef()
// Now attach that component to the child component(this component)
// Now in parent only, create a button and attach a click handler
// to it, in that clickHandler function, put
// this.component.current.focus
// Note that this.component is a ref in Parent class and
// is attached to child component (this 'RefsInClass' component)
