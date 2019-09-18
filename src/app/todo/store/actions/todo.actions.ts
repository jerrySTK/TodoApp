import { Action, createAction, props } from '@ngrx/store';
import { Todo } from '../../model/todo.model';

export const ADD_TODO = '[Todo] Add Todo';
export const COMPLETE_TODO = '[Todo] Complete Todo';
export const UPDATE_TODO = '[Todo] Update Todo';
export const DISPLAY_ALL_TODOS = '[Todo] Display all todos';
export const DISPLAY_ACTIVE_TODOS = '[Todo] Display active todos';
export const DISPLAY_COMPLETED_TODOS = '[Todo] Display completed todos';
export const REMOVE_COMPLETED_TODOS = '[Todo] Remove completed todos';
export const GET_TODO_LIST = '[Todo] Get todos list';
export const REMOVE_TODO = '[Todo] Remove todo';
export const MARK_ALL_AS_COMPLETED = '[Todo] Mark all as completed';


export class GetTodoListAction implements Action {
    readonly type = GET_TODO_LIST;
}

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;
    constructor(public payload: Todo) { }
}

export class CompleteTodoAction implements Action {
    readonly type = COMPLETE_TODO;
    constructor(public payload: number) { }
}

export class DisplayAllTodosAction implements Action {
    readonly type = DISPLAY_ALL_TODOS;
}

export class DisplayActiveTodosAction implements Action {
    readonly type = DISPLAY_ACTIVE_TODOS;
}

export class DisplayCompletedTodosAction implements Action {
    readonly type = DISPLAY_COMPLETED_TODOS;
}

export class RemoveCompletedTodosAction implements Action {
    readonly type = REMOVE_COMPLETED_TODOS;
}

export class UpadateTodoAction implements Action {
    readonly type = UPDATE_TODO;
    constructor(public payload: { description: string, id: number }) { }
}

export class RemoveTodoAction implements Action {
    readonly type = REMOVE_TODO;
    constructor(public payload: number) {}
}

export class MarkAllAsCompletedAction implements Action {
    readonly type = MARK_ALL_AS_COMPLETED;
}

export type TodoActions = AddTodoAction |
    CompleteTodoAction |
    DisplayAllTodosAction |
    DisplayActiveTodosAction |
    DisplayCompletedTodosAction |
    RemoveCompletedTodosAction |
    GetTodoListAction |
    UpadateTodoAction |
    RemoveTodoAction |
    MarkAllAsCompletedAction;
