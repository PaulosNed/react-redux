import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/actionTypes';
import { TodoAction } from '../actions/todoActions';
import { Task } from '../models/Task';

const initialState: Task[] = [
  {
    id: 1,
    description: "static task from store",
    isDone: false
  }
];

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


export default todoReducer;
