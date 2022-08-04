import { useEffect } from "react";
import Modal from "react-modal";

export default function UserEditModal({
  modalIsOpen,
  modalClose,
  user,
  updateUser,
  id,
  name,
  setName,
  age,
  setAge,
  newName,
  setNewName,
  newAge,
  setNewAge,
}) {
  Modal.setAppElement(document.getElementById("root"));

  useEffect(() => {
    if (newName === "") {
      setNewName(user.name);
    }
    if (newAge === "") {
      setNewAge(user.age);
    }
  }, [newName, user.name, setNewName, newAge, user.age, setNewAge]);

  return (
    <Modal class="modal" isOpen={modalIsOpen}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
          </div>
          <div className="modal-body">
            <p>Hi</p>

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
                onChange={(e) => setNewName(e.target.value)}
                value={newName}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Age"
                aria-label="Age"
                aria-describedby="basic-addon1"
                value={newAge}
                onChange={(e) => setNewAge(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={() => updateUser(id)}
              >
                Add User
              </button>
            </div>
          </div>
          <div class="modal-footer">
            <button
              onClick={() => updateUser(id)}
              type="button"
              class="btn btn-primary"
            >
              Save changes
            </button>
            <button
              onClick={modalClose}
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
