import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
      {completed === total && total != 0 && completed !=0? "\nFelicitaciones!!! sigue así ;)" : null}
    </h1>
  );
}

export { TodoCounter };
