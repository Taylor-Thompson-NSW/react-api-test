import axios from "axios";

export const createUser = (newUser) => {
  return axios.post(`/users`, newUser);
};
export const getUsers = async () => {
  const response = await axios.get("/users");
  return response.data;
};

export const getUser = async (id) => {
  const response = await axios.get(`/users/${id}`);
  return response.data;
};

export const updateUser = async (id, currentUser) => {
  return await axios.patch(`/users/${id}`, currentUser);
};

export const deleteUser = async (id) => {
  return await axios.delete(`/users/${id}`);
};
