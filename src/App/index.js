import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { useLocalStorage } from "./useLocalStorage";
// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el Curso de Intro a React.js", completed: false },
//   { text: "Llorar con la Llorona", completed: false },
//   { text: "LALALALALA", completed: false },
//   { text: "usar estados derivados", completed: true },
// ];
// localStorage.setItem('TODOS_1', JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS_1");

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_1", []);
  const [searchValue, setSearchValue] = React.useState("");

  console.log("Los usuarios buscan todo de " + searchValue);
  // Filtrar los TODOs en base al searchValue
  const filteredTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });
  const completedTodos = todos.filter(
    (todo) => !!todo.completed //!! conbierte en booleano a cualquier valor ejemplo null undefined 1 0 etc.
  ).length;
  const totalTodos = todos.length;

  const completedTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            todos={todos}
            // setTodos={setTodos}
            onComplete={() => completedTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
