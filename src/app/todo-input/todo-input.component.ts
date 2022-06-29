import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  @Input("addTodo") addTodo = (text:string) => {};  // addTodo from app component

  public text = "";
  
  // Adds Todo if the length is > 0
  addTodoHandler = () => {
    if(this.text.trim().length > 0) {
      this.addTodo(this.text.trim());
      this.text = "";  // clears the input
    }
  }

  // If enter is pressed: triggers the addTodo click event
  keyPressHandler = (e:KeyboardEvent) => {
    if(e.key === "Enter"){
      this.addTodoHandler();
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
