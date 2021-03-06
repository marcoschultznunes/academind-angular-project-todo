import { Component } from '@angular/core';
import Todo from './model/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* 
  AppComponent => Contains the Todos and the methods to add and delete them
*/
export class AppComponent {
  todos:Todo[] = [];

  addTodo = (text:string) => {
    this.todos.push(new Todo(text));
  };
  deleteTodo = (id:string) => {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
