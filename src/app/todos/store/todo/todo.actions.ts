import {Action} from "@ngrx/store";


export enum todoActionType {
  create = 'TODO create entry',
  edit = 'TODO edit entry',
  enableEditMode = 'TODO enable edit mode entry',
  disableEditMode = 'TODO disable edit mode entry',
  delete = 'TODO delete entry',
  complete = 'TODO complete entry'
}


export class CreateTodoAction implements Action {
  readonly type: string = todoActionType.create
  constructor(public payload: {text: string}) {}
}

export class EditTodoAction implements Action {
  readonly type: string = todoActionType.edit
  constructor(public payload: {id: number, text: string}) {}
}

export class EnableEditModeTodoAction implements Action {
  readonly type: string = todoActionType.enableEditMode
  constructor(public payload: {id: number}) {}
}

export class DisableEditModeTodoAction implements Action {
  readonly type: string = todoActionType.disableEditMode
  constructor(public payload: {id: number}) {}
}

export class DeleteTodoAction implements Action {
  readonly type: string = todoActionType.delete
  constructor(public payload: {id: number}) {}
}

export class CompleteTodoAction implements Action {
  readonly type: string = todoActionType.complete
  constructor(public payload: {id: number}) {}
}




export type TodoAction = CreateTodoAction | EditTodoAction | DeleteTodoAction | CompleteTodoAction | EnableEditModeTodoAction | DisableEditModeTodoAction;
