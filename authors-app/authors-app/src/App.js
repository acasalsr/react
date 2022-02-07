import "./App.css";

function Salutacio({ nom }) {
  return <h1>hola {nom}</h1>;
}

/*
Funció temps -> estacion -> és per definir la variable + [key] que qualsevol
objecte rep.  
*/

function Temps({ estacion }) {
  return (
    <div>
      <h2>Ciutat: {estacion.ciutat}</h2>
      <p>Avui fa {estacion.fa}.</p>
      <p>La temperatura és de {estacion.temperatura}º</p>
    </div>
  );
} 
export default function App() {
  let name = "Nenet";
  let barcelona = {
    ciutat: "barcelona",
    fa: "Nuvol",
    temperatura: 10,
  };
  let londres = {
    ciutat: "Londres",
    fa: "pluja",
    temperatura: 4,
  };
  return (
    <div className="App">
      <header className="App-header">
        <Salutacio nom={name} />
        {/* Estacio és la funcio i Barcelona és el que volem ensenyar */}
        <Temps estacion={barcelona} />
        <Temps estacion={londres} />
      </header>
    </div>
  );
}
