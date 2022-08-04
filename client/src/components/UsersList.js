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
  deleteUser,
  updateUser,
  modalIsOpen,
  modalOpen,
  modalClose,
}) {



  return (
    <div className="container containerPadding" >
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
