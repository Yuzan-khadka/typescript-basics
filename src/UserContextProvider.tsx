import { createContext, useEffect, useState } from "react";
import { Countries } from "./CountriesEnum";

// Typescript in context Api
// 1. Define type for the data to be used
// 2. Define type for the return values of context
// 3. Pass those to the createContext type
// 4. Pass them as the value of the provider


export interface User {
  name: string;
  age: number;
  isMarried: boolean;
  country: Countries
}

const initialUsers = [
  {
    name: "Yuzan",
    age: 27,
    isMarried: false,
    country: Countries.Canada
  },

  {
    name: "Sanjay",
    age: 27,
    isMarried: false,
    country: Countries.Nepal
  },
];

interface UserContextType {
  users: User[] | null;
  addUser: (user: User) => void;
  updateUser: (id: string) => void;
  deleteUser: (id: string) => void;
}

const contextInititalValues = {
  users: null,
  addUser: () => null,
  updateUser: () => null,
  deleteUser: () => null,
};

export const UserContext = createContext<UserContextType>(contextInititalValues);

interface Props {
  children: React.ReactNode;
}

export const UserContextProvider = (props: Props) => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    setUsers(initialUsers);
  }, []);

  const addUser = (user: User) => null;
  const updateUser = (id: String) => null;
  const deleteUser = (id: String) => null;

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
