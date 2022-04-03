import React from 'react'
import styles from './product.module.css'
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

const Product = () => {
  return (
    <>
      <div className={styles.product_container}>
        <div className={styles.product_container_heading}>
          <div className={styles.product_container_heading_item}>
            Sản phẩm bán chạy
          </div>
          <div className={styles.product_container_icon}>
            < BiChevronLeftCircle className={styles.product_container_icon_item} />
            < BiChevronRightCircle className={styles.product_container_icon_item} />
          </div>
        </div>

        <div className={styles.products_container}>
          <div className={styles.products_container_lists_move}>
            <div className={styles.products_container_list}>
              <div className={styles.products_container_list_items}>

              </div>

              <div className={styles.products_container_list_items}>

              </div>
              <div className={styles.products_container_list_items}>

              </div>
              <div className={styles.products_container_list_items}>

              </div>
              <div className={styles.products_container_list_items}>

              </div>

              <div className={styles.products_container_list_items}>

              </div>

              <div className={styles.products_container_list_items}>

              </div>
              <div className={styles.products_container_list_items}>

              </div>
              <div className={styles.products_container_list_items}>

              </div>
              <div className={styles.products_container_list_items}>

              </div>

      
             
            </div>
            </div>
          </div>
        </div>
      </>
      )
}

      export default Product