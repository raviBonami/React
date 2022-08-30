
// Context - due to drawbacks of passing props
// from very high parent component to a very 
// nested prop component, we have to send props to every single 
// element that is present in between them, this causes
// us to pass props at each component that lies in between them
// This is prop drilling and it negatively effects our application
// if it is done very deep

// To prevent this, we can use Context
// It is a way to provide/pass data through the component tree
// without having to pass props down manually at every level

// To use context, there are basically 3 steps - 
// 1. Create a context
// 2. Provide a context value
// 3. Consume the context value