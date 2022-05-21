import React from "react";
import styles from "./CartPayment.module.css";
import CartPaymentlists from "./CartPaymentlists/CartPaymentlists";
import CartPaymentnumber from "./CartPaymentnumber/CartPaymentnumber";

export default function CartPayment() {
 return (
  <div className="container mt-4">
   <div className="row">
    <div className="col-lg-6">
     <CartPaymentlists />
    </div>
    <div className="col-lg-6">
     <CartPaymentnumber />
    </div>
   </div>
  </div>
 );
}
