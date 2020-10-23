import React from "react";
import ButtonPanel from "./ButtonPanel";
import Disply from "./Display";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <ButtonPanel />
      <Disply />
    </div>
  );
}

export default App;
