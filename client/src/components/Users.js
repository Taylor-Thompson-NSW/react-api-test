import { useQuery } from "@tanstack/react-query";
import { ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { getUsers } from "../api/usersApi";

export default function Users() {
  const users = useQuery(["users"], getUsers);
  console.log(users);

  //getUsers()
  return users.isLoading ? (
    <div>
      <h3>Loading...</h3>
    </div>
  ) : (
    users.data.map((user) => {
      const userData = user;
      return (
        <ListGroup>
          <LinkContainer to={`/users/${user._id}`}>
            <ListGroup.Item action href="">
              {userData.name}
            </ListGroup.Item>
          </LinkContainer>
        </ListGroup>
      );
    })
  );
}
