import {
  ADD_TODO,
  TOGGLE_TODO,
  SELECT_COLOR,
  DELETE_TODO,
  CLEAR_COMPLETED_TODOS,
  ADD_COLOR,
  DELETE_COLOR,
} from "./constants";

export const addTodo = () => {
  return {
    type: ADD_TODO,
    text,
    color
  }
}

export const toggleTodo = () => {
  return {
    type: TOGGLE_TODO,
    //todo id?
  }
}

export const selectColor = () => {
  return {
    type: SELECT_COLOR,
    //color
  }
}

export const deleteTodo = () => {
  return {
    type: DELETE_TODO,
    //todo id
  }
}

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED_TODOS,
    //todo completed true status
  }
}
export const addColor = () => {
  return {
    type: ADD_COLOR,
  }
}
export const deleteColor = () => {
  return {
    type: DELETE_COLOR,
  };
};
