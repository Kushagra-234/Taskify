import React, { useState } from "react";
import "./App.css";
import Inputfield from "./components/Inputfield";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
// let name: string;

// name = "ayush";

// let str: string[];

// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: "piyush",
//   // age: 10,
// };

// let printName: (name: string) => void;

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todo);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo: todo,
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };


  return (
    <>
      <div className="App">
        <span className="heading">Taskify</span>
        <Inputfield todo={todo} settodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default App;
