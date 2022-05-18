import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./sliderProductcart.module.css";

const APISLIDER = [
    {
        image: [
            {
                img: "http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-04.png",
            },
            {
                img: "http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-02.png",
            },
            {
                img: "http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-01.png",
            },
            {
                img: "http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-04.png",
            },
        ],
    },
];

const SliderProductcart = () => {
    const [nav, setNav] = useState({
        nav1: null,
        nav2: null,
    });
    let slideRef1 = useRef(null);
    let slideRef2 = useRef(null);

    useEffect(() => {
        setNav({
            nav1: slideRef1,
            nav2: slideRef2,
        });
    }, []);
    return (
        <div>
            <div>
                <Slider
                    asNavFor={nav.nav2}
                    ref={(slider) => (slideRef1 = slider)}
                >

                    {APISLIDER.map((items) => {
                        return items.image.map(
                            (item, index) => {
                                return (
                                    <div key={index}>
                                        <img
                                            className={styles.sliderProductcart_img}
                                            src={item.img}
                                        ></img>
                                    </div>
                                );
                            }
                        );
                    })}
                </Slider>
                <Slider
                    asNavFor={nav.nav2}
                    ref={(slider) => (slideRef2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    className={styles.sliderProductcarts_img}
                >
                    {APISLIDER.map((items) => {
                        return items.image.map(
                            (item, index) => {
                                return (
                                    <div key={index}>
                                        <img
                                            className={styles.sliderProductcart_img}
                                            src={item.img}
                                        ></img>
                                    </div>
                                );
                            }
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};
export default SliderProductcart;
