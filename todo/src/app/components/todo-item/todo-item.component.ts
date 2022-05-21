import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/models/todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todos = new Todos;
  @Output() deleteTodo: EventEmitter<Todos> = new EventEmitter();
  @Output() doneTodo: EventEmitter<Todos> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.deleteTodo.emit(this.todo);
  }

  onDone(){
    this.doneTodo.emit(this.todo)
  }

}
