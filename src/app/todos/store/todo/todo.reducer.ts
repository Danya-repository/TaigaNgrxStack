import {TodoAction, todoActionType} from "./todo.actions";
import {TodoItem} from "../../components/todo-item/todo-item.component";

export const TODO_REDUCER_NAME = 'todo';

export interface TodoState {
  idIncrement: number,
  todoList: TodoItem[];
}

const initialState: TodoState = {
  idIncrement: 0,
  todoList: []
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction) => {
  switch (action.type) {
    case (todoActionType.create):
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        todoList: [
          ...state.todoList, {
            id: state.idIncrement,
            // @ts-ignore
            text: action.payload.text,
            completed: false
          }
        ]
      }
    case (todoActionType.edit):
      return {
        ...state,
        // @ts-ignore
        todoList: state.todoList.map(todo => todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo)
      }
    case (todoActionType.complete):
      return {
        ...state,
        // @ts-ignore
        todoList: state.todoList.map(todo => todo.id === action.payload.id ? {...todo, completed: true} : todo)
      }
    case (todoActionType.enableEditMode):
      return {
        ...state,
        // @ts-ignore
        todoList: state.todoList.map(todo => todo.id === action.payload.id ? {...todo, editMode: true} : todo)
      }
    case (todoActionType.disableEditMode):
      return {
        ...state,
        // @ts-ignore
        todoList: state.todoList.map(todo => todo.id === action.payload.id ? {...todo, editMode: false} : todo)
      }
    case (todoActionType.delete):
      return {
        ...state,
        idIncrement: state.idIncrement - 1,
        // @ts-ignore
        todoList: state.todoList.filter(item => item.id != action.payload.id)
      }
    default:
      return {...state}
  }
}
