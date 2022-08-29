
// import React from 'react'
import { Component } from 'react'

class Welcome extends Component{


    render(){
        // In class based components, we do destructuring inside
        // the render method, shown below
        // const {name, children} = this.props;
        // Then we can use these destructured arguments directly 

        // For states - 
        // const {state1, state2} = this.state;
        
        return (
            <>
            <div>Hello from {this.props.age}</div>
            
            </>
            
        )
        }
}

export default Welcome

// In class component, we can only get props from 
// "this.props"
