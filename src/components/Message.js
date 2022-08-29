

import { Component } from 'react'

class Message extends Component{
    
    constructor(){
        super() // Required since we use Component super/parent class
                // so, call to super class constructor is required
        this.state = {
            message: "This is a message from message state"
        }

    }

    handleChange(){
        this.setState({
            message: "Thank you for subscribing"
        })
    }

    render(){
        return (
            <div>
                <h1>Message from {this.state.message}</h1>
                <button onClick={() => this.handleChange()}>Click Me to change</button>
            </div>
        )
        }
}

export default Message

// To form state variables in class based components, we need to use
// class constructor