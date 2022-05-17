import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home_blog.module.css'

const APIBOLGS = [
    {
        id: 1,
        img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-4.jpg',
        title: 'Chiếc đồng hồ của những CEO quyền lực nhất thế giới',
        description: '0 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan tâm, Rolex xếp hạng0 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan tâm, Rolex xếp hạng0 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan tâm, Rolex xếp hạng'
    },
    {
        id: 2,
        img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-2.jpg',
        title: '12 chiếc đồng hồ dành cho nữ giới đắt giá nhất mọi thời đại',
        description: 'Công nghiệp sản xuất đồng hồ sang trọng có dấu hiệu chững lại trong hai Công nghiệp sản xuất đồng hồ sang trọng có dấu hiệu chững lại trong haiCông nghiệp sản xuất đồng hồ sang trọng có dấu hiệu chững lại trong haiCông nghiệp sản xuất đồng hồ sang trọng có dấu hiệu chững lại trong hai'
    },
    {
        id: 3,
        img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-3.jpg',
        title: '10 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan tâm, Rolex xếp hạng',
        description: '1. Audemars Piguet Được thành lập vào năm 1875 bởi Jules-Louis Audemars và Edward-Auguste Piguet, ...'
    },


]

const Home_blog = () => {
    return (
        <>
            <div className={styles.blog_container}>
                <div className={styles.blog_container_lists}>
                    {APIBOLGS.map((item, index) =>
                    (
                        <Link to='/blog' key={index} className={styles.blog_container_list}>
                            <div className={styles.blog_container_list_img}>
                                <img src={item.img} className={styles.products_container_list_img_item} />
                            </div>
                            <div className={styles.blog_container_list_main}>
                                <div className={styles.blog_container_list_main_heading}>
                                    {item.title}
                                </div>
                                <span className={styles.blog_container_list_main_description} >{item.description}</span>
                            </div>
                        </ Link>
                    ))}
                </div>

            </div >
        </>
    )
}

export default Home_blog
