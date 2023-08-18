import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

function App() {
  return (
    <div className="min-h-screen bg-blue-500 p-10">
      <div className="flex flex-col gap-5">
        <p className="w-full text-center text-white font-bold text-3xl">
          Taskify
        </p>

        <div className="w-full">
          <TodoForm />
        </div>

        {/* Task List section */}
        <div className="flex gap-5">
          <div className="w-1/2  mx-auto bg-cyan-400">
            <div className="flex gap-4 p-4">
              <p className="w-full text-2xl text-white">Tasks</p>
              <TodoFilter />
            </div>

            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
