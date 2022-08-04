import {useCallback, useEffect} from "react";
import UserDeleteButton from "./UserDeleteButton.js";
import UserListItems from "./UserListItems.js";
export default function UsersList({
  name,
  setName,
  age,
  setAge,
  newName,
  setNewName,
  newAge,
  setNewAge,
  users,
  setUsers,
  deleteUser,
  updateUser,
  modalIsOpen,
  modalOpen,
  modalClose,
}) {

  const getUsers = useCallback(async () => {
    try {
      await fetch("/users")
        .then((response) => response.json())
        .then((users) => setUsers(users));
    } catch (err) {
      console.log(err.message);
    }
  }, [setUsers]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="container containerPadding">
      {users.map((user) => {
        return (
          <div>
            <div>
              <UserListItems
                user={user}
                name={name}
                setName={setName}
                age={age}
                setAge={setAge}
                newName={newName}
                setNewName={setNewName}
                newAge={newAge}
                setNewAge={setNewAge}
                users={users}
                setUsers={setUsers}
                deleteUser={deleteUser}
                updateUser={updateUser}
                modalIsOpen={modalIsOpen}
                modalOpen={modalOpen}
                modalClose={modalClose}
              ></UserListItems>
            </div>
          </div>
        );
      })}
    </div>
  );
}
