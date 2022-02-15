import "./App.css";
import { useState } from "react";

export default function App() {
  const [displayNumero, setDisplayNumero] = useState(0);
  //const increment = () => setDisplayNumero((n) => n + 1);

  const sumaUn = () =>
    displayNumero >= 10
      ? alert("No pot ser més gran a 10")
      : setDisplayNumero((n) => n + 1); //Com crridar una funció {increment}
  return (
    <>
      <div className="container-comptador">
        <div className="display">{displayNumero}</div>
        <button onClick={() => sumaUn()}>+1</button>
      </div>
    </>
  );
}
