import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { TodoContext } from "../TodoConetext";


function Modal({ children }) {
  const {openModal, setOpenModal } = React.useContext(TodoContext);
  const handleClickOutside = (event) => {
    if (event.target.className === "ModalBackground") {
      setOpenModal(!openModal);
    }
  };

  return ReactDOM.createPortal(
    <div className="ModalBackground" onClick={handleClickOutside}>
      <div className="Modal">{children}</div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
