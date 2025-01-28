import TodoHeading from "./Components/TodoHeading";
import TodoAdd from "./Components/TodoAdd";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./Components/TodoItems";
function App() {
  let Todo = [
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
  return (
    <center>
      <TodoHeading></TodoHeading>
      <TodoAdd></TodoAdd>
      <TodoItems items={Todo}></TodoItems>
    </center>
  );
}

export default App;
