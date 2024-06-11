import React, { useState } from "react";

function Acme() {
  const [q, setQ] = useState({ w: "C", o: 25 });
  const e = () => {
    setQ({ ...q, w: "K" });
  };
  const u = (r: number) => {
    setQ({ ...q, o: r });
  };
  return (
    <div>
      <h3>G: {q.w}</h3>
      <h3>Y: {q.o}</h3>
      <button onClick={e}>M</button>
      <button onClick={() => u(30)}>H</button>
    </div>
  );
}

export default Acme;