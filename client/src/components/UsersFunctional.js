import { useState, useEffect } from "react";

import UserInput from "./UserInput.js";
import UsersList from "./UsersList.js";

export default function UsersFunctional() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  async function getUsers() {
    await fetch("/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }

  useEffect(() => {
    getUsers();
  });

  const newUserSchema = {
    name: name,
    age: age,
  };

  const createUser = () => {
    fetch(`/users`, {
      method: "POST",
      body: JSON.stringify(newUserSchema),
      headers: { "Content-Type": "application/json" },
    });
  };

  const deleteUser = (id) => {
    fetch(`users/${id}`, {
      method: "DELETE",
    })
      .then((data) => console.log(data))
      .then((err) => console.log(err));
  };

  //TODO Create PATCH functionality

  return (
    <>
      <UsersList users={users} deleteUser={(id) => deleteUser(id)}></UsersList>
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
