import { useContext, useState } from "react";
import { UserContext } from "./UserContextProvider";

export interface Person {
  name: string;
  age: number;
  isMarried: boolean;

}
interface Props{
    person: Person
}

export const User = ({ person }: Props) => {
  const [isShowInfo, setShowInfo] = useState<boolean | null>(false);
  const [personBio, setPersonBio] = useState<string | null>(null);

  const {users} = useContext(UserContext);

  const toggleInfo = () => {
    setShowInfo((prev) => !prev);
  };

  const handlePersonBio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(e.target.value);
  }

  return <div>
    {isShowInfo && users?.map((user, index) => <p key={index}>Name: {user.name} Country: {user.country}</p>)}

    <p>
        {person.name} Bio: {!personBio ? "No bio available" : personBio}
    </p>

    <input type="text" onChange={(e) => {handlePersonBio(e)}} />
     
     <button onClick={toggleInfo}>Toggle Info</button>
  </div>;
};
