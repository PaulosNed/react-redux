import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { addTodo } from "../actions/todoActions";

const connector = connect(null, { addTodo });

type PropsFromRedux = ConnectedProps<typeof connector>;

const TodoForm: React.FC<PropsFromRedux> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="w-full bg-white p-1 rounded-full">
      <div className="w-full flex rounded-full pl-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-auto text-lg focus:outline-none"
          placeholder="Enter a task"
        />

        <button
          onClick={handleSubmit}
          className="w-12 h-12 rounded-full bg-blue-500 text-lg text-white shadow-xl"
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default connector(TodoForm);
