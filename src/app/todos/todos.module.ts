import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputComponent} from "./components/input/input.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {TuiCheckboxModule, TuiInputModule, TuiTextAreaModule, TuiTilesModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {TODO_REDUCER_NAME, todoReducer} from "./store/todo/todo.reducer";
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    InputComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  exports: [
    InputComponent,
    TodoListComponent
  ],
  imports: [
    StoreModule.forFeature(TODO_REDUCER_NAME, todoReducer),
    CommonModule,
    TuiTilesModule,
    TuiButtonModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiTextAreaModule,
    TuiCheckboxModule
  ]
})
export class TodosModule { }
