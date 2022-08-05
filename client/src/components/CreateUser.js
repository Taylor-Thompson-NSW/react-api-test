import {useMutation} from "@tanstack/react-query";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {createUser} from "../api/usersApi";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const newUserSchema = {
    name: name,
    age: age,
  };

  const mutation = useMutation((newUserSchema) => {
    return createUser(newUserSchema);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(newUserSchema);
  }

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="age" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}/>
        </Form.Group>
        <Button
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
