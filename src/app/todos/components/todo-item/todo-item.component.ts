import { Component } from '@angular/core';

export interface TodoItem {
  id: number,
  text: string,
  completed: boolean
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less']
})
export class TodoItemComponent {

}
