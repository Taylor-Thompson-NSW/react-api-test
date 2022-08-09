import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, updateUser } from "../api/usersApi";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function UserEdit() {
  const [currentName, setCurrentName] = useState("");
  const [currentAge, setCurrentAge] = useState("");

  const { id } = useParams();

  const user = useQuery(["user", id], () => {
    getUser(id);
    const userData = user.data;
    setCurrentName(userData.name);
    setCurrentAge(userData.age);

  });

  const editUserSchema = {
    id: id,
    name: currentName,
    age: currentAge,
  };


  const mutation = useMutation((editUserSchema) => {
    console.log(editUserSchema, id)
    return updateUser(editUserSchema, id);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(editUserSchema, id);
  };

  console.log(currentName)

  return (

      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Name"
              value={currentName}
              onChange={(e) => setCurrentName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="age"
              placeholder="Age"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
  )

//  return user.isLoading ? (
//    <h3>Loading...</h3>
//  ) : (
//    <>
//      <div className="container">
//        <Form onSubmit={handleSubmit}>
//          <Form.Group className="mb-3" controlId="formName">
//            <Form.Label>Name</Form.Label>
//            <Form.Control
//              type="name"
//              placeholder="Enter Name"
//              value={currentName}
//              onChange={(e) => setCurrentName(e.target.value)}
//            />
//          </Form.Group>
//
//          <Form.Group className="mb-3" controlId="formAge">
//            <Form.Label>Age</Form.Label>
//            <Form.Control
//              type="age"
//              placeholder="Age"
//              value={currentAge}
//              onChange={(e) => setCurrentAge(e.target.value)}
//            />
//          </Form.Group>
//          <Button type="submit">Submit</Button>
//        </Form>
//      </div>
//    </>
//  );
}
