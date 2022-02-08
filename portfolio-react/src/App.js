import "./App.css";
import Menu from "./Menu";
import SectionHeader from "./SectionHeader";
import SectionJs from "./SectionJs";
import SectionUx from "./SectionUx";
import SectionWebflow from "./SectionWebflow";

function App() {
  return (
    <>
      <Menu />
      <SectionHeader />;
      <SectionUx />;
      <SectionWebflow />;
      <SectionJs />;
    </>
  );
}

export default App;
