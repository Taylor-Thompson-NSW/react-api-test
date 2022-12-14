import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createUser } from "../api/usersApi";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [newUser, setNewUser] = useState({});

  const mutation = useMutation((newUser) => {
    return createUser(newUser);
  });

  const onClickUpdateUser = () => {
    setNewUser(prev => ({...prev, name:name, age:age}));

  }

  const handleSubmit = (e) => {
    console.log(newUser)
    mutation.mutate(newUser);
    e.preventDefault();
  };

  return (
    <>
  
    {/* TODO: Form validation */}

      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="age"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" onClick={onClickUpdateUser}>Submit</Button>
        </Form>
      </div>

      {/* TODO: Fix mutation from hanging on isLoading "Creating User..." */}

      {mutation.isSuccess ? <h3>User Created!</h3> : null}
      {mutation.isError ? (
        <h3>An error occurred: {mutation.error.message}</h3>
      ) : null}
      {mutation.isLoading ? <h3>Creating User...</h3> : null}
    </>
  );
}
