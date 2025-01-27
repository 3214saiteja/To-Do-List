import TodoHeading from "./Components/TodoHeading";
import TodoAdd from "./Components/TodoAdd";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <TodoHeading></TodoHeading>
      <TodoAdd></TodoAdd>
      <div className="todo-items">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
