import { useState } from "react";
import "./App.css";

export default function App() {
  const [paginacio, setPaginacio] = useState(1);

  const oneLess = (ultimValorLess) => {
    paginacio <= 1 ? setPaginacio(ultimValorLess) : setPaginacio((n) => n - 1);
  };
  const oneMore = (ultimValor) =>
    paginacio >= ultimValor ? setPaginacio(1) : setPaginacio((n) => n + 1);

  let images = [
    {
      url: "data:image/jpeg;base64,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",
      index: 1,
    },
    {
      url: "https://berriasurfschool.com/wp-content/uploads/2020/11/swell-surf.jpg",
      index: 2,
    },
    {
      url: "https://s1.eestatic.com/2019/07/10/como/agua-como_hacer_412719155_127734819_1024x576.jpg",
      index: 3,
    },
    {
      url: "https://cdn.checkyeti.com/images/original/Surfing+%28c%29+Shutterstock.jpg",
      index: 4,
    },
    {
      url: "https://cuidadosbiooil.com/wp-content/uploads/2020/07/cuidados-piel-surf.jpg",
      index: 5,
    },
  ];
  return (
    <>
      {images.map((imatgeSurf) => (
        <div className="imageWrapper">
          {imatgeSurf.index === paginacio && (
            <img src={imatgeSurf.url} width="auto" height="400px" alt="surf" />
          )}
        </div>
      ))}
      <button onClick={() => oneLess(images.length)} className="buttonLeft">
        left
      </button>
      {images.map((numeroImatge) => (
        <button onClick={() => setPaginacio(numeroImatge.index)}>
          {numeroImatge.index}
        </button>
      ))}
      <button onClick={() => oneMore(images.length)} className="buttonRight">
        right
      </button>
    </>
  );
}
