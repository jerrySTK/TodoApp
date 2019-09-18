import { Action } from '@ngrx/store';
import { validFilter } from '../reducers/todos-filter.reducer';


export const SET_FILTER_ACTION = '[Filter] Set filter';


export class SetFilterAction implements Action {
    readonly type =  SET_FILTER_ACTION;
    constructor(public payload: validFilter) { }
}

export type filterActions = SetFilterAction;
