
import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "Parent"
      }
      this.greet = this.greet.bind(this);
    }

    greet(msg){
        alert(`Hello ${this.state.parentName} ${msg}`)
    }
  render() {
    return (
      <div>
        <ChildComponent greet={this.greet} />
      </div>
    )
  }
}

export default ParentComponent