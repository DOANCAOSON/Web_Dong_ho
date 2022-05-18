import React from "react";
import Slider from "react-slick";
import styles from "./cartProductdescription.module.css";

export default function CartProductdescription() {
     const settings = {
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: 5,
         slidesToScroll: 5,
     };
    return (
        <div>
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
                    <div
                        className={
                            styles.CartProductdescription_item
                        }
                    >
                        Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Sunt
                        saepe nam dolor dolorum nulla enim
                        excepturi quas illo aperiam omnis,
                        hic esse! At quos consequuntur
                        maxime nulla veniam nisi magni.
                        <br />
                        <br />
                        Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Rerum
                        accusantium optio veniam magni
                        labore. Dolorum nesciunt eius in
                        doloremque laborum eligendi iusto
                        perferendis. Dolorum unde quaerat
                        excepturi dolor perspiciatis. Minus.
                        Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit.
                        Excepturi veritatis, molestiae
                        laudantium quidem a, quas laborum
                        reiciendis aut nostrum ducimus
                        corporis sequi sit quis optio
                        voluptatem incidunt nisi blanditiis
                        inventore!
                    </div>
                </div>
            </div>
            <div className=" row border mt-4"></div>

            <div>
                <div className="row">
                    <h4 className="col-lg-12 mt-4">
                        SẢN PHẨM TƯƠNG TỰ
                    </h4>
                </div>
                <div>
                    <div>
                        <h2> Single Item</h2>
                        <Slider {...settings}>
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}
