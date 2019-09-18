import * as fromReducer from './todo.reducer';
import { createSelector} from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

export const getTodosState = createSelector((state: AppState) => state.todos,
                                             (state: fromReducer.State) => state);


