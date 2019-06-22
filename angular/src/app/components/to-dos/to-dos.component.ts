import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  constructor(private todoService:TodoService) { }
  todos:Todo[];
  ngOnInit()
  {
    this.todoService.getTodos().subscribe(todos =>
      {
        this.todos = todos;

      });
  }
  deleteTodo(todo:Todo)
  {
    //remove from UI
    this.todos = this.todos.filter (t =>t.id !==todo.id );
    // remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }
  addTodo(todo:Todo)
  {
    //remove from UI
    this.todoService.addTodo(todo).subscribe( todo =>
      {
        this.todos.push(todo);
      });
  }
}
