import { createSelector } from '@ngrx/store';
import * as fromReducer from '../reducers';
import { getTodosEntities, getTodosAsArray } from '../reducers/todo.reducer';


export const getTodosState = createSelector(fromReducer.getTodosState, (state) => {
    return state;
});

export const getTodosEntitiesList = createSelector(getTodosState, getTodosEntities);

export const getArrayList = createSelector(getTodosState, getTodosAsArray);
