import { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, padding: "40px" }}>
      <button onClick={() => setColor("lightblue")}>Blue</button>

      <button onClick={() => setColor("lightgreen")}>Green</button>

          <button onClick={() => setColor("salmon")}>Red</button>
          
          <button onClick={ () => setColor("black")}>Black</button>
    </div>
  );
}

export default ColorChanger;
