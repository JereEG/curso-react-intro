import "./CreateTodoButton.css";
import React from "react";
import { TodoContext } from "../TodoConetext";

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        setOpenModal(!openModal);
        console.log("le diste click");
        console.log(event);
        console.log(event.target);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
