import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import clsx from 'clsx';
import { FaOpencart, FaPhoneAlt, FaAddressCard, FaFacebookF, FaTwitter, FaInstagram, FaSistrix } from 'react-icons/fa';
import { IoIosHeartEmpty } from "react-icons/io";
import styles from './route.module.css'
import Home from '../home/Home'
import Blog from '../blogs/Blog';
import Contact from '../contact/Contact';
import ProductFemale from '../details/ProductFemale';
import ProductMen from '../details/ProductMen';
import Introduce from '../introduces/Introduce'



const Routerse = ({ pink }) => {

    const active = clsx(styles.header_list_item_link, {
        [styles.pink]: pink,
    })

    return (
        <div>
            <nav className={styles.header_container}>
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
                    <div className={styles.header_main_logo}>
                        <img className={styles.header_main_logo_item} src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/logo-mona-2.png" />
                    </div>
                    <div className={styles.header_main_search}>
                        <div className={styles.header_main_search_input}>
                            <input 
                                className={styles.header_main_search_input_item}
                                placeholder="Tìm kiếm..."
                            />
                        </div>
                        <div className={styles.header_main_search_icon}>
                            <FaSistrix className={styles.header_main_search_icon_item} />
                        </div>

                    </div>
                    <div className={styles.header_main_cart}>
                        <IoIosHeartEmpty className={styles.header_main_cart_icon}/>
                        <FaOpencart className={styles.header_main_cart_icon}/>
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
            </nav>

            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/introduce" element={<Introduce />} />
                <Route path="/introduce" element={<Introduce />} />
                <Route path="/productMen" element={<ProductMen />} />
                <Route path="/productFemale" element={<ProductFemale />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>

    )
}

export default Routerse