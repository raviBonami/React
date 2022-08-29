
import React from 'react'

function RenderList() {
    const names = ["a","b","c","d","e"]
  return (
    <div>{names.map((name,index) => (
        <h1 key={index} >{name}</h1>
    ))}</div>
  )
}

export default RenderList

// react uses key prop to recognise which list item has been changed
// if no key is present, react will tear down entire DOM tree if it couldn't 
// find the matching item from previous and current snapshot 
// If key is present, then react will use keys to see if a list item
// has been changed or not

// Even though I have used index as a key value, we should not use it
// as if we are adding a component at the beginning of the list, react
// will change its index to 0, and it will see that the value in key 0
// was first value from the list, so previous 0th index value will be added
// and new item that we want to add at the beginning will be added in last
// even though we wanted to add it at first