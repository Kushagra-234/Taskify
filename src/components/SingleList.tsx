import React, { useState } from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

// comment for checking purpose

const SingleList: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(todo.todo);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleEdit = (id: number, e: React.FormEvent) => {
    setEdit(!edit);
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleForm = (id: number, e: React.FormEvent) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: value } : todo))
    );

    setEdit(false);
  };

  return (
    <form className="todos__single" onSubmit={(e) => handleForm(todo.id, e)}>
      {edit ? (
        <>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="todos__single--test"
          />
        </>
      ) : (
        <>
          {todo.isDone ? (
            <s className="todos__single--text">{todo.todo}</s>
          ) : (
            <span className="todos__single--text">{todo.todo}</span>
          )}
        </>
      )}

      <div>
        <span className="icon" onClick={(e) => handleEdit(todo.id, e)}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleList;
