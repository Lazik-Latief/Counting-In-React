import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  //increase counter (max limit = 20)
  const addValue = ()=>{
    if(count<20){
      setCount(count + 1)
    }
  };

   //increase counter using prevCounter 
  const addFive = ()=>{
   
      setCount(prevCount  => prevCount + 1)
       setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
         setCount(prevCount => prevCount + 1)
          setCount(prevCount => prevCount + 1)   
  };


  //decrease counter (min limit = 0)
  const removeValue = ()=>{
    if(count>0){
      setCount(count - 1)
    }
  };

  //decrease counter using prevCounter 
  const removeFive = ()=>{
   
      setCount(prevCount  => prevCount - 1)
       setCount(prevCount => prevCount - 1)
        setCount(prevCount => prevCount - 1)
         setCount(prevCount => prevCount - 1)
          setCount(prevCount => prevCount - 1)   
  };


  return (
    <div className="container">
      <h1>Chai aur React</h1>

      <div className="counter">
        Counter value: <span>{count}</span>
      </div>

      <div className="buttons">
        <button className="btn-add" onClick={addValue}>
          Add value 'max 20' by 1 to : {count}
        </button>

      <div className="buttons">
        <button className="btn-add" onClick={addFive}>
          Add value by 5 to : {count}
        </button>



        <button className="btn-remove" onClick={removeValue}>
          Remove value 'min 0' by 1 from : {count}
        </button>

        <div className="buttons">
        <button className="btn-add" onClick={removeFive}>
          Add Remove by 5 to : {count}
        </button>
      </div>
      </div>
      
    </div>

      <div className="footer">footer : {count}</div>
    </div>
  );
}

export default App;
