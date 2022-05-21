import React from "react";
import styles from "./cartresgisterinfo.module.css";

export default function Cartresgisterinfo() {
 return (
  <div className="mt-4 border-top">
   <div className="row align-middle mt-4">
    <div className="col-md-12  mt-4">
     <div className="row mt-4">
      <div
       style={{ fontSize: "20px" }}
       className="col-md-6 font-weight-bold"
      >
       ĐĂNG KÝ NHẬN THÔNG TIN
      </div>
      <div className="col-md-6">
       <form action="/post" method="post">
        <div className={styles.Cartresgisterinfo_row}>
         <input
          type="email"
          className="form-control cartresgisterinfo_input"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
         ></input>
         <button
          type="submit"
          className={styles.cartresgisterinfo_btn}
         >
          ĐĂNG KÍ
         </button>
        </div>
       </form>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
