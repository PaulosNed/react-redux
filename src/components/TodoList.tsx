import { Task } from "../models/Task";
import {
  AiFillDelete,
  AiFillCheckCircle,
  AiFillBackward,
} from "react-icons/ai";

import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/todoActions';
import { RootState } from '../reducers/rootReducer';

const mapState = (state: RootState) => ({
  todos: state.todos,
  currentFilter: state.filter 
});

const mapDispatch = {
  toggleTodo: (id: number) => toggleTodo(id),
  deleteTodo: (id: number) => deleteTodo(id)
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const TodoList: React.FC<PropsFromRedux> = ({ todos, toggleTodo, deleteTodo, currentFilter }) => {
  const filteredTodos = currentFilter === 'completed' ?
    todos.filter(todo => todo.isDone) :
    currentFilter === 'active' ?
    todos.filter(todo => !todo.isDone) :
    todos;

  return (
    <div className="py-2 px-8 flex flex-col gap-2" data-testid="task-list">
      {filteredTodos.map((todo: Task) => (
        <div
          data-testid="task-item"
          className="w-full bg-yellow-300 transform transition-all hover:outline-2 hover:outline-black duration-500 p-6 rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center">
            <div>
              <div
                data-testid="task-item-inner"
                className={`font-medium ${todo.isDone ? "line-through" : ""}`}
              >
                {todo.description}
              </div>
            </div>
            <div className="flex gap-2 items-center">
              {/* Delete Task Section */}
              <span
                onClick={() => deleteTodo(todo.id)}
                data-testid="delete-button"
              >
                <AiFillDelete />
              </span>

              {/* Toggle Complition section */}
              <div
                onClick={() => toggleTodo(todo.id)}
                data-testid="complete-button"
              >
                {!todo.isDone && (
                  <span>
                    <AiFillCheckCircle />
                  </span>
                )}
                {todo.isDone && (
                  <span>
                    <AiFillBackward />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default connector(TodoList);
