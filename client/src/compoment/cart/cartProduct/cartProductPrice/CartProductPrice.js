import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { addProductItemActions } from "../../../../actions/addProductItemActions";
import styles from "./CartProductPrice.module.css";

const APISHIP = [
  {
    img: "http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-ghn.jpg",
  },
  {
    img: "http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-ghtk.jpg",
  },
  {
    img: "http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-ninja-van.jpg",
  },
  {
    img: "http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-shipchung.jpg",
  },
  {
    img: "http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-viettle-post.jpg",
  },
  {
    img: "http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-vn-post.jpg",
  },
];

const APIPAYMENT = [
  {
    img: "http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-acb.jpg",
  },
  {
    img: "http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-techcombank.jpg",
  },
  {
    img: "http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-vib.jpg",
  },
  {
    img: "http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-vcb.jpg",
  },
  {
    img: "http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-paypal.jpg",
  },
  {
    img: "http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2018/10/logo-mastercard.jpg",
  },
];

const APICONCACALL = APISHIP.concat(APIPAYMENT);

export default function CartProductPrice() {
  const [priceUp, setPriceUp] = useState();
  const [priceDow, setPriceDow] = useState();
  const [countPrice, setCountPrice] = useState(1);

  const handleDown = () => { };

  const handleUp = () => { };
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  //redux
  const dispatch = useDispatch();
  const { id } = useParams()
  const addproductsitemstate = useSelector(
    (state) => state.getItemProductsReducer
  );
  const { products, err, loading } = addproductsitemstate;
  console.log(products)
  useEffect(() => {
    if (id) {
      dispatch(addProductItemActions(id));
    }
  }, [id, dispatch]);
  return (
    <div className="p-5">
      <div className="row">
        <Link className={styles.cartProductPrice_link} to="/">
          TRANG CHỦ
        </Link>
        <div className="border"></div>
        <Link to="" className={styles.cartProductPrice_link}>
          POPULAR
        </Link>
      </div>
      <div>
        <h1 className={styles.cartProductPrice_name}>
          {products.name}
        </h1>
      </div>
      <div className={styles.cartProductPrice_boder}></div>
      <div className={styles.cartProductPrice_item}>
        {products.price}
      </div>
      <ul>
        <li className={styles.cartProductPrice_description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nam fringilla augue nec est tristique auctor.
          Donec non est at libero vulputate rutrum. Morbi ornare
          lectus quis justo gravida semper. Nulla tellus mi,
          vulputate adipiscing cursus eu, suscipit id nulla.
        </li>
      </ul>
      <ul>
        <li
          style={{
            listStyleType: "circle",
            fontSize: "14px",
            marginLeft: "10px",
            color: "#a29994",
          }}
        >
          Sku: P006
        </li>
        <li
          style={{
            listStyleType: "circle",
            fontSize: "14px",
            marginLeft: "10px",
            color: "#a29994",
          }}
        >
          Categories: Butter & Eggs, Cultured Butter
        </li>
        <li
          style={{
            listStyleType: "circle",
            fontSize: "14px",
            marginLeft: "10px",
            color: "#a29994",
          }}
        >
          Tag: Man
        </li>
      </ul>
      <div className="row">
        <div className="row ml-3">
          <div
            style={{
              width: "30px",
              height: "30px",
              lineHeight: "30px",
            }}
            className="border text-center"
            onClick={() =>
              setCountPrice(
                countPrice <= 1 ? (countPrice = 1) : countPrice - 1
              )
            }
          >
            -
          </div>
          <div
            style={{
              width: "30px",
              height: "30px",
              lineHeight: "30px",
            }}
            className="border text-center"
          >
            {countPrice}
          </div>
          <div
            style={{
              width: "30px",
              height: "30px",
              lineHeight: "30px",
            }}
            className="border text-center"
            onClick={() =>
              setCountPrice(
                countPrice >= 10
                  ? (countPrice = 10)
                  : countPrice + 1
              )
            }
          >
            +
          </div>
        </div>
        <div className="ml-4">
          <button
            style={{
              backgroundColor: "#d26e4b",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "500",
              height: "100%",
              padding: "5px 10px",
            }}
            className="ml-4 border-0 "
          >
            THÊM VÀO GIỎ
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-6">
          <div className="m-4">Tính phí ship tự động</div>
          <div className="row">
            {APISHIP.map((item, index) => {
              return (
                <div
                  key={index}
                  data-toggle="modal"
                  data-target="#exampleModal"
                  className="col-lg-4"
                >
                  <div>
                    <img
                      className={styles.cartProductPrice_modal}
                      src={item.img}
                    />
                  </div>
                </div>
              );
            })}
            {/* modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div
                  style={{ marginTop: "30%" }}
                  className="modal-content shadow-sm p-4 mb-5 bg-white rounded"
                >
                  <div className="modal-body ">
                    <Slider {...settings}>
                      {APICONCACALL.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className=""
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            <div className="col-lg-12">
                              <img
                                className={styles.cartProductPrice_modal}
                                src={item.img}
                                alt=""
                              />
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="m-4">Thanh toán</div>
          <div className="row">
            {APIPAYMENT.map((item, index) => {
              return (
                <div
                  key={index}
                  data-toggle="modal"
                  data-target="#exampleModal"
                  className="col-lg-4"
                >
                  <div>
                    <img
                      className={styles.cartProductPrice_modal}
                      src={item.img}
                    />
                  </div>
                </div>
              );
            })}
            {/* modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div
                  style={{ marginTop: "30%" }}
                  className="modal-content shadow-sm p-4 mb-5 bg-white rounded"
                >
                  <div className="modal-body ">
                    <Slider {...settings}>
                      {APIPAYMENT.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className=""
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            <div className="col-lg-12">
                              <img
                                className={styles.cartProductPrice_modal}
                                src={item.img}
                                alt=""
                              />
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 ml-1">
        <h6 style={{ fontSize: "14px" }}>
          "Hãy trở thành Affilicate của chúng tôi để tìm thêm thu
          nhập thụ động, kiếm tiền online"
        </h6>
      </div>
      <div className="mt-2">
        <button
          style={{
            backgroundColor: "#d26e4b",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "500",
            borderRadius: "2px",
          }}
          className="border-0 p-2"
        >
          ĐĂNG KÍ AFFILICATE
        </button>
      </div>

      <ul className="mt-4">
        <li className={styles.cartProductPrice_info}>
          Thêm yêu thích
        </li>
        <li className={styles.cartProductPrice_info}>
          Mã: P006-1-1-1-1-1-1-1-1-1-1-1-1-1-1{" "}
        </li>
        <li className={styles.cartProductPrice_info}>
          Danh mục: Đồng hồ nữ, Popular
        </li>
      </ul>
    </div>
  );
}
