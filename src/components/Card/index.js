import React, { useState } from "react";

import Button from "../Button";
import CardFooter from "../FooterCard";

function Card(props) {
  const [valor, setValor] = useState(0);

  function Adicionar() {
    setValor(valor + 1);
  }
  function Subtrair() {
    setValor(valor - 1);
  }
  return (
    <div className="card text-center mt-5  card w-50 bg-dark text-white container">
      <h1 className="card-header mb-5">{props.title}</h1>
      <div className="card-body">
        <h4 className="card-title mb-3">{props.subtitle}</h4>
        <p className="card-text mt-4 mb-5">{props.description}</p>
        <Button className={"btn btn-primary m-3"} onClick={Adicionar}>
          Adicionar
        </Button>
        <Button className={"btn btn-danger m-3"} onClick={Subtrair}>
          Subtrair
        </Button>
      </div>
      <h2>{valor}</h2>
      <CardFooter textFooterCard=" #decola-Tech-DIO || Working with PROPS and components " />
    </div>
  );
}

export default Card;
