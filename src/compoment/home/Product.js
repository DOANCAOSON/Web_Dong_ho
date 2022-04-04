import React, { useRef, useState } from 'react'
import styles from './product.module.css'
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

const APIFAKEPRODUCT = [
  {
    id: 1,
    name: 'Classico4',
    price: 300000,
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-05.png',
  },
  {
    id: 2,
    name: 'Classico3',
    price: 600000,
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-04.png',
  },
  {
    id: 3,
    name: 'Classico2',
    price: 200000,
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-03.png',
  },
  {
    id: 4,
    name: 'Classico1',
    price: 100000,
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-02.png',
  },
  {
    id: 5,
    name: 'Classico5',
    price: 600000,
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-01.png',
  },
  {
    id: 6,
    name: 'Classico6',
    price: 800000,
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-05.png',
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
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-03.png',
  },
  {
    id: 9,
    name: 'Classico9',
    price: 400000,
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-02.png',
  },
  {
    id: 10,
    name: 'Classico10',
    price: 800000,
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-01.png',
  },
  {
    id: 11,
    name: 'Classico11',
    price: 900000,
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-05.png',
  },
  {
    id: 12,
    name: 'Classico12',
    price: 1200000,
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-04.png',
  },

]
const Product = () => {
  const [move, setMove] = useState(0)
  const indexs = useRef()
  const handleUp = () => {
    setMove(move => move + 1)
    if (move >= 2) {
      setMove(0)
    }

  }
  const handleDown = () => {
    setMove(move => move - 1)
    if (move <= 0) {
      setMove(2)
    }
  }

  return (
    <>
      <div className={styles.product_container}>
        <div className={styles.product_container_heading}>
          <div className={styles.product_container_heading_item}>
            Sản phẩm bán chạy
          </div>
          <div className={styles.product_container_icon}>
            < BiChevronLeftCircle onClick={handleDown} className={styles.product_container_icon_item} />
            < BiChevronRightCircle onClick={handleUp} className={styles.product_container_icon_item} />
          </div>
        </div>

        <div className={styles.products_container}>
          <div style={{ transform: `translateX(-${move * 100}%)` }} className={styles.products_container_lists_move}>
            <div useRef={indexs} className={styles.products_container_list}>
              {APIFAKEPRODUCT.map(item => (
                <div className={styles.products_container_list_items}>
                  <div className={styles.products_container_list_img}>
                    <img src={item.img} className={styles.products_container_list_img_item} />
                  </div>
                  <div className={styles.products_container_list_description}>
                    <div className={styles.products_container_list_description_name}>
                      {item.name}
                    </div>
                    <div className={styles.products_container_list_description_price}>
                      {item.price}đ
                    </div>
                    <button className={styles.products_container_list_btn}>THÊM VÀO GIỎ</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product