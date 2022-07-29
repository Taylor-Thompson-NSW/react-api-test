import UserDeleteButton from "./UserDeleteButton.js";
import UserListItems from "./UserListItems.js";
export default function UsersList({ users, deleteUser }) {
  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <div>
              <UserListItems
                user={user}
                deleteUser={deleteUser}
              ></UserListItems>
            </div>
          </div>
        );
      })}
    </div>
  );
}
