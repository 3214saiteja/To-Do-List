const TodoItem = ({ tododate, todotask }) => {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todotask}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
