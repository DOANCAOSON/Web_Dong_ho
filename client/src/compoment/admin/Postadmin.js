import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProductItemActions } from "../../actions/createProductItemActions";
import styles from "./postadmin.module.css";

export default function Postadmin() {
 const [name, setName] = useState("");
 const [price, setPrice] = useState("");
 const [img1, setImg1] = useState("");
 const [img, setImg] = useState([]);
 const [moi, setMoi] = useState(false);
 const [phobien, setPhobien] = useState(false);
 const [khuyenmai, setKhuyenmai] = useState(false);

 const dispatch = useDispatch();
 function handleSubmit(e) {
  e.preventDefault();
  const postItem = {
   name,
   price,
   img,
   moi,
   phobien,
   khuyenmai,
  };
  dispatch(createProductItemActions(postItem));
  setImg([]);
 }
 const focus = useRef(null);
 const handleAdd = (e) => {
  e.preventDefault();
  setImg((prev) => [...prev, img1]);
  setImg1("");
  focus.current.focus();
 };
 console.log(img);
 return (
  <div className="container mt-4 mb-4">
   <div className=" ">
    <div className="col-lg-6 mt-4">
     <form className="mt-4" action="">
      <div className="mb-3">
       <label
        htmlFor="exampleInputEmail1"
        className="form-label"
       >
        Name :
       </label>
       <input
        required
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        name="name"
        value={name}
        onChange={(e) => {
         setName(e.target.value);
        }}
       />
      </div>
      <div className="mb-3">
       <label
        htmlFor="exampleInputPassword1"
        className="form-label"
       >
        Price :
       </label>
       <input
        type="text"
        className="form-control"
        id="exampleInputPassword1"
        name="price"
        value={price}
        onChange={(e) => {
         setPrice(e.target.value);
        }}
       />
      </div>

      <div className="mb-3">
       <label htmlFor="img" className="form-label">
        Img 1 :
       </label>
       <input
        ref={focus}
        required
        type="text"
        className="form-control"
        id="img"
        name="img"
        value={img1}
        onChange={(e) => setImg1(e.target.value)}
       />
       <button
        onClick={handleAdd}
        className="border-0 mt-2 btn btn-primary"
       >
        Hãy Bấm vào đây để thêm ảnh Thêm ảnh
       </button>
      </div>
      <div className="mb-3 form-check">
       <input
        type="checkbox"
        className="form-check-input"
        id="phobien"
        name="phobien"
        value={phobien}
        onChange={(e) => {
         setPhobien(true);
        }}
       />
       <label
        className="form-check-label"
        htmlFor="phobien"
       >
        Sản phẩm Phổ Biến
       </label>
      </div>
      <div className="mb-3 form-check">
       <input
        type="checkbox"
        className="form-check-input"
        id="khuyenmai"
        name="khuyenmai"
        value={khuyenmai}
        onChange={(e) => {
         setKhuyenmai(true);
        }}
       />
       <label
        className="form-check-label"
        htmlFor="khuyenmai"
       >
        Sản phẩm Khuyễn Mãi
       </label>
      </div>

      <div className="mb-3 form-check">
       <input
        type="checkbox"
        className="form-check-input"
        id="moi"
        name="moi"
        value={moi}
        onChange={(e) => {
         setMoi(true);
        }}
       />
       <label className="form-check-label" htmlFor="moi">
        Sản phẩm mới
       </label>
      </div>
      <button
       onClick={handleSubmit}
       type="submit"
       className="btn btn-primary"
      >
       Submit
      </button>
     </form>
    </div>
   </div>
  </div>
 );
}
