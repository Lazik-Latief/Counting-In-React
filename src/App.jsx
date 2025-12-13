import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(2);

  return (
    <div className="container">
      <h1>Chai aur React</h1>

      <div className="counter">
        Counter value: <span>{count}</span>
      </div>

      <div className="buttons">
        <button className="btn-add" onClick={() => setCount(count + 1)}>
          Add value by 1 to : {count}
        </button>

        <button className="btn-remove" onClick={() => setCount(count - 1)}>
          Remove value by 1 from : {count}
        </button>
      </div>

      <div className="footer">footer : {count}</div>
    </div>
  );
}

export default App;
