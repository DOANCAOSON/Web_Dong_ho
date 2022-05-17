import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { getAllProducts } from '../../actions/productActions'
import styles from './productrend.module.css'

const arrayHeading = ['Sản phẩm phổ biến', 'Sản phẩm khuyến mãi', ' Sản phẩm mới']

const Productrend = () => {

    const dispatch = useDispatch()

    const productsstate = useSelector((state) => state.getAllProductsReducer)
    const { products, err, loading } = productsstate
    console.log(productsstate)
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    const [type, setType] = useState('Sản phẩm phổ biến')

    return (
        <div className={styles.productrend_container}>
            <div className={styles.productrend_container_heading_all}>
                {arrayHeading.map(types => (
                    <div
                        style={types === type ? {
                            color: '#c89979',
                        } : {}}
                        onClick={() => {
                            console.log('11')
                            setType(types)

                        }}
                        key={types}
                        className={styles.productrend_container_heading}
                    >
                        <h1 className={styles.productrend_container_heading_item}>
                            {types}
                        </h1>
                    </div>
                ))}


            </div>
            <div className={styles.productmain_container}>
                {loading ? (<h1> Loading</h1>) : err ? (<h1>Something went wrong</h1>) : (
                    products.map((item, index) => {
                        return <Link to='/cartproducts' key={item.id} className={styles.productmain_container_list_items}>
                            <div className={styles.productmain_container_list_img}>
                                <img alt="" src={item.img} className={styles.productmain_container_list_img_item} />
                            </div>
                            <div className={styles.productmain_container_list_description}>
                                <div className={styles.productmain_container_list_description_name}>
                                    {item.name}
                                </div>
                                <div className={styles.productmain_container_list_description_price}>
                                    {item.price}đ
                                </div>
                                <button className={styles.productmain_container_list_btn}>THÊM VÀO GIỎ</button>
                            </div>
                        </Link>
                    })
                )}

            </div>
        </div>
    )
}

export default Productrend
