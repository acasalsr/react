import "./App.css";
import { useState } from "react";
import { click } from "@testing-library/user-event/dist/click";

export default function App() {
  /* 
Route Map.
1. Fer un contador -> servirà per comprovar SI el click % === 0
2. Crear un index per saber on el usuari ha clicat. 
3. onClick -> guardar el valor del lloc clicat i assigar aquest al "setElement" 

Convinacions: 
1. El numero que seleccionem per poder fer el tres en ratlla per comprovar que sigui cert l'ordre ha
de comprovar que el numero de l'array pulsat primer suma + 3. En cas que aquest sigui a l'array 0,2,4,6,8 -> podem sumar 3 o 4, però el segon pas determinarà quin ordre
ha de seguir l'array. Si apretem game[0] -> següentment game [4] -> el últim pas ha de ser  game[8] <- NO pot ser game[7]

Problemes.
1. Com puc fer que un array amb valor a dins no es pugui substitur? [...game]? 
*/
  const game = ["", "", "", "", "", "", "", "", ""];

  const [pulsar, setPulsar] = useState(0);
  const [arr, setArr] = useState(game);

  let clickContainer = (indexArrayMap) => {
    if (pulsar % 2 === 0) {
      setPulsar((n) => n + 1);
      console.log(arr[indexArrayMap]);
      arr[indexArrayMap] = "X";
      setArr([...arr]);
    } else {
      setPulsar((n) => n + 1);
      arr[indexArrayMap] = "O";
      setArr([...arr]);
    }
  };

  return (
    <>
      <div className="wrapper-tres-en-ratlla">
        {game.map((containers, index) => (
          <div
            onClick={() => clickContainer(index)}
            className="container_tres-en-ratlla"
          >
            {arr[index]}
          </div>
        ))}
      </div>
    </>
  );
}
