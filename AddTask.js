import { useState } from "react";

export default function AddTask({ key, onAddTask }) {
  const [text, setText] = useState("");

  return (
    <>
      <input name={key} placeholder={key} defaultValue={key} />
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}
