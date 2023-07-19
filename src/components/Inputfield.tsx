import React from "react";
import "./styles.css";

interface props {
  todo: string;
  settodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Inputfield: React.FC<props> = ({ todo, settodo, handleAdd }) => {
  return (
    <form onSubmit={(e)=>handleAdd(e)} className="input">
      <input
        type="input"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
        placeholder="Enter an Item"
        className="input__box"
      />
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default Inputfield;
