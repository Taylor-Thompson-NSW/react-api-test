import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import { deleteUser, getUser } from "../api/usersApi";

export default function UserDetail() {
  const { id } = useParams();
  const user = useQuery(["user", id], () => getUser(id));
  console.log(user);

  const userData = user.data;

  const mutation = useMutation((id) => {
    return deleteUser(id);
  });

  const handleClickForDelete = (e) => {
    mutation.mutate(id);
    e.preventDefault();
  };

  return user.isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <>
      <ul>
        <li className="h4">Name: {userData.name}</li>
        <li className="h4">Age: {userData.age}</li>
      </ul>
      <LinkContainer to={`/users/${userData._id}/edit`}>
        <Button>Edit User</Button>
      </LinkContainer>
      <Button onClick={handleClickForDelete}>Delete user</Button>
      {mutation.isSuccess ? (
        <>
          <h3>User Deleted!</h3>
          <div>
            <LinkContainer to={`/users`}>
              <Button type="button">All Users</Button>
            </LinkContainer>
          </div>
        </>
      ) : null}
      {mutation.isError ? (
        <h3>An error occurred: {mutation.error.message}</h3>
      ) : null}
      {mutation.isLoading ? <h3>Deleting User...</h3> : null}
    </>
  );
}
