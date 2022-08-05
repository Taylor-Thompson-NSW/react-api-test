import { useQuery } from "@tanstack/react-query";
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
        <ul>
          <li className="h4">Name: {userData.name}</li>
          <li className="h4">Age: {userData.age}</li>
          
        </ul>
      );
    })
  );
}
