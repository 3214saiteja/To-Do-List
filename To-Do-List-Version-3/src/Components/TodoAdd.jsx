import { useState } from "react";

const TodoAdd = ({ addElem }) => {
  let [name, setName] = useState();
  let [date, setDate] = useState();
  const todoName = (event) => {
    //console.log(event.target.value);
    setName(event.target.value);
  };
  const todoDate = (event) => {
    //console.log(event.target.value);
    setDate(event.target.value);
  };
  const addButton = () => {
    addElem(name, date);
  };
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter TODO Here"
            onChange={todoName}
          ></input>
        </div>
        <div className="col-4">
          <input type="date" onChange={todoDate}></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={addButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoAdd;
