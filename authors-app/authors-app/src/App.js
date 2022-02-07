import "./App.css";
import PersonaEstacio from "./PersonaEstacio";

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
