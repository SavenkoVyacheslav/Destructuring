import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";

//1.1.Distructure array to get MODELS
const [honda, tesla] = cars;
//1.2. Distructuring Honda object to get topSpeed(nested) and renamed to hondaTopSpeed
const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
//Same for tesla
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
//1.3. To get topColor (same way as for the topspeed)
const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
