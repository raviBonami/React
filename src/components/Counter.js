
import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increaseCount() {
        // this.setState({
        //     count: this.state.count + 1
        // },() => {
        //     console.log("Counter value : " + this.state.count)
        // })
        this.setState( (prevState) => ({
            count : prevState.count + 1
        }))
        // Above way is more apt as it updates based on previous value
        
    }

    decreaseCount() {
        // this.setState({
        //     count: this.state.count - 1
        // },() => {
        //     console.log("Counter value : " + this.state.count)
        // })
        this.setState( (prevState) => ({
            count: prevState.count - 1
        }))
    }

    increaseFive(){
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()

        // We may assume that if we call increment five times, then 
        // counter value will also increase 5 times, but this will not happen
        // as React groups multiple setState() calls into a single render 
        // for better performance

        // So, if we want to change it , we need to add 5 to our state instead
        // of changing it 5 times

        // To do this, we need to pass a function to our setState method instead
        // of simple state value as function has access to previous values
        // of our state

        // This function (callback function) also takes a second parameter which has the props
        // object so if our state depends on props, we can use it
    }

    render() {
        return (
            <div>
                <h3>Counter : {this.state.count}</h3>
                <button onClick={() => this.increaseCount()}>Increase Count</button>
                <button onClick={() => this.decreaseCount()} >Decrease Count</button>
            </div>
        )
    }
}

export default Counter

// If we change any state without the setState() method, the state value
// will be updated but there will be no change in UI being rendered
// as setState() function is the one that tells react that some changes 
// have been made and page needs re-rendering

// Also, setState is async function so it may not necessarily make changes
// at that instant 
// so if there is some code that we want to execute after re-render, we will not be able to do
// To solve this, this.setState() takes 2nd parameter which takes
// a callback function which gets executed only after the rendering has been complete