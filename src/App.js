
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
       <FormHandling />
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