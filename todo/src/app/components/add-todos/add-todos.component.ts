import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/models/todos';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {
  @Output() addTodo: EventEmitter<Todos> = new EventEmitter();
  title:string = '';
  desc: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("title")
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.addTodo.emit(todo)
  }

}
