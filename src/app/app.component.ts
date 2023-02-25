import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, State, Store} from "@ngrx/store";
import {TodoState} from "./todos/store/todo/todo.reducer";
import {TodoItem} from "./todos/components/todo-item/todo-item.component";
import {Subscription} from "rxjs";
import {todoListSelector} from "./todos/store/todo/todo.selector";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['/app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {

  todos: TodoItem[] = [];
  todoSub!: Subscription;

  constructor(private store: Store<TodoState>) {}

  ngOnInit(): void {
    this.todoSub = this.store.pipe(select(todoListSelector)).subscribe(list => this.todos = list);
  }

  ngOnDestroy(): void {
    this.todoSub.unsubscribe()
  }


}
