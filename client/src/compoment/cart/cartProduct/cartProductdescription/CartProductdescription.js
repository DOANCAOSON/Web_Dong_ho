import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./cartProductdescription.module.css";
import Loading from "../../../loading/Loading";
import { getAllProducts } from "../../../../actions/productActions";

export default function CartProductdescription() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
    };

    const dispatch = useDispatch();

    const productsstate = useSelector(
        (state) => state.getAllProductsReducer
    );
    const { products, err, loading } = productsstate;
    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    return (
        <div className={styles.cartProductdescription_center}>
            <div className="row">
                <div className="col-lg-2  ">
                    <div className="row">
                        <div className="col-lg-6 text-center border">
                            Mô tả
                        </div>
                        <div className="col-lg-6 text-center border">
                            Đánh giá
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 border">
                    <div className={styles.CartProductdescription_item}>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Sunt saepe nam dolor dolorum nulla enim
                        excepturi quas illo aperiam omnis, hic esse! At quos
                        consequuntur maxime nulla veniam nisi magni.
                        <br />
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Rerum accusantium optio veniam magni labore.
                        Dolorum nesciunt eius in doloremque laborum eligendi
                        iusto perferendis. Dolorum unde quaerat excepturi
                        dolor perspiciatis. Minus. Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Excepturi veritatis,
                        molestiae laudantium quidem a, quas laborum reiciendis
                        aut nostrum ducimus corporis sequi sit quis optio
                        voluptatem incidunt nisi blanditiis inventore!
                    </div>
                </div>
            </div>
            <div className=" row border mt-4"></div>

            <div>
                <div className="row">
                    <h4 className="col-lg-12 mt-4 text-left ml-4">SẢN PHẨM TƯƠNG TỰ</h4>
                </div>
                <div>
                    <div>
                        <Slider {...settings}>
                            {products ? (
                                products.map((item, index) => {
                                    return (
                                        <div key={index} className="col-sm-12 mt-3 ">
                                            <Link
                                                // to={`/cartproducts/${item.name}`}
                                                to={'#'}
                                                key={item._id}
                                            >
                                                <div
                                                    className={
                                                        styles.productmain_container_list_img__card
                                                    }
                                                >
                                                    <img
                                                        alt=""
                                                        src={item.img[0]}
                                                        className={
                                                            styles.productmain_container_list_img_item__card
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className={
                                                        styles.productmain_container_list_description__card
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.productmain_container_list_description_name__card
                                                        }
                                                    >
                                                        {item.name}
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.productmain_container_list_description_price__card
                                                        }
                                                    >
                                                        {item.price}đ
                                                    </div>
                                                    <button
                                                        className={
                                                            styles.productmain_container_list_btn__card
                                                        }
                                                    >
                                                        THÊM VÀO GIỎ
                                                    </button>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })
                            ) : (
                                <Loading />
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}
