import React, { useState, Suspense, lazy } from "react";
const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);

  console.log("App rendered");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React.memo & Lazy Loading Demo</h1>

      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <Suspense fallback={<p>Loading heavy component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
