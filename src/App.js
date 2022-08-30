
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ParentComponent from './components/ParentComponent';
import ConditionalRender from './components/ConditionalRender';
import RenderList from './components/RenderList';
import FormHandling from './components/FormHandling';
import LifeCycleA from './components/MountingPhase/LifeCycleA';
import Refs from './components/Refs';
import Portals from './components/Portals';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorBoundary2 from './components/ErrorBoundary2';
import ClickCounter from './components/HigherOrderComp/ClickCounter';
import HoverCounter from './components/HigherOrderComp/HoverCounter';
import RenderProps from './components/RenderProps/RenderProps';
import ClickCount from './components/RenderProps/ClickCount';
import HoverCount from './components/RenderProps/HoverCount';
import ComponentA from './components/Context/ComponentA';
import { UserProvider } from './components/Context/userContext'
import GetPosts from './components/Http/GetPosts';
import PostData from './components/Http/PostData';

function App() {
  const name = "Bruce"
  const age = 45
  return (
    <div className="App">
      {/* <h1>Hello world</h1>
      <Greet name={name}>
        <h1>Inner children component</h1>
      </Greet>
      <Welcome age={age} />

      <Message />

      <Counter /> */}
      {/* <FunctionClick />
       */}

      {/* <ParentComponent /> */}
      {/* <ConditionalRender /> */}
      {/* <RenderList /> */}
      {/* <FormHandling /> */}
      {/* <LifeCycleA /> */}
      {/* <Refs /> */}
      {/* <Portals /> */}
      {/* <ErrorBoundary2>
       <ErrorBoundary name="Henry"/>
       </ErrorBoundary2>
       <ErrorBoundary2>
       <ErrorBoundary name="Jack" />
       </ErrorBoundary2> */}
      {/* <ClickCounter  /> */}
      {/* <HoverCounter age="12" />*/}
      {/* <RenderProps render={(count, incrementCount) => (
        <ClickCount count={count} incrementCount={incrementCount} /> 
      ) } />

      <RenderProps render={( (count, incrementCount) => (
        <HoverCount count={count} incrementCount={incrementCount} />
      ))} /> */}
      {/* <UserProvider value="Mark" >
        <ComponentA />
      </UserProvider> */}
    {/* <GetPosts /> */}

    <PostData />

    </div>
  );
}

export default App;

/*

Class component
class App extends Component {
  render(){
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    )
  }
}

*/