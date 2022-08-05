import axios from "axios"

//export const getUsers = async () => {
//  const response = axios.get('/users');
//  const {data: users} = response.data;
//  return users;
//};

export async function getUsers() {
  const response = await axios.get('/users')
  return response.data
}
