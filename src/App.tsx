import './App.css';
import {User, Person} from "./Person";
import { UserContextProvider } from './UserContextProvider';


function App() {
  const person: Person = {
    name: "Yuzan",
    age: 27,
    isMarried: false
  };
  

  return ( 
    <UserContextProvider>
    {/* <Person name={person.name} age={person.age} isMarried={person.isMarried}/> */}
    <User person = {person}/>

    </UserContextProvider>
  )
}

export default App
