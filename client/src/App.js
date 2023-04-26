import './App.css';
// import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
// import Hero from './components/ErrorBoundary/Hero';
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';
// import PortalDemo from './components/Portal/PortalDemo';
// import FRParent from './components/Refs/FRParent';
// import FocusInput from './components/Refs/FocusInput';
// import FragmentDemo from './components/Fragment/FragmentDemo';
// import Table from './components/Fragment/Table';
// import ParentComp from './components/PureComponent/ParentComp';
// import RefsDemo from './components/Refs/RefsDemo';
// import Form from './components/form/Form';
// import LifeCycleA from './components/lifeCycleMethod/LifeCycleA';
// import {Greet} from './components/Greet';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import MessageClass from './components/MessageClass';
// import MessageStateHook from './components/MessageStateHook';
// import CounterClass from './components/CounterClass';
// import EventBind from './components/EventBind';
// import ParentComponents from './components/ParentComponents';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import StyleSheet from './components/StyleSheet';
function App() {
  return (
    <div className="App">
        <h1>Hello React I'm Software Developer!</h1>
        <HoverCounter/>
        <ClickCounter name="Vivek"/>
        {/* <ErrorBoundary>
          <Hero heroName="superman"/>
        </ErrorBoundary> */}
        {/* <ErrorBoundary>
          <Hero heroName="batman"/>
        </ErrorBoundary> */}
        {/* <ErrorBoundary>
          <Hero heroName="Jocker"/>
        </ErrorBoundary> */}
        {/* <PortalDemo/> */}
        {/* <FRParent/> */}
        {/* <FocusInput/> */}
        {/* <RefsDemo/> */}
        {/* <ParentComp/> */}
        {/* <Table/> */}
        {/* <FragmentDemo/> */}
        {/* <LifeCycleA/> */}
        {/* <Form/> */}
        {/* <StyleSheet primary={true}/> */}
        {/* <NameList/> */}
        {/* <UserGreeting/> */}
        {/* <EventBind/> */}
        {/* <ParentComponents/> */}
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
