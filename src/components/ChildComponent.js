
import React from 'react'

function ChildComponent({greet}) {
    // Here we are receiving a method as a prop in child component
    // which will execute the method defined in parent component
    // But if we also want to send some data back from child to
    // parent component, we can use arrow functions inside onClick
  return (
    <div>
        <button onClick={() => greet('From child')} >Greet Parent</button>
    </div>
  )
}

export default ChildComponent