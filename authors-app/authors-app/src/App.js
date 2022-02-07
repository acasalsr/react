import "./App.css";
import Salutacio from "./Salutacio";
import Temps from "./Temps";

let nenet = "Nenet";
let barcelona = {
  ciutat: "barcelona",
  fa: "Nuvol",
  temperatura: 10,
};
let peter = "Peter";
let londres = {
  ciutat: "Londres",
  fa: "pluja",
  temperatura: 4,
};

function PersonaEstacio({ nom, estacion }) {
  return (
    <>
      <Salutacio nom={nom} />
      <Temps estacion={estacion} />
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonaEstacio nom={nenet} estacion={barcelona} />
        <PersonaEstacio nom={peter} estacion={londres} />
      </header>
    </div>
  );
}
