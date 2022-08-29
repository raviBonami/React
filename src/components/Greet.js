
const Greet = ({name, children}) => {
    // We can destructure either in parameters itself or inside the function, shown below
    // const {name, children} = props;
    // const [state1, setState1] = useState('')
    return (
        <div>
            <h1>Hello from {name}</h1>
            {children}
        </div>
    )
}

export default Greet
// if component is default export, it is exported as default function, so
// wherever we are importing it, we can use any name for it

// export const Greet = this is named export, so not default,
// if we want to import it somewhere, we will have to use exact same
// name as the function name

// Also { Greet } => use import like this if exporting as const

// Preference is for arrow functions
// function Greet(){
//     return (
//         <div>
//             <h1>Hello from Greet</h1>
//         </div>
//     )
// }

// Also, there is no "this" in functional components, hence are better than 
// class components

// For state management
// 1. class component - have lifecycle methods
// 2. functional component - have react hooks

// JSX - extension to JS language syntax
// html + JS = JSX
// Under the hood for JSX -
// React.createElement(<element that we want to create> , 
// <Additional properties we want to give>, <any children that we want our element to have>)
// React.createElement('div', null, Raect.createElement('h1', {id: 'hello', name:"abc"}, "h1 text"))

// We can see how cumbersome it will be if we were to return multiple elements

// Diff b/w html and JSX
// class - className
// for - htmlFor

// Props - properties that your component can recieve from parent

// {dynamic values} - dynamic values are used b/w {} in JSX

// We can return only one element in JS return value

// Also, props are immutable - can't change value of props inside
// component

// State -any data that might change inside a component is called
// state. 
// Diff from props as props are passed on from parent component 
// whereas state is component's own data
// Props - similar to function parameters, 
// immutable - can't be changed
// props in functional, this.props in class component

// state - similar to variables declared within the body, 
// can be changed by the component
// useState - functional, this.state in class based
