import "./App.css";
import Button from "./Button";
import ClearButton from "./ClearButton";
import Input from "./Input";
import { useState } from "react";

let num0 = 0;
let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;
let num6 = 6;
let num7 = 7;
let num8 = 8;
let num9 = 9;
let sum = "+";
let res = "-";

export default function App() {
  const [numCalcul, setNumCalcul] = useState([0]);

  function operacio(num) {
    alert(num);
  }
  // necessito declarar el hook següent?
  // const [clearCalcul, setClearCalcul] = useState[numCalcul[0]];
  return (
    <>
      <ClearButton />
      <div className="wrapper500px">
        <div className="showInput"><Input /></div>
        <div className="wrapperGlobalNum">
          <div className="containerNumber">
            <Button num={num1} funcioOperacio={operacio} />
          </div>
          <div className="containerNumber">
            <Button num={num2} funcioOperacio={operacio} />
          </div>
          <div className="containerNumber">
            <Button num={num3} funcioOperacio={operacio} />
          </div>
          <div className="containerNumber">
            <Button num={num4} funcioOperacio={operacio} />
          </div>
          <div className="containerNumber">
            <Button num={num5} funcioOperacio={operacio} />
          </div>
          <div className="containerNumber">
            <Button num={num6} funcioOperacio={operacio} />
          </div>
          <div className="containerNumber">
            <Button num={num7} funcioOperacio={operacio} />
          </div>
          <div className="containerNumber">
            <Button num={num8} funcioOperacio={operacio} />
          </div>
          <div className="containerNumber">
            <Button num={num9} funcioOperacio={operacio} />
          </div>
          <div className="containerNumber">
            <Button num={num0} funcioOperacio={operacio} />
          </div>
          <div className="containerNumber">
            <Button num={sum} funcioOperacio={operacio} />
          </div>
          <div className="containerNumber">
            <Button num={res} funcioOperacio={operacio} />
          </div>
        </div>
        <div className="buttonClear">
          <ClearButton />
        </div>
      </div>
    </>
  );
}
