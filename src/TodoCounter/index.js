import { TodoContext } from '../TodoConetext';
import './TodoCounter.css';
import React from 'react';
function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      TODOs
      {completedTodos === totalTodos && totalTodos != 0 && completedTodos != 0
        ? "\nFelicitaciones!!! sigue así ;)"
        : null}
    </h1>
  );
}

export { TodoCounter };
