# Next.js Todo App with Redux, Redux Toolkit, Ant Design, and Tailwind CSS

This is a **Todo CRUD application** built with **Next.js** using the latest App Router, **Redux** for state management, **Redux Toolkit** for efficient state logic, **Ant Design** for UI components, and **Tailwind CSS** for utility-first styling.

## Features

- **Next.js**: Utilizes the latest App Router for file-based routing and modern Next.js features.
- **Redux**: Manages application state using a global store.
- **Redux Toolkit**: Simplifies Redux logic with slices and reducers.
- **Tailwind CSS**: Provides a customizable utility-based styling approach.
- **Ant Design**: Adds beautiful UI components for layout and interaction.
- **CRUD Functionality**: Create, Read, Update, and Delete tasks in the Todo app.

## Technologies Used

- **Next.js (App Router)**
- **React**: Core UI framework.
- **Redux Toolkit**: For state management.
- **Ant Design**: For professional-looking UI elements.
- **Tailwind CSS**: For modern, responsive design.
- **JavaScript (ES6+)**: Used throughout the project.
- JSONPlaceholder API: Fetches, adds, updates, and deletes todos from an external API.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nextjs-todo-app.git
   cd nextjs-todo-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
my-todo-app/
├── app/               # Next.js App Router files (layout, page, etc.)
├── components/        # Reusable components like TodoList, TodoItem, AddTodo
│   ├── AddTodo.js     # Component for adding todos
│   ├── TodoItem.js    # Single todo item component
│   └── TodoList.js    # List of all todos
├── store/             # Redux store and slices
│   ├── store.js       # Redux store configuration
│   └── todoSlice.js   # Redux slice for todos
├── styles/            # Global styles and Tailwind configuration
│   └── globals.css    # Global CSS with Tailwind imports
├── public/            # Static assets like images
├── package.json       # Project metadata and dependencies
└── tailwind.config.js # Tailwind CSS configuration
```

## How to Use

1. **Add Todo**: Use the input field to add a new task to your list.
2. **Delete Todo**: Click the "Delete" button to remove a task.
3. **Edit Todo**: (Coming soon) Functionality to edit a todo.

## Available Scripts

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm start`: Runs the production build.

## Dependencies

- **Next.js**
- **React**
- **Redux Toolkit**
- **Ant Design**
- **Tailwind CSS**

## Future Enhancements

- Add **update** functionality to edit existing todos.
- Add **local storage** to persist todos across sessions.
- Enhance UI/UX with more Ant Design components.

## License

This project is licensed under the MIT License.

---

Feel free to adjust this README to better suit your specific project needs!
