import Salutacio from "./Salutacio";
import Temps from "./Temps";

export default function PersonaEstacio({ nom, estacion }) {
  return (
    <>
      <Salutacio nom={nom} />
      <Temps estacion={estacion} />
    </>
  );
}
