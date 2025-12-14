import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(2);

  //increase counter (max limit = 20)
  const addValue = ()=>{
    if(count<20){
      setCount(count + 1)
    }
  };

  //decrease counter (min limit = 0)
  const removeValue = ()=>{
    if(count>0){
      setCount(count - 1)
    }
  };


  return (
    <div className="container">
      <h1>Chai aur React</h1>

      <div className="counter">
        Counter value: <span>{count}</span>
      </div>

      <div className="buttons">
        <button className="btn-add" onClick={addValue}>
          Add value by 1 to : {count}
        </button>

        <button className="btn-remove" onClick={removeValue}>
          Remove value by 1 from : {count}
        </button>
      </div>

      <div className="footer">footer : {count}</div>
    </div>
  );
}

export default App;
