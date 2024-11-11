import React from "react";

import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoConetext";

function App() {
 
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
