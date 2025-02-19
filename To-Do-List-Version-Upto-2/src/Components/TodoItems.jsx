import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ items }) => {
  return (
    <div className={styles.todoContainer}>
      {items.map((item) => (
        <TodoItem
          key={item.todotask}
          tododate={item.tododate}
          todotask={item.todotask}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
