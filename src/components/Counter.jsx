import { useState } from "react";

export function Tiriye() {
  const [count, setCount] = useState(0);
  

    return (
      <div
        style={{
          backgroundColor: "red",
          color: "black",
          padding: "5px",
          margin: "5px",
        }}
      >
        <h1 style={{color:"blue"}}>Count: {count}</h1>
        <button
          style={{ padding: "10px", margin: "10px" }}
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button
          style={{ padding: "10px", margin: "10px", hover:{backgroundColor:"blue"} }}
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
      </div>
    );
}

