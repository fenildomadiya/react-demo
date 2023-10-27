import React from "react";
import Data from "./Data";
// import img from ""
const Card = (props) => {
  return (

   

    <div className=" col-md-3 col-auto">
    <div class="card p-3" style={{ width: "18.5rem" }}>

      <img src={props.cart1} className="mx-auto" alt="..."/>
      <div class="card-body pb-1">
        <h5 class="card-title">{props.brand}</h5>
        <p class="card-text mb-1">
         {props.p}
        </p>
        <img src={props.star} alt="star" className="star-img"/>

        <div className="d-flex justify-content-between align-items-end pb-0">
        <p className="price pt-3 m-0">{props.price}</p>
        <button className="border-0 ">{props.btn}</button>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Card;
