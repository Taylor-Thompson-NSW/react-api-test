import UserDeleteButton from "./UserDeleteButton.js";
import UserEditModal from "./UserEditModal.js";
export default function UserListItems({
  user,
  name,
  setName,
  age,
  setAge,
  newName,
  setNewName,
  newAge,
  setNewAge,
  setUsers,
  users,
  deleteUser,
  updateUser,
  modalIsOpen,
  modalOpen,
  modalClose,
}) {
  return (
    <ul>
      <li class="h4">Name: {user.name}</li>
      <li class="h4">Age: {user.age}</li>
      <button class="btn" onClick={modalOpen}>
        Edit User
      </button>
      <UserEditModal
        user={user}
        name={user.name}
        setName={setName}
        id={user._id}
        age={user.age}
        setAge={setAge}
        newName={newName}
        setNewName={setNewName}
        newAge={newAge}
        setNewAge={setNewAge}
        deleteUser={deleteUser}
        updateUser={updateUser}
        modalIsOpen={modalIsOpen}
        modalOpen={modalOpen}
        modalClose={modalClose}
      ></UserEditModal>
      <UserDeleteButton
        id={user._id}
        deleteUser={deleteUser}
      ></UserDeleteButton>
    </ul>
  );
}
