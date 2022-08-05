import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useDeleteUsers = () => {
  useMutation((id) => {
    return axios.delete(`/users/${id}`);
  });
};
