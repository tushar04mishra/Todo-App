import AppName from "./compponents/AppName";
import AddTodo from "./compponents/AddTodo";
import TodoItems from "./compponents/TodoItems";
import "./App.css";
import { useReducer, useState } from "react";
import WelcomeMessage from "./compponents/WelcomeMessage";
import { TodoItemsContextProvider } from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
