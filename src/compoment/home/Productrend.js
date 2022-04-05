import React, { useState, useEffect, useLayoutEffect } from 'react'
import styles from './productrend.module.css'

const APIFAKEPRODUCT = [
    {
        id: 1,
        name: 'Classico1',
        price: 300000,
        img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-11.jpg',
    },
    {
        id: 2,
        name: 'Classico2',
        price: 600000,
        img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-16.jpg',
    },
    {
        id: 3,
        name: 'Classico3',
        price: 200000,
        img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-10.jpg',
    },
    {
        id: 4,
        name: 'Classico4',
        price: 100000,
        img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-14.jpg',
    },
    {
        id: 5,
        name: 'Classico5',
        price: 600000,
        img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-13.jpg',
    },
    {
        id: 6,
        name: 'Classico6',
        price: 800000,
        img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-09.jpg',
    },
    {
        id: 7,
        name: 'Classico7',
        price: 300000,
        img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-04.png',
    },
    {
        id: 8,
        name: 'Classico8',
        price: 200000,
        img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-08.jpg',
    },
    {
        id: 9,
        name: 'Classico9',
        price: 400000,
        img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-07.jpg',
    },
    {
        id: 10,
        name: 'Classico10',
        price: 800000,
        img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-12.jpg',
    },
]

const arrayHeading = ['Sản phẩm phổ biến', 'Sản phẩm khuyến mãi', ' Sản phẩm mới']

const Productrend = () => {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    const [type, setType] = useState('Sản phẩm phổ biến')
    // useEffect(() => {
    //     APIFAKEPRODUCT.map(post => setPosts(post))

    // }, [posts])

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
                {APIFAKEPRODUCT.map(item => (
                    <div key={item.id} className={styles.productmain_container_list_items}>
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
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Productrend