import React, { useState, useEffect, useRef } from "react";
import Todo from "./Todo";

function AddFunction() {
  const [Task, setTask] = useState("");
  const [Update, setUpdate] = useState([]);

  const inputRef = useRef(null);

  const clickHandler = (e) => {
    setUpdate([
      ...Update,
      {
        id: Update.length + 1,
        message: Task,
        completed: false,
      },
    ]);
    setTask("");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = (id) => {
    setUpdate(Update.filter((task) => task.id !== id));
  };

  return (
    <div className="mt-32">
      <div className="flex justify-center">
        <input
          type="text"
          ref={inputRef}
          className="border py-2 px-3 text-grey-darkest"
          value={Task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => clickHandler(e)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>
      <div className="flex justify-around m-2">
        <div className="">
          {Update.map((x) => (
            <li
              key={x.id}
              className="grid grid-cols-3 items-center bg-white  m-1 rounded gap-0">
             <Todo msg={x.message} handleClick={handleClick} id={x.id}/>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddFunction;
