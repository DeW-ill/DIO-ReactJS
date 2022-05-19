import React from "react";

function CardFooter(props) {
  return (
    <div className="card-footer text-center text-white mb-3 mt-5 align-items-center">
      {props.textFooterCard}
    </div>
  );
}

export default CardFooter;
