import "./App.css";
import { useState } from "react";

function App() {
 

const [toggle, setToggle] = useState(false);

const toggleFunc = () => {
setToggle(!toggle)
}
  

  return (
    <div className="App">
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          border: "1px solid black",
          background: toggle?"orange" : "yellow"
        }}
      ></div>
      <button onClick={()=>toggleFunc()}>Change box color</button>
    </div>
  );
}

export default App;
