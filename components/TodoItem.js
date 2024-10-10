"use client";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../store/todoSlice";
import { Button, Checkbox } from "antd";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id)); // Dispatch the deleteTodo action with API call
  };

  const handleToggle = () => {
    const updatedTodo = {
      ...todo,
      completed: !todo.completed,
    };
    dispatch(updateTodo(updatedTodo)); // Dispatch the updateTodo action with API call
  };

  return (
    <div className="flex justify-between p-2 border-b">
      <Checkbox checked={todo.completed} onChange={handleToggle}>
        {todo.title}
      </Checkbox>
      <Button type="primary" danger onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
