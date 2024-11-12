import React, { Children } from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider({children}) {
     const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  console.log("Los usuarios buscan todo de " + searchValue);
  // Filtrar los TODOs en base al searchValue
  const filteredTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });
  const completedTodos = todos.filter(
    (todo) => !!todo.completed //!! conbierte en booleano a cualquier valor ejemplo null undefined 1 0 etc.
  ).length;
  const totalTodos = todos.length;
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({text, completed: false});
    saveTodos(newTodos);
  };
  const completedTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  console.log("Log 1");

  // React.useEffect(() => {
    
  //   console.log("Looooooooooog 2");
  // });
  //  React.useEffect(() => {
  //    console.log("Looooooooooog 2");
  //  }, []);
   React.useEffect(() => {
     console.log("Looooooooooog 2");
   }, [totalTodos]);

  console.log("Log 3");
  


  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

    return (
      <TodoContext.Provider
        value={{
          completedTodos,
          totalTodos,
          searchValue,
          setSearchValue,
          completedTodo,
          deleteTodo,
          filteredTodos,
          todos,
          loading,
          error,
          openModal,
          setOpenModal,
          addTodo,
        }}
      >
        {children}
      </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};