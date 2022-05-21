import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/models/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todos[];
  getTodo: string = '';
  constructor() {
    this.getTodo = localStorage.getItem('todos') || '{}'
    if(this.getTodo == null){
      this.todos = []

    }
    else{
      this.todos = JSON.parse(this.getTodo)
    }
  }

  ngOnInit(): void {
  }

  todoDelete(todo:Todos){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }

  todoAdd(todo:Todos){
    console.log(todo,'add todo')
    this.todos.push(todo)
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }

  todoDone(todo:Todos){
    console.log(todo,'toggle todo')
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem('todos',JSON.stringify(this.todos))

  }

}
