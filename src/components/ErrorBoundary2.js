
import React, { Component } from 'react'

// This is an error boundary component, 
// We enclose the components whose fallback should be
// this component i.e if any error occured in those 
// components which are children component, instead
// of crashing the entire app, it will fallback
// to this error boundary component

// Also, error boundaries do not catch error from event handler
// functions

class ErrorBoundary2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }

  render() {
    if(this.state.hasError){
        return <h1>Something went wrong</h1>
    }
    return (
        this.props.children
    )
  }
}

export default ErrorBoundary2