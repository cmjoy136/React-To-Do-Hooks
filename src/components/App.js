import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./Header";
import TodoForm from './TodoForm'
import TodoList from "./TodoList";

const App = () => {
  const todos = useSelector(state => state.todos.todos);


    return (
      <div className="App">
        <Header />
        <TodoForm/>
        <TodoList
          todos={todos}
        />
      </div>
    );
  
}

export default App;
