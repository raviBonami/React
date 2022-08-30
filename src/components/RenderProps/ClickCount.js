
import React, { Component } from 'react'


export class ClickCount extends Component {

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
        <button onClick={this.props.incrementCount} >  Clicked {this.props.count} times</button>
      </div>
    )
  }
}

export default ClickCount
// The second argument passed here is increment value, we can received
// this in UpdatedComponents arguments