import {TodoAction, todoActionType} from "./todo.actions";
import {TodoItem} from "../../components/todo-item/todo-item.component";

export const TODO_REDUCER_NAME = 'todo';

export interface TodoState {
  todoList: TodoItem[];
}

const initialState: TodoState = {
  todoList: []
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction) => {
  switch (action.type) {
    case (todoActionType.create):
      return {...state}
    case (todoActionType.edit):
      return {...state}
    case (todoActionType.complete):
      return {...state}
    case (todoActionType.delete):
      return {...state}
    default:
      return {...state}
  }
}
