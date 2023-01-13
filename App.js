import "./App.css";
import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  function Inc(){
    setCount(count + 1)
  }
  function Dec(){
    setCount(count - 1)
  }
  function Reset(){
    setCount(0)
  }
  return (
          <div className="App">
     <h1>Counter App</h1>
     <h2>{count}</h2>
     <button className="btn" onClick={Inc}>Increment</button>
     <button className="btn" onClick={Dec}>Decrement</button>
     <button className="btn" onClick={Reset}>Reset</button>
    </div>
     );
     }
     export default App;


     