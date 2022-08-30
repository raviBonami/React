
import React from 'react'

// In HOC, we create a updatedComponent function and pass the original
// component as an argument
// We then create a new component and inside it we render
// the original component
// Finally for updatedComponent we will return the new component

// Naming convention for HOC is camel case
// We can define state and functions in HOC, we can then pass
// these as props to Original component
// In Original component, we can receive these state and functions
// as props and use them as "this.props.<prop name>"

// Thus, we re-used a components functionality by making it a
// HOC and use it in other components

// Another important thing to note here is that any props
// passed to HoverCounter or ClickCounter, it will not be received
// by them , instead these props will be received at HOC
// function , there we would need to pass the received props
// to newly created component

// Suppose we want to increment differently depending on which 
// component is using it, we can do this by passing arguments
// to UpdatedComponent, UpdatedComponent along with 
// OriginalComponent takes more parameters as arguments


const UpdatedComponent = (OriginalComponent, incrementValue) => {
    
    class NewComponent extends React.Component {
        constructor(){
            super()
            this.state = {
                count: 0
            }
        }
        incrementCount = () => {
            this.setState((prevState) => {
                return {
                    count: prevState.count + incrementValue
                }
            })
        }
        render() {
            return <OriginalComponent 
            count={this.state.count} 
            incrementCount={this.incrementCount} 
            name="brad" 
            age = {this.props.age}
            {...this.props}/>
            // Props received by the original components are
            // received here, using spread operator
            // we can send them to original components
        }
    }
    return NewComponent
}

export default UpdatedComponent