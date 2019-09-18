import { Todo } from '../../model/todo.model';
import { EntityState, createEntityAdapter, Update } from '@ngrx/entity';
import * as fromTodoActions from '../actions/todo.actions';

export interface State extends EntityState<Todo> {
}

export const todoAdapter = createEntityAdapter<Todo>();

const initialState = todoAdapter.getInitialState({
    ids: [],
    entities: {}
});

export const getTodosEntities = (state: State) => state.entities;

export const getTodosAsArray = (state: State) => {
    const res = Object.keys(state.entities).map(k => {
        return state.entities[+k];
    });
    return res;
};

export const todoReducer = (state: State = initialState, action: fromTodoActions.TodoActions) => {
    let todo: Update<Todo>;
    switch (action.type) {
        case fromTodoActions.ADD_TODO:
            return todoAdapter.addOne(action.payload, state);
        case fromTodoActions.GET_TODO_LIST:
            return todoAdapter.addMany([], state);
        case fromTodoActions.COMPLETE_TODO:
            todo = {
                id: action.payload,
                    changes: {
                    completed: !state.entities[action.payload].completed
                }
            };
            return todoAdapter.updateOne(todo, state);
        case fromTodoActions.UPDATE_TODO:
            todo = {
                id: action.payload.id,
                    changes: {
                    description: action.payload.description
                }
            };
            return todoAdapter.updateOne(todo, state);
        case fromTodoActions.REMOVE_TODO:
            return todoAdapter.removeOne(action.payload, state);
        case fromTodoActions.MARK_ALL_AS_COMPLETED:
            var todos: Update<Todo>[] = getTodosAsArray(state).map(e => {
                if (!e.completed) {
                    return {
                        id: e.id,
                        changes: {
                            completed: true
                        }
                    };
                }
                else {
                    return {
                        id: e.id,
                        changes: {
                            completed: false
                        }
                    };
                }
            });
            return todoAdapter.updateMany(todos, state);
        default:
            return state;
    }

};
