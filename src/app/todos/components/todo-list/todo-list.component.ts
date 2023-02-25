import {Component, Input} from '@angular/core';
import {TodoItem} from "../todo-item/todo-item.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})

export class TodoListComponent {

  @Input()
  todoList!: TodoItem[];
}
