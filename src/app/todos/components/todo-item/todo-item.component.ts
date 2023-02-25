import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {TodoState} from "../../store/todo/todo.reducer";
import {
  CompleteTodoAction,
  DeleteTodoAction, DisableEditModeTodoAction,
  EditTodoAction, EnableEditModeTodoAction
} from "../../store/todo/todo.actions";
import {FormControl} from "@angular/forms";

export interface TodoItem {
  id: number,
  text: string,
  completed: boolean,
  editMode: boolean
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input()
  public todoData!: TodoItem;

  public editControl!: FormControl;
  public checkBox!: FormControl;

  constructor(public store: Store<TodoState>) {}


  onDelete() {
    this.store.dispatch(new DeleteTodoAction({id: this.todoData.id}))
  }

  ngOnInit(): void {
    this.editControl = new FormControl<any>(this.todoData?.text);
    this.checkBox = new FormControl<any>(this.todoData.completed);
  }

  onEdit() {
    if (this.todoData.completed) return;
    this.store.dispatch(new EnableEditModeTodoAction({id: this.todoData.id}))
    this.editControl.reset(this.todoData?.text)
  }

  onSaveEdit() {
    this.store.dispatch(new EditTodoAction({id: this.todoData.id, text: this.editControl.value}))
    this.store.dispatch(new DisableEditModeTodoAction({id: this.todoData.id}))
  }

  onResetEdit() {
    this.store.dispatch(new DisableEditModeTodoAction({id: this.todoData.id}))
  }

  onComplete(event: Event) {
    event.preventDefault();
    if (this.todoData.editMode) {
      this.store.dispatch(new DisableEditModeTodoAction({id: this.todoData.id}))
    }
    this.store.dispatch(new CompleteTodoAction({id: this.todoData.id}))
  }
}
