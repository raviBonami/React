
// A class component that implements either
// one or both of the liffecycle methods 
// getDerivedStateFromError or componentDidCatch becomes an
// Error boundary

// These are used to provide fallback UI if any error
// occured while rendering our DOM tree
// getDerivedStateFromError is used to render a fallback UI 
// after error is thrown 
// componentDidCatch is used to log the error information

import React from 'react'

function ErrorBoundary({name}) {
    if(name === "Jack"){
        throw new Error('Not allowed')
    }
  return (
    <div>{name}</div>
  )
}

export default ErrorBoundary

// Also, we should wrap individual children components
// under error boundary component as just because one
// of the component is throwing error doesn't mean
// all others should also not work