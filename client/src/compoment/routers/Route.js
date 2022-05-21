import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import clsx from 'clsx';
import { FaSkype, FaGooglePlus, FaJsSquare, FaLinkedin, FaOpencart, FaPhoneAlt, FaAddressCard, FaFacebookF, FaTwitter, FaInstagram, FaSistrix, FaFacebook } from 'react-icons/fa';
import { IoIosHeartEmpty } from "react-icons/io";
import styles from './route.module.css'
import Home from '../home/Home'
import Blog from '../blogs/Blog';
import Contact from '../contact/Contact';
import ProductFemale from '../details/ProductFemale';
import ProductMen from '../details/ProductMen';
import Introduce from '../introduces/Introduce'
import CartProducts from '../cart/CartProducts'
import CartPaymentall from '../cart/cartPaymentall/CartPaymentall';
import Admin from '../admin/Postadmin';



const Routerse = ({ pink }) => {

    const active = clsx(styles.header_list_item_link, {
        [styles.pink]: pink,
    })

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.header_container}>
                    <div className={styles.header_address}>
                        <div className={styles.header_address_list}>
                            <div className={styles.header_address_list}>
                                <FaAddressCard className={styles.header_icon} />
                                <span>319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM</span>
                            </div>
                            <div className={styles.header_numberphone}>
                                <FaPhoneAlt className={styles.header_icon} />
                                <span>076 922 0162</span>
                            </div>
                        </div>
                        <div className={styles.header_address_list}>
                            <FaFacebookF className={styles.header_icon} />
                            <FaInstagram className={styles.header_icon} />
                            <FaTwitter className={styles.header_icon} />
                        </div>
                    </div>
                    <div className={styles.header_main}>
                        <Link to='/' className={styles.header_main_logo}>
                            <img className={styles.header_main_logo_item} src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/logo-mona-2.png" />
                        </Link>
                        <div className={styles.header_main_search}>
                            <div className={styles.header_main_search_input}>
                                <input
                                    className={styles.header_main_search_input_item}
                                    placeholder="Tìm kiếm..."
                                />
                            </div>
                            <div style={{ height: '100%' }} className={styles.header_main_search_icon}>
                                <FaSistrix className={styles.header_main_search_icon_item} />
                            </div>

                        </div>
                        <div className={styles.header_main_cart}>
                            <IoIosHeartEmpty className={styles.header_main_cart_icon} />
                            <Link to="/cartpayment">
                                <FaOpencart className={styles.header_main_cart_icon} />
                            </Link>
                        </div>
                    </div>
                    <ul className={styles.header_list}>
                        <li className={styles.header_list_item}>
                            <Link className={active} to="/">Trang chủ</Link>
                        </li>
                        <li className={styles.header_list_item}>
                            <Link className={styles.header_list_item_link} to="/introduce">Giới Thiệu</Link>
                        </li>
                        <li className={styles.header_list_item}>
                            <Link className={styles.header_list_item_link} to="/productMen">Đồng Hồ Nam</Link>
                        </li>
                        <li className={styles.header_list_item}>
                            <Link className={styles.header_list_item_link} to="/productFemale">Đồng Hồ Nữ</Link>
                        </li>
                        <li className={styles.header_list_item}>
                            <Link className={styles.header_list_item_link} to="/blog">BLOGS</Link>
                        </li>
                        <li className={styles.header_list_item}>
                            <Link className={styles.header_list_item_link} to="/contact">Liên Hệ</Link>
                        </li>
                    </ul>
                </div>
            </header>

            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/introduce" element={<Introduce />} />
                <Route path="/introduce" element={<Introduce />} />
                <Route path="/productMen" element={<ProductMen />} />
                <Route path="/productFemale" element={<ProductFemale />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products/:id" element={<CartProducts />} />
                <Route path="/cartpayment" element={<CartPaymentall />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <footer className={styles.footer}>
                <div className={styles.footer_container}>
                    <div className={styles.footer_container_list}>
                        <div className={styles.footer_container_list_item}>
                            <h1 className={styles.footer_container_list_item_heading}>THÔNG TIN LIÊN HỆ</h1>
                            <p className={styles.footer_container_list_item_addres}> <FaAddressCard className={styles.footer_container_icon} />319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                            <p className={styles.footer_container_list_item_addres}> <FaPhoneAlt className={styles.footer_container_icon} />076 922 0162</p>
                            <p className={styles.footer_container_list_item_addres}><FaGooglePlus className={styles.footer_container_icon} />demonhunterg@gmail.com</p>
                            <p className={styles.footer_container_list_item_addres}> <FaSkype className={styles.footer_container_icon} />demonhunterp</p>
                            <div className={styles.footer_container_list_item_heading_icon}>
                                <FaFacebook className={styles.footer_container_list_item_heading_icon_item} />
                                <FaInstagram className={styles.footer_container_list_item_heading_icon_item} />
                                <FaTwitter className={styles.footer_container_list_item_heading_icon_item} />
                                <FaLinkedin className={styles.footer_container_list_item_heading_icon_item} />
                                <FaJsSquare className={styles.footer_container_list_item_heading_icon_item} />
                            </div>

                        </div>
                        <div className={styles.footer_container_list_item}>
                            <h1 className={styles.footer_container_list_item_heading}>
                                LIÊN KẾT
                            </h1>
                            <p className={styles.footer_container_list_item_addres}>Giới thiệu</p>
                            <p className={styles.footer_container_list_item_addres}>Đồng hồ nam</p>
                            <p className={styles.footer_container_list_item_addres}>Đồng hồ nữ</p>
                            <p className={styles.footer_container_list_item_addres}>Blogs</p>
                            <p className={styles.footer_container_list_item_addres}>Liên hệ</p>


                        </div>
                        <div className={styles.footer_container_list_item}>
                            <h1 className={styles.footer_container_list_item_heading}>HỖ TRỢ</h1>
                            <p className={styles.footer_container_list_item_addres}>Hướng dẫn mua hàng</p>
                            <p className={styles.footer_container_list_item_addres}>Hướng dẫn thanh toán</p>
                            <p className={styles.footer_container_list_item_addres}>Chính sách bảo hành</p>
                            <p className={styles.footer_container_list_item_addres}>Chính sách đổi trả</p>
                            <p className={styles.footer_container_list_item_addres}>Tư vấn khách hàng</p>


                        </div>
                        <div className={styles.footer_container_list_item}>
                            <h1 className={styles.footer_container_list_item_heading}>TẢI ỨNG DỤNG TRÊN</h1>
                            <p className={styles.footer_container_list_item_addres}>Ứng dụng Mona Watch hiện có sẵn trên <br /> Google Play & App Store. Tải nó ngay.</p>
                            <img src='http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-googleplay.jpg' />
                            <br />
                            <img src='http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-appstore.jpg' />

                        </div>
                    </div>
                    <div className={styles.footer_container_border} />
                    <div className={styles.footer_container_list} >
                        <div className={styles.footer_container_license}>
                            © Bản quyền thuộc về . Thiết kế website MonaMedia Mona Media
                        </div>
                        <div className={styles.footer_container_license}>
                            <img src='http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-payment.png' />
                        </div>
                    </div>
                </div>
            </footer >
        </div >

    )
}

export default Routerse
