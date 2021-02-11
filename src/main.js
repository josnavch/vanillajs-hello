/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let age = 30;
  console.log(age);
  const semaforo = "rojo";
  console.log(semaforo);
  let auto = ["toyota", "nissan", "ferrari", "audi"];
  let cars = ["toyota", "nissan", "ferrari", "audi"];

  console.log(cars);

  let autosObjetos = [
    { marca: "alfa romeo", modelo: "Giulia", velmax: 350 },
    { marca: "Peugeot", modelo: "308", velmax: 250 },
    { marca: "AUDI", modelo: "A2", velmax: 350 },
    { marca: "Ferrari", modelo: "Roja", velmax: 500 },
    { marca: "BMW", modelo: "X1", velmax: 400 }
  ];
  console.log(autosObjetos);

  let autos = [
    { marca: "alfa romeo", modelo: "Giulia", velmax: 350 },
    { marca: "Peugeot", modelo: "308", velmax: 250 },
    { marca: "AUDI", modelo: "A2", velmax: 350 },
    { marca: "Ferrari", modelo: "Roja", velmax: 500 },
    { marca: "BMW", modelo: "X1", velmax: 400 }
  ];
  // for (variable; condicion; interaccion){ }

  for (let a = 0; a < autosObjetos.length; a++) {
    console.log(a);
  }

  let a = 0;
  while (a < autosObjetos.length) {
    console.log(auto[a]);
    a++;
  }

  autos.forEach(auto => {
    console.log(auto.marca);
  });

  let myNewAutos = autos.map(item => {
    return "<li>" + item.marca + " tengo el modelo " + item.modelo + "</li>";
  });
  console.log(autos);
  console.log(myNewAutos);

  let myNewAutos320 = autos.map(item => {
    if (item.velmax > 320) {
      return (
        "<li>" +
        item.marca +
        " tengo el modelo " +
        item.modelo +
        " con velocidad mayor a 320" +
        "</li>"
      );
    }
  });
  console.log(myNewAutos320);

  console.log("Hello Rigo from the console!");
};
