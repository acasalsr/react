import { useState } from "react";
import "./App.css";

let images = [
  "https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/Renault-Scenic_2017_C01.jpg?itok=DvyqBgCa",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jeep-wrangler-rubicon-392-port-1605620194.jpg",
  "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/21MY_Z900_BK4_STU.png",
  "https://www.honda.es/content/dam/central/motorcycles/supersports/cbr650r_2022/Top-XL-Tile-Module/CBR650R-3-quarter-front-right-side-smartphone.jpg/jcr:content/renditions/m_r.jpg",
];

function App() {
  return (
    <>
      {images.map((img) => (
        <div>
          <img src={img} onClick={"falta accio"} width="400px" height="100%" />
        </div>
      ))}
    </>
  );
}

export default App;
