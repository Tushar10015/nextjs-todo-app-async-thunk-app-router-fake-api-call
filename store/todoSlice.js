// store/todoSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state for todos
const initialState = {
  todos: [],
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

// API URLs
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Async thunk to fetch todos from JSONPlaceholder
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch(`${API_URL}?_limit=10`);
  const data = await response.json();
  return data;
});

// Async thunk to add a new todo
export const addTodo = createAsyncThunk("todos/addTodo", async (newTodo) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  const data = await response.json();
  return data;
});

// Async thunk to update a todo
export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (updatedTodo) => {
    const response = await fetch(`${API_URL}/${updatedTodo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    });
    const data = await response.json();
    return data;
  }
);

// Async thunk to delete a todo
export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return id;
});

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Fetch Todos
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Add Todo
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })

      // Update Todo
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload.id
        );
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })

      // Delete Todo
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
