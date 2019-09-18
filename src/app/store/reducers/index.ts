import * as fromTodosReducer from '../../todo/store/reducers/todo.reducer';
import * as fromFilterReducer from './todos-filter.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    todos: fromTodosReducer.State;
    filter: fromFilterReducer.FilterState;
}

export const reducers: ActionReducerMap<AppState> = {
    todos: fromTodosReducer.todoReducer,
    filter: fromFilterReducer.filterReducer
};

