import UserDeleteButton from "./UserDeleteButton.js";
import UserListItems from "./UserListItems.js";
export default function UsersList({ users, deleteUser, modalIsOpen, modalOpen, modalClose }) {
  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <div>
              <UserListItems
                user={user}
                deleteUser={deleteUser}
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
