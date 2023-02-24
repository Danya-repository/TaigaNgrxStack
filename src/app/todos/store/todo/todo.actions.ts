import {Action} from "@ngrx/store";


export enum todoActionType {
  create = 'TODO create entry',
  edit = 'TODO edit entry',
  delete = 'TODO delete entry',
  complete = 'TODO complete entry'
}


export class CreateTodoAction implements Action {
  readonly type: string = todoActionType.create
  constructor(public payload: {text: string, id: number}) {}
}

export class EditTodoAction implements Action {
  readonly type: string = todoActionType.edit
  constructor(public payload: {text: string, id: number}) {}
}

export class DeleteTodoAction implements Action {
  readonly type: string = todoActionType.delete
  constructor(public payload: {id: number}) {}
}

export class CompleteTodoAction implements Action {
  readonly type: string = todoActionType.complete
  constructor(public payload: {id: number}) {}
}




export type TodoAction = CreateTodoAction | EditTodoAction | DeleteTodoAction | CompleteTodoAction
