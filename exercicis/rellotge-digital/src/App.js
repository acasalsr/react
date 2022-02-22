import { useState, useEffect } from "react";

/*

Mostrar l'hora actual (amb segons) X
Actualitzar l’hora cada segon 
Mostrar la data actual X
Afegir un botó per ocultar la data actual 
Afegir un botó per mostrar la data actual

*/

export default function App() {
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setUpdate((n) => n + 1);
    }, 1000);
  }, []);

  const today = new Date();
  const date =
    today.getDate() + ":" + (today.getMonth() + 1) + ":" + today.getFullYear();

  return (
    <>
      <div className="container-digital-watch">
        <h2 className="digital-watch_time">
          {today.getHours()} : {today.getMinutes()} : {today.getSeconds()}
        </h2>
        <p className="digital-watch_date">{date}</p>
        <button onClick="" className="digital-watch_hideTime">
          Amagar Data
        </button>
        <button onClick="" className="digital-watch_showTime">
          Veure Data
        </button>
      </div>
    </>
  );
}
