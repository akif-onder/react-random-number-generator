import "./App.css";
import { useState } from "react";

function App() {
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(1);
  const [randNum, setRandNum] = useState(1);


  const genRandNum = ()=>{
    setRandNum(Math.floor(Math.random() * (maxVal-minVal +1) + minVal))
  }

  return (
    <div className="container">
      <div className="randNum">
       <p>This is The Random Number:</p>  
       <div className="result">{randNum}</div>
      </div>
      <div className="num-container">
        <div className="min-num">
          <label htmlFor="minNum">Minimum Number</label>
          <input
            name="minNum"
            type="number"
            value={minVal}
            onChange={(e) => setMinVal(+e.target.value)}
          />
        </div>
        <div className="max-num">
          <label htmlFor="maxNum">Maximum Number</label>
          <input
            name="maxNum"
            type="number"
            value={maxVal}
            onChange={(e) => setMaxVal(+e.target.value)}
          />
        </div>
      </div>
      <button onClick={genRandNum} type="text">Generate Random Number</button>
    </div>
  );
}

export default App;
