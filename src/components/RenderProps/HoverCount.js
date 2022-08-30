
import React, { Component } from 'react'

export class HoverCount extends Component {
    // constructor() {
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
                <div>
                    <h2 onMouseOver={this.props.incrementCount} >  Hovered {this.props.count} times</h2>
                </div>
            </div>
        )
    }
}

export default HoverCount