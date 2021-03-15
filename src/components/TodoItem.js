import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../actions/actions";

const TodoItem = (props) => {
  const { id, text, completed, color } = props;
  const dispatch = useDispatch();

  return (
    <li
      className={`todo-item ${completed ? "completed" : ""}`}
      style={{ backgroundColor: color }}
      key={id}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo(id))}
      />
      <span>{text}</span>
      <button onClick={() => dispatch(deleteTodo(id))}>X</button>
    </li>
  );
};

export default TodoItem;
