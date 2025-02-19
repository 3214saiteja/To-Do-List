import { useState, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

const TodoAdd = ({ addElem }) => {
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  const addButton = (event) => {
    //console.log(event);
    event.preventDefault();
    const name = todoNameElement.current.value;
    const date = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addElem(name, date);
  };
  return (
    <div className="container">
      <form className="row kg-row" onSubmit={addButton}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter TODO Here"
            ref={todoNameElement}
          ></input>
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement}></input>
        </div>
        <div className="col-2">
          <button
            //type="button"
            className="btn btn-success kg-button"
            // onClick={addButton}
          >
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
};
export default TodoAdd;
