import { Component, Input, OnInit } from '@angular/core';
import Todo from '../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input("todosList") todos:Todo[] = [];  // todos from app component
  @Input("deleteTodo") deleteTodoHandler = (id:string) => {};  // deleteTodo from app component

  constructor() { }

  ngOnInit(): void {
  }

}
