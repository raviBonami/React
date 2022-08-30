
import React from "react";

// Create context
const UserContext = React.createContext()

// Every context created from React.createContext has
// 2 methods - Provider and Consumer

// Provider
const UserProvider = UserContext.Provider 

// Consumer
const UserConsumer = UserContext.Consumer 

// export 
export {UserProvider, UserConsumer}

// To provide, we have to go to the component which needs
// the data
// Also, only the descendant components of component in which we
// use the context can use context data

// In App.js, wrap the component which needs the data
// with UserProvider and in its props, a special prop
// value is there, whichever data we want to send
// from context, we can pass in this value prop

// In component that received the component, we can use the
// UserConsumer method through which we can recieve the data directly to 
// the child component without having to send props
// to every in between component

// We can also pass default value to createContext method, 
// if no provider is passed, this default value will be used

// Also, we can use multiple contexts at once
// For ex: 

// <ThemeContext.Consumer>
//  {theme => (
//    <UserContext.Consumer>
//  {user => (
//      <h1>{theme} {user}</h1>   
// )}
// </UserContext.Consumer>
// )}
// </ThemeContext.Consumer>