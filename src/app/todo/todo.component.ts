import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromActions from './store/actions';
import { AppState } from '../store/reducers';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleTodos() {
    this.store.dispatch(new fromActions.MarkAllAsCompletedAction());
  }

}
