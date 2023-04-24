import './App.css';
// import {Greet} from './components/Greet';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import MessageClass from './components/MessageClass';
// import MessageStateHook from './components/MessageStateHook';
// import CounterClass from './components/CounterClass';
import EventBind from './components/EventBind';
function App() {
  return (
    <div className="App">
      <h1>Hello React I'm Software Developer!</h1>
      <EventBind/>
      {/* <CounterClass/> */}
      {/* <MessageClass/>
      <MessageStateHook/> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is a props children</p>
      </Greet> */}
      {/* <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Diana" heroName="Wonder Woman"/> */}
      {/* <Welcome name="Bruce" heroName="Batman">
        <button>Action</button>
      </Welcome> */}
      {/* <Welcome name="Clark" heroName="Superman"/> */}
      {/* <Welcome name="Diana" heroName="Wonder Woman"/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
