"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { Input, Button } from "antd";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo.trim()) {
      const newTodo = {
        title: todo,
        userId: 1, // JSONPlaceholder requires userId
        completed: false,
      };
      dispatch(addTodo(newTodo)); // Dispatch the addTodo action with API call
      setTodo("");
    }
  };

  return (
    <div className="flex space-x-2">
      <Input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <Button type="primary" onClick={handleAddTodo}>
        Add
      </Button>
    </div>
  );
};

export default AddTodo;
