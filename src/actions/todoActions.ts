import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from './actionTypes';

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: {
    description: string;
  };
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: {
    id: number;
  };
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: {
    id: number;
  };
}

interface SetFilterAction {
    type: typeof SET_FILTER;
    payload: {
      filter: string;
    };
  }

export type TodoAction = AddTodoAction | ToggleTodoAction | DeleteTodoAction;
export type FilterAction = SetFilterAction

export const addTodo = (description: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: { description }
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: DELETE_TODO,
  payload: { id }
});

export const setFilter = (filter: string): SetFilterAction => ({
    type: SET_FILTER,
    payload: { filter }
  });
