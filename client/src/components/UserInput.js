export default function UserInput({name, setName, age, setAge, createUser}) {

  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        T
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Name"
        aria-label="Name"
        aria-describedby="basic-addon1"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Age"
        aria-label="Age"
        aria-describedby="basic-addon1"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={createUser}
      >
        Add User
      </button>
    </div>
  );
}
