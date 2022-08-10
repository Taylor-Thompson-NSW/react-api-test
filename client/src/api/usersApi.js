import axios from "axios";

export const createUser = (newUserSchema) => {
  return axios.post(`/users`, newUserSchema);
};
export const getUsers = async () => {
  const response = await axios.get("/users");
  return response.data;
};

export const getUser = async (id) => {
  const response = await axios.get(`/users/${id}`);
  return response.data;
};

export const updateUser = async (id, editUserSchema) => {
  return await axios.patch(`/users/${id}`, editUserSchema);
};

export const deleteUser = async (id) => {
  return await axios.delete(`/users/${id}`);
};
