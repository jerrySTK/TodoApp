import * as filterActions from '../filters/todo-filter.actions';

export type validFilter = 'completed' | 'all' | 'active';

export interface FilterState {
    filter: validFilter;
}

const initialState: FilterState = { filter : 'all' };

export const filterReducer = (state: FilterState = initialState, action: filterActions.filterActions) => {
    switch (action.type) {
        case filterActions.SET_FILTER_ACTION:
            return { ...state, filter: action.payload };
        default:
            return state;
    }
};
