import { Component, OnInit } from '@angular/core';
import { validFilter } from 'src/app/store/reducers/todos-filter.reducer';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import * as fromActions from '../../store/filters/todo-filter.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filters: validFilter[] = ['all', 'completed', 'active'];
  currentFilter$: Observable<validFilter>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.currentFilter$ = this.store.select<validFilter>('filter');
  }

  setFilter(filter: validFilter) {
    this.store.dispatch(new fromActions.SetFilterAction(filter));
  }
}
