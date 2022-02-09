import "./App.css";
import Button from "./Button";
import ClearButton from "./ClearButton";
import Input from "./Input";
import {useState} from "React"

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
  
  return (
    <>
    <ClearButton/>
    <Input/>
      <div className="wrapper500px">
        <div className="showInput"></div>
        <div className="wrapperGlobalNum">
          <div className="containerNumber">
            <Button num={num1} />
          </div>
          <div className="containerNumber">
            <Button num={num2} />
          </div>
          <div className="containerNumber">
            <Button num={num3} />
          </div>
          <div className="containerNumber">
            <Button num={num4} />
          </div>
          <div className="containerNumber">
            <Button num={num5} />
          </div>
          <div className="containerNumber">
            <Button num={num6} />
          </div>
          <div className="containerNumber">
            <Button num={num7} />
          </div>
          <div className="containerNumber">
            <Button num={num8} />
          </div>
          <div className="containerNumber">
            <Button num={num9} />
          </div>
          <div className="containerNumber">
            <Button num={num0} />
          </div>
          <div className="containerNumber">
            <Button num={sum} />
          </div>
          <div className="containerNumber">
            <Button num={res} />
          </div>
        </div>
        <button className="buttonClear">Clear</button>
      </div>
    </>
  );
}
