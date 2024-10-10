"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { fetchTodos } from "../store/todoSlice";
import { Spin } from "antd";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, status, error } = useSelector((state) => state.todos);

  // Fetch todos on component load
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTodos());
    }
  }, [dispatch, status]);

  // Conditional rendering based on API state
  let content;

  if (status === "loading") {
    content = <Spin size="large" />;
  } else if (status === "succeeded") {
    content = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }

  return <div className="flex flex-col space-y-2">{content}</div>;
};

export default TodoList;
