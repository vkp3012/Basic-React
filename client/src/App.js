import './App.css';
// import ClassCounter from './components/Hook/StateHook/ClassCounter';
// import HookCounter from './components/Hook/StateHook/HookCounter';
import Todo from './components/Hook/StateHook/Todo';
// import PostForm from './components/Http/PostForm';
// import ComponentC from './components/Context/ComponentC';
// import { UserProvider } from './components/Context/UserContext';
// import PostList from './components/Http/PostList';
// import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
// import Hero from './components/ErrorBoundary/Hero';
// import ClickCounter from './components/HOC/ClickCounter';
// import HoverCounter from './components/HOC/HoverCounter';
// import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
// import Counter from './components/RenderProps/Counter';
// import HoverCounterTwo from './components/RenderProps/HoverCounterTwo';
// import User from './components/RenderProps/User';
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
        <Todo/>
        {/* <HookCounter/> */}
        {/* <ClassCounter/> */}
        {/* <PostList/> */}
        {/* <PostForm/> */}
        {/* <UserProvider value="Vivek">
          <ComponentC/>
        </UserProvider> */}
        {/* <Counter 
          render={(count,incrementCount)=>(
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />
        <Counter 
          render={(count,incrementCount)=>(
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        /> */}
        {/* <HoverCounter/>
        <ClickCounter name="Vivek"/> */}
        {/* <ClickCounterTwo/>
        <HoverCounterTwo/>
        <ErrorBoundary> 
          <User render={(isLoggedIn)=>isLoggedIn ? "Vivek" : "Guest"}/>
        </ErrorBoundary> */}
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
