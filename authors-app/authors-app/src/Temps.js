export default function Temps({ estacion }) {
  return (
    <div>
      <h2>Ciutat: {estacion.ciutat}</h2>
      <p>Avui fa {estacion.fa}.</p>
      <p>La temperatura és de {estacion.temperatura}º</p>
    </div>
  );
}
