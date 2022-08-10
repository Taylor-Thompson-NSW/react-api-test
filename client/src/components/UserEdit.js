import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
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
    name: currentName,
    age: currentAge,
  };

  const mutation = useMutation((editUserSchema) => {
    updateUser(id, editUserSchema);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(editUserSchema, id);
  };

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

      {mutation.isSuccess ? (
        <div>
        <br />
          <h3>User Updated!</h3>
        </div>
      ) : null}
      {mutation.isError ? (
        <h3>An error occurred: {mutation.error.message}</h3>
      ) : null}
      {mutation.isLoading ? <h3>Updating User...</h3> : null}
    </div>
  );

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
