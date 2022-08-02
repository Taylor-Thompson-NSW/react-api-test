function UserDeleteButton({ id, deleteUser }) {
  return (
    <button className="btn" type="button" onClick={() => deleteUser(id)}>
      Delete User
    </button>
  );
}

export default UserDeleteButton;
