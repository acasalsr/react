import { useState, useEffect } from "react";
import "./App.css";
/*

Mostrar l'hora actual (amb segons) X
Actualitzar l’hora cada segon X
Mostrar la data actual X
Afegir un botó per ocultar la data actual x
Afegir un botó per mostrar la data actualx

*/

export default function App() {
  const [update, setUpdate] = useState(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setInterval(() => {
      setUpdate((n) => n + 1);
    }, 1000);
  }, []);

  const today = new Date();
  const date =
    today.getDate() + ":" + (today.getMonth() + 1) + ":" + today.getFullYear();

  const checkStatus = () =>
    status === "" ? setStatus("hidden") : setStatus("");

  return (
    <>
      <div className="container-digital-watch">
        <h2>
          {today.getHours()} : {today.getMinutes()} : {today.getSeconds()}
        </h2>
        <p className={status}>{date}</p>
        <button onClick={checkStatus} className={status}>
          Amagar Data
        </button>
        <button onClick={checkStatus} className={status === "" ? "hidden" : ""}>
          Veure Data
        </button>
      </div>
    </>
  );
}
