import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo.model';
import { Store } from '@ngrx/store';

import { getArrayList } from '../store/selectors/todos.selectors';
import { AppState } from 'src/app/store/reducers';
import { validFilter } from 'src/app/store/reducers/todos-filter.reducer';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {

  todoList$: Observable<Array<Todo>>;
  currentFilter$: Observable<validFilter>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.todoList$ =  this.store.select<any>(getArrayList);
    this.currentFilter$ = this.store.select<validFilter>('filter');
  }

}
