import http from "@/lib/http";
import type { Todo } from "./types";

export const getPost = async (id: string) => {
  return (await http.get<Todo>(`/post/${id}`)).data;
};

export const getPosts = async (page: number, limit: number) => {
  return (await http.get<Todo>(`/post`, { params: { page, limit } })).data;
};
