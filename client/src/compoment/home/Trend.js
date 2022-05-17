import React from 'react'
import styles from './trend.module.css'


const trend = () => {
    return (
        <>
            <div className={styles.trend_container}>
                <div className={styles.trend_container_list}>
                    <div className={styles.trend_container_list_item}>
                        <ul className={styles.trend_container_list_main}>
                            <h2 className={styles.trend_container_list_main_heading}>Xu hướng 2019</h2>
                            <h1 className={styles.trend_container_list_main_description}>
                                ĐỒNG HỒ NAM
                            </h1>
                        </ul>
                        <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-1.jpg" className={styles.trend_container_list_item_img} />

                    </div>
                    <div className={styles.trend_container_list_item}>
                        <ul className={styles.trend_container_list_main}>
                            <h2 className={styles.trend_container_list_main_heading}>Xu hướng 2019</h2>
                            <h1 className={styles.trend_container_list_main_description}>
                                ĐỒNG HỒ NỮ
                            </h1>
                        </ul>
                        <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-2.jpg" className={styles.trend_container_list_item_img} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default trend
