import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/actions";

const TodoForm = () => {
  const [textValue, setTextValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTextValue(e.target.value);
  };

  const addTodoFn = (e) => {
    if (e.key === "Enter") {
      dispatch(addTodo(textValue, "red"));
    }
  };

  return (
    <div className="todoForm">
      <input
        placeholder="What needs to be done"
        value={textValue}
        onChange={handleChange}
        onKeyDown={addTodoFn}
      ></input>
    </div>
  );
};

export default TodoForm;
