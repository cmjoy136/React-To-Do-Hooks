import {
  ADD_TODO,
  TOGGLE_TODO,
  SELECT_COLOR,
  DELETE_TODO,
  CLEAR_COMPLETED_TODOS,
  ADD_COLOR,
  DELETE_COLOR,
} from "./constants";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export const selectColor = (color) => {
  return {
    type: SELECT_COLOR,
    color
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED_TODOS,
    //todo completed true status
  }
}
export const addColor = (color) => {
  return {
    type: ADD_COLOR,
    color
  }
}
export const deleteColor = (color) => {
  return {
    type: DELETE_COLOR,
    color
  };
};
