
import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

// Prop passed to it from App component will not be received here,
// instead it will be received at HOC only

export class ClickCounter extends Component {

    // constructor(){
    //     super()

    //     this.state = {
    //         count: 0
    //     }
    // }

    // incrementCount = () => {
    //     this.setState((prevState) => {
    //         return {
    //             count: prevState.count + 1
    //         }
    //     })
    // }

  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount} > {this.props.name} Clicked {this.props.count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter, 5);
// The second argument passed here is increment value, we can received
// this in UpdatedComponents arguments