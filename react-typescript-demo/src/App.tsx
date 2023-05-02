import './App.css';
import { Heading } from './components/Props/Heading';
import { Oscar } from './components/Props/Oscar';
import { Greet } from './components/Props/Greet';
// import { Person } from './components/Props/Person';
// import { PersonList } from './components/Props/PersonList';
import { Status } from './components/Props/Status';

function App() {
  // const PersonName = {
  //   first : "Vivek",
  //   last : "Patel"
  // }
  // const nameList = [
  //   {
  //     first : "Bruce",
  //     last : "Wayne"
  //   },
  //   {
  //     first : "Clark",
  //     last : "Kent"
  //   },
  //   {
  //     first : "Princess",
  //     last : "Diana"
  //   }
  // ]

  return (
    <div className="App">
      {/* <Greet name="Vivek" messageCount={10} isLoggedIn = {true}/> */}

      {/* optional method */}
      <Greet name="Vivek"  isLoggedIn = {true}/>

      {/* <Person name={PersonName}/> */}
      {/* <PersonList names={nameList}/> */}
      <Status status='error'/>
      <Heading>Placeholder - Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Vivek!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
