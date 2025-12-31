import React from "react";

const HeavyComponent = () => {
  console.log("HeavyComponent rendered");
  let total = 0;
  for (let i = 0; i < 1_000_000_00; i++) {
    total += i;
  }

  return (
    <div style={{ padding: "20px", border: "2px solid black", marginTop: "20px" }}>
      <h2>Heavy Component</h2>
      <p>Heavy computation result: {total}</p>
    </div>
  );
};
export default React.memo(HeavyComponent);
