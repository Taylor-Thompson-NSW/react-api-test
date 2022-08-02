import UserDeleteButton from "./UserDeleteButton.js";
import UserEditModal from "./UserEditModal.js";
export default function UserListItems({ user, deleteUser, modalIsOpen, modalOpen, modalClose }) {
  return (
    <ul>
      <li class="h4">Name: {user.name}</li>
      <li class="h4">Age: {user.age}</li>
      <button class="btn" onClick={modalOpen}>Edit User</button>
      <UserEditModal modalIsOpen={modalIsOpen} modalClose={modalClose}></UserEditModal>
      <UserDeleteButton
        id={user._id}
        deleteUser={deleteUser}
      ></UserDeleteButton>
    </ul>
  );
}
