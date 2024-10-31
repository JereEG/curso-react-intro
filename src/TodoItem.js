import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        onClick={props.onComplete}
        // onClick={() => {
        // const todosActualizado = props.todos.map(todo => props.text === todo.text ? {...todo, completed: true} : todo);
        // props.setTodos(todosActualizado);

        // }}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        V
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span
        // onClick={() => {
        // const todosActualizado = props.todos.filter(todo => props.text !== todo.text);
        // props.setTodos(todosActualizado);
        // }}
        onClick={props.onDelete}
        className="Icon Icon-delete"
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };