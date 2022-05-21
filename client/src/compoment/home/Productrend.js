import React, {
    useState,
    useEffect,
    useLayoutEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../actions/productActions";
import Loading from "../loading/Loading";
import styles from "./productrend.module.css";

const arrayHeading = [
    "Sản phẩm phổ biến",
    "Sản phẩm khuyến mãi",
    " Sản phẩm mới",
];

const Productrend = () => {
    const dispatch = useDispatch();

    const productsstate = useSelector(
        (state) => state.getAllProductsReducer
    );
    const { products, err, loading } = productsstate;
    console.log(productsstate);
    useEffect(() => {
        dispatch(getAllProducts());
    }, []);
    const [type, setType] = useState("Sản phẩm phổ biến");

    const addProductItem = () => {
        dispatch(addProductItem(products));
    }

    return (
        <div className={styles.productrend_container}>
            <div
                className={
                    styles.productrend_container_heading_all
                }
            >
                {arrayHeading.map((types) => (
                    <div
                        style={
                            types === type
                                ? {
                                    color: "#c89979",
                                }
                                : {}
                        }
                        onClick={() => {
                            console.log("11");
                            setType(types);
                        }}
                        key={types}
                        className={
                            styles.productrend_container_heading
                        }
                    >
                        <h1
                            className={
                                styles.productrend_container_heading_item
                            }
                        >
                            {types}
                        </h1>
                    </div>
                ))}
            </div>
            <div className="row shadow-none p-3 mb-5 bg-light rounded">
                {products ? (
                    products.map((item, index) => {
                        return (
                            <Link
                                to={`/products/${item._id}`}
                                key={item._id}
                                className="col-sm-3 mt-3 "
                            >
                                <div
                                    className={
                                        styles.productmain_container_list_img
                                    }
                                >
                                    <img
                                        alt=""
                                        src={item.img}
                                        className={
                                            styles.productmain_container_list_img_item
                                        }
                                    />
                                </div>
                                <div
                                    className={
                                        styles.productmain_container_list_description
                                    }
                                >
                                    <div
                                        className={
                                            styles.productmain_container_list_description_name
                                        }
                                    >
                                        {item.name}
                                    </div>
                                    <div
                                        className={
                                            styles.productmain_container_list_description_price
                                        }
                                    >
                                        {item.price}đ
                                    </div>
                                    <button
                                        className={
                                            styles.productmain_container_list_btn
                                        }
                                        onClick={addProductItem}
                                    >
                                        THÊM VÀO GIỎ
                                    </button>
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    );
};

export default Productrend;
