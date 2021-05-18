import React,{useState} from 'react'
import DoneButton from "./DoneButton";

function Todo(props) {
    const{msg, id, handleClick}=props
    const [comp, setcomp] = useState(true);
    return (
        <React.Fragment>
        <span className={`p-1 ${comp ? "no-underline " : "line-through text-gray-400"}`}>{msg} </span>
        <div className="bg-green-400 py-2 px-2 rounded place-self-center" >
        <DoneButton comp={comp} setcomp={setcomp} />
        </div>
        <button
          className="bg-red-500 text-white font-bold py-2 px-3 rounded"
          onClick={() => handleClick(id)}>
          <svg xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
        </React.Fragment>
    )
}

export default Todo
