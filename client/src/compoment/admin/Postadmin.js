import React from "react";
import styles from "./postadmin.module.css";

export default function Postadmin() {
 return (
  <div className="container mt-4 mb-4">
   <div className=" ">
    <div className="col-lg-6 mt-4">
     <form className="mt-4" action="">
      {/* <input
      className="form-control  "
      type="text"
      placeholder="Name"
     />
     <input
      className="form-control  "
      type="text"
      placeholder="Price"
     />
     <input
      className="form-control  "
      type="text"
      placeholder="Img"
     />
     <input
      className="form-control  "
      type="checkbox"
      placeholder="phobien"
     />
     <input
      className="form-control  "
      type="checkbox"
      placeholder="khuyenmai"
     />
     <input
      className="form-control  "
      type="checkbox"
      placeholder="moi"
     /> */}

      <div class="mb-3">
       <label
        for="exampleInputEmail1"
        className="form-label"
       >
        Name :
       </label>
       <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
       />
      </div>
      <div class="mb-3">
       <label
        for="exampleInputPassword1"
        class="form-label"
       >
        Price :
       </label>
       <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
       />
      </div>

      <div class="mb-3">
       <label for="img" class="form-label">
        Img :
       </label>
       <input
        type="password"
        className="form-control"
        id="img"
       />
      </div>

      <div class="mb-3">
       <label
        for="exampleInputPassword1"
        class="form-label"
       >
        Price :
       </label>
       <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
       />
      </div>
      <div className="mb-3 form-check">
       <input
        type="checkbox"
        className="form-check-input"
        id="phobien"
       />
       <label className="form-check-label" for="phobien">
        Sản phẩm Phổ Biến
       </label>
      </div>
      <div className="mb-3 form-check">
       <input
        type="checkbox"
        className="form-check-input"
        id="khuyenmai"
       />
       <label className="form-check-label" for="khuyenmai">
        Sản phẩm Khuyễn Mãi
       </label>
      </div>
      <div className="mb-3 form-check">
       <input
        type="checkbox"
        className="form-check-input"
        id="moi"
       />
       <label className="form-check-label" for="moi">
        Sản phẩm mới
       </label>
      </div>
      <button type="submit" class="btn btn-primary">
       Submit
      </button>
     </form>
    </div>
   </div>
  </div>
 );
}
