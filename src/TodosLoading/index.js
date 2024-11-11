import React from "react";
import "./TodosLoading.css";

function TodosLoading({}) {
  return (
    <div className="TodoLoadingItem">
      <span className="TodoSkeletonsIcon TodoItem-p--completeIcon"></span>
      <p className="TodoLoadingItem-p"></p>
      <span className="TodoSkeletonsIcon TodoSkeletonsIcon-deleteIcon"></span>
    </div>
  );
}

export { TodosLoading };
