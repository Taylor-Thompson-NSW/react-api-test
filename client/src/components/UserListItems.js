import UserDeleteButton from "./UserDeleteButton.js";

export default function UserListItems({ user, deleteUser }) {
  return (
    <ul>
      <li>Name: {user.name}</li>
      <li>Age: {user.age}</li>
      <UserDeleteButton
        id={user._id}
        deleteUser={deleteUser}
      ></UserDeleteButton>
    </ul>
  );
}
