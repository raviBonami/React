
// Similar to higher order functions which takes
// a component as a parameter and returns a new component
// with enhanced capabilties which we can share among
// multiple components
// Similar to this, we can also use Render Props functionality

// Render props is a technique for sharing code
// between react components using a prop whose value
// is a function

// This component doesn't render anything on its own, it only passes the prop
// it received from parent component (App.js) and passes those
// props to the components that uses that functionality

import React, { Component } from 'react'

class RenderProps extends Component {
    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    render() {
        return (
            <div>{this.props.render(this.state.count, this.incrementCount)}</div>
        )
    }
}

export default RenderProps