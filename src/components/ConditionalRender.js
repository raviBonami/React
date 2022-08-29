
import React, { Component } from 'react'

class ConditionalRender extends Component {
constructor(props) {
  super(props)

  this.state = {
     isLogged: true
  }

  this.log = this.log.bind(this);
}

log(){
    this.setState({
        isLogged: !(this.state.isLogged)
    })
}

  render() {

    // Method 1
    // if(this.state.isLogged){
    //     return (
    //         <div>Welcome from condition 1</div>
    //     )
    // }else{
    //     return (
    //         <div>Welcome from condition 2</div>
    //     )
    // }


    // Method 2
    // let message;
    // if(this.state.isLogged){
    
    // message = <div>Welcome from condition 1</div>
        
    // }else{
    //     message = <div>Welcome from condition 2</div>
    // }
    // return message

    

    // Method 3 - Ternary operator
    // return (
    //     this.state.isLogged ? 
    //     <div>Welcome from condition 1</div>:
    //     <div>Welcome from condition 2</div>
    // )


    // Method 4 - && operator
    return (this.state.isLogged && <div>Welcome from condition 2</div>)

    // return (
    //     <div>
    //   {this.state === true ? <div>Welcome from condition 1</div> : <div>Welcome from condition 2</div>}
    //   <button onClick={this.log} >Click</button>
    //   </div>
    // )
  }
}

export default ConditionalRender

// Conditional rendering - 
// 1. Using if-else inside render method