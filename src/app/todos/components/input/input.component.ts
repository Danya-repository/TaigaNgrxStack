import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {TodoState} from "../../store/todo/todo.reducer";
import {CreateTodoAction} from "../../store/todo/todo.actions";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit{

  newTodoText: FormControl = new FormControl('', Validators.required)

  constructor(private store: Store<TodoState>) {}

  ngOnInit(): void {}

  onAddTodo() {
    if (this.newTodoText.invalid) return
    this.store.dispatch(new CreateTodoAction({text: this.newTodoText.value}))
    this.newTodoText.reset()
  }
}
