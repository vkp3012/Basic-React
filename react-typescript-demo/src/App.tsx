import './App.css';
// import { Button } from './components/Event/Button';
// import { Input } from './components/Event/Input';
// import { Container } from './components/Props/Container';
// import { Heading } from './components/Props/Heading';
// import { Oscar } from './components/Props/Oscar';
// import { Greet } from './components/Props/Greet';
// import { Person } from './components/Props/Person';
// import { PersonList } from './components/Props/PersonList';
// import { Status } from './components/Props/Status';
import { User } from './components/UseState/User';

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
      {/* props */}
      {/* <Greet name="Vivek" messageCount={10} isLoggedIn = {true}/> */}
      {/* optional method */}
      {/* <Greet name="Vivek"  isLoggedIn = {true}/>
      <Person name={PersonName}/>
      <PersonList names={nameList}/>
      <Status status='error'/>
      <Heading>Placeholder - Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Vivek!</Heading>
      </Oscar>

      <Button handleClick={(event,id)=>{
        console.log("Button Clicked",event,id);
      }}/>

      <Input value='' handleChange={(event)=>console.log(event)}/>
      <Container styles={{border:'1px solid black',padding:'1rem'}}/> */}

      {/* useState */}
      <User/>
    </div>
  );
}

export default App;
