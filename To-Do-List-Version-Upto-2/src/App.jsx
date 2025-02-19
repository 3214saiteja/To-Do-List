import TodoHeading from "./Components/TodoHeading";
import TodoAdd from "./Components/TodoAdd";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
function App() {
  let todo = [
    {
      todotask: "buy milk",
      tododate: "20/12/2024",
    },
    {
      todotask: "go to college",
      tododate: "20/12/2024",
    },
    {
      todotask: "call to mom",
      tododate: "20/12/2024",
    },
  ];
  // let [todo, setTodo] = useState([]);

  return (
    <center>
      <TodoHeading></TodoHeading>
      <TodoAdd></TodoAdd>
      <TodoItems items={todo}></TodoItems>
    </center>
  );
}

export default App;
