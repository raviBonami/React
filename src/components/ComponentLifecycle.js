
// Lifecycle methods - 
// Applied on class based components only

// 4 phases are there - 
// 1. Mounting - instance of a component is created and inserted into DOM
// 2. Updating - component is being re-rendered as result of changes to either its props or state
// 3. Unmounting - component is being removed from DOM
// 4. Error handling - error during rendering


// Each phases have their own inner phases
// Mounting - 1. constructor
//            2. static getDerivedStateFromProps
//            3. render
//            4. componentDidMount 

// Updating - 1. static getDerivedStateFromProps
//            2. shouldComponentUpdate
//            3. render
//            4. getSnapshotBeforeUpdate
//            5. componentDidUpdate

// Unmounting - 1. componentWillUnmount

// Error handling - 1. static getDerivedStateFromError
//                  2. componentDidCatch

///////////////////////////////////////////////////////

// 1. Mounting Phase - 
// a. constructor - special function gets called whenever a new component is created
// used for initializing state, binding event handlers
// do not make http calls inside constructor (no side-effects allowed)
// only place where we can diretly use 'this.state = '

// b. static getDerivedStateFromProps - used when the state of the component depends upon changes
// in props
// used for setting the state
// do not cause side-effects in this function

// c. render - only mandatory method in class components
// reads props and state and returns JSX
// do not change state or interact with DOM or make AJAX calls
// whenever render method is invoked and a component get re-rendered, 
// its children also get re-rendered

// d. componentDidMount - invoked immeadiately after a component and all its 
// children components have been rendered to the DOM

// 2. Updating Phase - 
// a. static getDerivedStateFromProps - used when the state of the component depends upon changes
// in props
// used for setting the state
// do not cause side-effects in this function

// b. shouldComponentUpdate(nextProps, nextState) - 
// receives updated props and states and determines whether a component
// should be re-rendered or not based on received props and states
// avoid any side-effects

// c. render - only mandatory method in class components
// reads props and state and returns JSX
// do not change state or interact with DOM or make AJAX calls
// whenever render method is invoked and a component get re-rendered, 
// its children also get re-rendered

// d. getSnapshotBeforeUpdate(prevProp, prevState) -
// called right before the changes from virtual DOM are to be
// reflected in real DOM
// used to capture information from the DOM (cursor position)
// either returns null or return a value
// returned value is passed as third parameter to componentDidUpdate method 

// e. componentDidUpdate(prevProps, prevState, snapshot) - 
// called after render is finished in re-render cycles
// if called means that parent and all its children component
// are rendered correctly
// It is guaranteed to be rendered after each re-render cycle 
// so we can perform side-effects here

// 3. Unmounting phase - 
// a. componentWillUnmount() - 
// Method is invoked immeadiately before a component is unmounted
// and destroyed
// Can perform any n/w requests, removing event handlers, cancelling 
// any subscriptions , invalidating timers
// Never call setState() in this as after this, component is never rendered again

// 4. Error handling phase - 
// a. static getDerivedStateFromError(error) - 
// b. componentDidCatch(error, info)
// When there is an error either during rendering or in 
// constructor of any child component
