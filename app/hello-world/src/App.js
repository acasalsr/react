import logo from "./logo.svg";
import "./App.css";
import Hello from "./hello";
import Box from "./box";

function HelloWorld() {
  return <h1>Hello world</h1>;
}

export default function App() {
  let nomVariable = "Andreu";
  return (
    <div className="App">
      <header className="App-header">
        <Box>
          <img src={logo} className="App-logo" alt="logo" />
          <Hello name={nomVariable} />
          <Box>
            <p>this is my first line of code.</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <p className="testClass">Hola que tal? </p>
          </Box>
        </Box>
      </header>
    </div>
  );
}
