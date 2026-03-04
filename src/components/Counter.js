import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Practice Sessions Completed: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Complete Session
      </button>
    </div>
  );
}

export default Counter;