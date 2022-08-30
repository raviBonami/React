
import React from 'react'

function Memo({name}) {
    console.log('rendering memo component')
  return (
    <div>{name}</div>
  )
}

// export default Memo
export default React.memo(Memo)
// Using React.memo() while exporting changes it to Pre component
// i.e props are not changing so component doesn't get re-rendered

// Also, React.memo() is higher order component - it accepts
// a component as a argument, makes some changes and returns
// a new enhanced component