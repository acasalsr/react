/*
Crear condició per valorar si el usuari afegeix a l'array numCalcul un número, suma o resta.
*/

export default function Button({ num, funcioOperacio }) {
  return (
    <button onClick={() => funcioOperacio(num)} className="number">
      {num}
    </button>
  );
}
