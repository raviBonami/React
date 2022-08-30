import React, { PureComponent } from 'react'

class PureComponent extends PureComponent {
  render() {
    return (
      <div>PureComponent</div>
    )
  }
}

export default PureComponent

// Pure components are different than regular components
// they are extended from PureComponent class while
// regular components are extended from Component

// Major diff b/w them - Lets understand by an example
// Suppose we have a parent component in which there are 2
// components present, one regular and one pure
// In both, we make a state name: 'abc' ,
// we also put a setInterval in which we use setState() to 
// again set the name as 'abc' in every 2 seconds
// NOTE - values of name before and after are same
// Now if we run this parent commponent, the first all 3
// Parent, inside it regular component and pure component will render
// But, after 2 seconds, while parent and regular component will
// render again and again, pure component will not

// Reason - While a regular component does not implement
// shouldComponentUpdate method, it always returns true by default,
// a pure component, implements shouldComponentUpdate with shallow
// props and state comparison

// Shallow - two comparing non-primitive types only
// return true if they both are pointing to the same object

// Pure component does shallow comparison of prevState with currState
// and prevProps with currProps and only when there is difference
// it will re-render

// In our example, name is primitive type, so prev and curr value 
// are same, so shouldComponentUpdate returns false, and it doesn't 
// re-render

// In our example, if we change Parent component to pure, it will
// not re-render, and so its children component will also not 
// re-render

// this is reason why we create new arrays, objects while
// re-rendering any changes made as if we simply push/append
// then reference won't change and it won't re-render