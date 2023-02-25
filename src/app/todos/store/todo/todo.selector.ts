import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TODO_REDUCER_NAME, TodoState} from "./todo.reducer";

export const todoFeatureSelector = createFeatureSelector<TodoState>(TODO_REDUCER_NAME)

export const todoListSelector = createSelector(todoFeatureSelector, state => state.todoList)
