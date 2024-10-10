import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}
