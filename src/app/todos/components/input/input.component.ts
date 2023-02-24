import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit{

  newTodoText: FormControl = new FormControl('', Validators.required)

  constructor() {}

  ngOnInit(): void {}

  onAddTodo() {
    console.log(this.newTodoText.value)
  }
}
