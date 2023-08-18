import { combineReducers } from 'redux';
import todoReducer, { filterReducer } from './todoReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
