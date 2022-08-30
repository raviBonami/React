

// Provide a way to add children components into a DOM node
// that lies outside the DOM hierarchy of DOM components

// In index.html, we have a root div into which we add our App
// component
// Portals allow us to create another root div and add child components
// to that div instead of main root div


// To use react portals, create another div in index.html file
// In component use ReactDOM.createPortal() to use portal functionality

// ReactDOM.createPortal(<JSX we want to insert>, div element we want to attach
// our component to)

// Using this, the component is added under portal-root div instead
// of root div

import React from 'react'
import  ReactDOM  from 'react-dom'

function Portals() {
  return ReactDOM.createPortal(
    <h1>Portal demo</h1>,
    document.getElementById('portal-root'))
}

export default Portals

// We can use portal for Modals as if modal is rendered inside 
// another div tag and that div has some restrictions 
// regarding the height and width, the modal rendered
// inside it also will have same restrictions, 
// hence better would be render it in a sepearte DOM hierarchy


// Event bubbling in portals - 
// An event fired from inside a portal will propagate to ancestors 
// in the containing React tree, even if those elements are not 
// ancestors in the DOM tree. Assuming the following HTML structure
// If 2 root divs are there
// <div id="app-root"></div> 
// <div id="modal-root"></div>
// A Parent component in #app-root would be able to catch an 
// uncaught, bubbling event from the sibling node #modal-root