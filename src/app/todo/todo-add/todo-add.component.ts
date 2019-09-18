import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';
import { State } from '../store/reducers/todo.reducer';
import { Store } from '@ngrx/store';
import * as fromActions from '../store/actions/todo.actions';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {
  description: string;

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  keyDownListener(event) {
    if (event.key === 'Enter') {
        this.store.dispatch(new fromActions.AddTodoAction(new Todo(this.description)));
        this.description = '';
    }
  }

}
