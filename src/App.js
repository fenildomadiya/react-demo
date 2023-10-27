import React from "react";
import Card from "./Card";
import Data from "./Data"
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
   <>
    <h1 className=" text-center p-4 bg-light">Featured Products For Pre-Order</h1>
    
   <div className=" container">
    <div className=" row p-md-3 pt-3 gap-5  mx-auto justify-content-center text-center">
   

   {Data.map(Card)}  

   </div>
   </div>
   </>
  );
}

export default App;
