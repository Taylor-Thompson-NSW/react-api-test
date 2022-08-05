import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUser } from "../api/usersApi";

export default function UserDetail() {
  const {id}= useParams();
  const user = useQuery(["user", id], () => getUser(id));
  console.log(user);

  const userData=user.data;

  return user.isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      <li className="h4">Name: {userData.name}</li>
      <li className="h4">Age: {userData.age}</li>
    </ul>
  );
}
