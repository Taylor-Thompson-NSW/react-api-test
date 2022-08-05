import axios from "axios";

export const createUser = (id, newUserSchema) => {
  return axios.create(`/users/${id}`, newUserSchema);
};
export const getUsers = async () => {
  const response = await axios.get("/users");
  return response.data;
};

export const deleteUser = async (id) => {
  return await axios.delete(`/users/${id}`);
};

export const updateUser = async (id, editUserSchema) => {
  return await axios.patch(`/users/${id}`, editUserSchema);
};
