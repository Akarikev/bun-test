//using bun in react

import React from "react";
import { createRoot } from "react-dom";

const root = createRoot(document.getElementById("root"));

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Bun Trials</h1>
      <p>Click button to see the magic</p>
      <button onClick={() => setCount((prev: number) => prev + 1)}>
        Increment
      </button>
      count : {count}
    </div>
  );
};

root.render(<App />);
