import { useState } from "react";

export default function App() {
  /* 
Route Map.
X -> 1. Fer un contador -> servirà per comprovar SI el click % === 0
X -> 2. Crear un index per saber on el usuari ha clicat. 
X -> 3. onClick -> guardar el valor del lloc clicat i assigar aquest al "setElement" 

Convinacions: 
Si la suma dels tres valors es divisible i el resultat és 3 o 4 ha guanyat.
array -> ultima posicio X o O i anar restant.

let valorX = []
let valorO = []

valorX.push[indexArrayMap +1]

*/
  //let valorX = [];
  //let valorO = [];

  const game = ["", "", "", "", "", "", "", "", ""];
  const [pulsar, setPulsar] = useState(0);
  const [arr, setArr] = useState(game);

  let clickContainer = (indexArrayMap) => {
    if (pulsar % 2 === 0) {
      setPulsar((n) => n + 1);
      arr[indexArrayMap] = "X";
      setArr([...arr]);
      //valorX.push[indexArrayMap];
    } else {
      setPulsar((n) => n + 1);
      arr[indexArrayMap] = "O";
      setArr([...arr]);
    }
  };
  return (
    <>
      <div className="wrapper-tres-en-ratlla">
        {arr.map((xo_, index) => (
          <div
            onClick={() => clickContainer(index)}
            className="container_tres-en-ratlla"
          >
            {xo_}
          </div>
        ))}
      </div>
    </>
  );
}
