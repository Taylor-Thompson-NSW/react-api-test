import { useState, useEffect } from "react";

import UserInput from "./UserInput.js";
import UsersList from "./UsersList.js";

//TODO - MAJOR REFACTOR: THIS MAYBE BECOMES App.js AND WE REDESIGN COMPONENTS
//TO HAVE SUBSTANTIALLY LESS PROP DRILLING! :)
export default function UsersFunctional() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [modalIsOpen, setModalOpen] = useState(false);

  //state for editing a user
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

//  async function getUsers() {
//    try {
//      await fetch("/users")
//        .then((response) => response.json())
//        .then((users) => setUsers(users));
//    } catch (err) {
//      console.log(err.message);
//    }
//  }

  //TODO figure out this fetch infinte loop stuff. for now 
  //just giving it an empty dependency array so it loads once only. 

  const newUserSchema = {
    name: name,
    age: age,
  };

  const editUserSchema = {
    name: newName,
    age: newAge,
  };
  
  //TODO figure out how to have my list re-render on update

  const createUser = async () => {
    try {
      fetch(`/users`, {
        method: "POST",
        body: JSON.stringify(newUserSchema),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      fetch(`users/${id}`, {
        method: "DELETE",
      })
        .then((data) => console.log(data))
        .then((err) => console.log(err));
    } catch (err) {
      console.log(err.message);
    }
  };

  
  const updateUser = async (id) => {
    try {
      fetch(`/users/${id}`, {
        method: "PATCH",
        body: JSON.stringify(editUserSchema),
        headers: { "Content-Type": "application/json" },
      });

      modalClose();
      //setUsers(users.push({ name: newName, age: newAge }));
    } catch (err) {
      console.log(err.message);
    }
  };

  function modalOpen() {
    if (!modalIsOpen) {
      setModalOpen(true);
    }
  }
  function modalClose() {
    if (modalIsOpen) {
      setModalOpen(false);
    }
  }

  return (
    <>
      <UsersList
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        newName={newName}
        setNewName={setNewName}
        newAge={newAge}
        setNewAge={setNewAge}
        users={users}
        setUsers={setUsers}
        deleteUser={(id) => deleteUser(id)}
        updateUser={(id) => updateUser(id)}
        modalIsOpen={modalIsOpen}
        modalOpen={modalOpen}
        modalClose={modalClose}
      ></UsersList>

      <UserInput
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        createUser={createUser}
      ></UserInput>
    </>
  );
}
