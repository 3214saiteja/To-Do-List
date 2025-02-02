import TodoHeading from "./Components/TodoHeading";
import TodoAdd from "./Components/TodoAdd";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./Components/WelcomeMsg";

function App() {
  let [todo, setTodo] = useState([]);
  const addElem = (task, date) => {
    console.log(task + " " + date);
    let newTodo = [...todo, { todotask: task, tododate: date }];
    setTodo(newTodo);
    //setTodo("added");
  };

  const onClickDelete = (delname) => {
    console.log(delname);
    const remTask = todo.filter((item) => item.todotask !== delname);
    setTodo(remTask);
  };

  return (
    <center>
      <TodoHeading></TodoHeading>
      <TodoAdd addElem={addElem}></TodoAdd>
      {todo.length == 0 && <WelcomeMsg />}
      <TodoItems items={todo} deleteOnClick={onClickDelete}></TodoItems>
    </center>
  );
}

export default App;
