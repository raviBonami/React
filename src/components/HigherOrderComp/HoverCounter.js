
import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         count: 0
    //     }
    // }
    // handleHover = () => {
    //     this.setState((prevState) => {
    //         return {

    //             count: prevState.count + 1
    //         }
    //     })
    // }

  render() {
      console.log(this.props.age)
    return (
      <div>
        <h1 
        onMouseOver={this.props.incrementCount}>
            {this.props.name} Hover + 
            {this.props.age} 
            {this.props.count} times + 
            </h1>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter, 10);

// Here, we are using inrementCount functionality to increase
// the count value, similarly in other file ClickCounter.js
// we are again using the same thing
// So, we are repeating Code, to prevent this, we will
// use Higher Order functions

// Higher order component - HOC
// A pattern where a function takes a component as an
// argument and returns a new component
