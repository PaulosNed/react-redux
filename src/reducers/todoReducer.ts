import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from '../actions/actionTypes';
import { FilterAction, TodoAction } from '../actions/todoActions';
import { Task } from '../models/Task';

const initialState: Task[] = [];

const todoReducer = (state = initialState, action: TodoAction): Task[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          description: action.payload.description,
          isDone: false
        }
      ];

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isDone: !todo.isDone }
          : todo
      );

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
};

export const filterReducer = (state = 'all', action: FilterAction): string => {
    switch (action.type) {
      case SET_FILTER:
        return action.payload.filter;
      default:
        return state;
    }
  };

export default todoReducer;
