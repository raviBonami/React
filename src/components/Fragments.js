
import React from 'react'

function Fragments() {
    // React.Fragment allows us to enclose our JSX
    // into a single parent tag but it is not added to the DOM
    // <></> = these can also be used in place of React.Fragment
    // React.Fragment can enclose other Fragement components
    // Also, the only attribute the Fragement can take is key prop 
    // attribute
    const items = [1,2,3,4,5,6]
  return (
    <React.Fragment>
        <h1>Only h1 will be there in DOM</h1>
        {items.map( (item,index) => (
            <React.Fragment key={index}>{item}</React.Fragment>
        ))}
    </React.Fragment>
  )
}

export default Fragments