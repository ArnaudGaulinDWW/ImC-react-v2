import React from "react";
import FormImc from "../components/FormImc";
import Head from "../components/Head";
import { useState } from "react";

const interpretations = new Map();
interpretations.set(16.5, "dénutrition ou anorexie");
interpretations.set(18.5, "maigreur");
interpretations.set(25, "poisd normal");
interpretations.set(30, "surpoids");
interpretations.set(35, "obésité modérée");
interpretations.set(40, "obesité sévère");
interpretations.set("infinity", "obésité morbide ou massive");

const Home = () => {
  let [imcs, setImcs] = useState(
    window.localStorage.getItem("imcs")
      ? JSON.parse(window.localStorage.getItem("imcs"))
      : []
  );

  let [imc, setImc] = useState(undefined);

  let handleChange = (evt) => {
    let weight = {props.weight}
    let height = {props.weight}

    if (!weight || !height) {
      return;
    } else {
      let imc = (weight / Math.pow(height, 2)).toFixed(1);

      let theInterpretation = null;

      interpretations.forEach((interpretation, imcKey) => {
        if (!theInterpretation && imc < imcKey) {
          theInterpretation = interpretation;
        }
      });
      setImc(
        new Date().toLocaleDateString("fr-FR") +
          " " +
          imc +
          " " +
          theInterpretation
      );
    }
  };

  let handleClick = (evt) => {
    evt.preventDefault();

    let newImcs = [imc, ...imcs];

    setImcs(newImcs);

    window.localStorage.setItem("imcs", JSON.stringify(newImcs));
  };

  return (
    <div className="imc">
      <div className="imcContent">
        <Head />
        <FormImc />
      </div>
    </div>
  );
};

export default Home;
