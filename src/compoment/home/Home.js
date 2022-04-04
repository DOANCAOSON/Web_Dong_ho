import styles from './home.module.css'
import React, { useEffect, useRef, useState } from 'react'
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import Trend from './Trend'
import Product from './Product';


const APIFAKESLIDER = [
  {
    id: 1,
    name: 'Đồng hồ Clasico',
    brand: 'Mona Watch',
    description: 'Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…',
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/slide-bg-2.jpg',
  },
  {
    id: 2,
    name: 'Đồng hồ Clasico',
    brand: 'Mona Watch',
    description: 'Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…',
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/slide-bg-1.jpg',
  },
  {
    id: 3,
    name: 'Đồng hồ Clasico',
    brand: 'Mona Watch',
    description: 'Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…',
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/slide-bg-2.jpg',
  },
  {
    id: 4,
    name: 'Đồng hồ Clasico',
    brand: 'Mona Watch',
    description: 'Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…',
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/slide-bg-1.jpg',
  },
  {
    id: 5,
    name: 'Đồng hồ Clasico',
    brand: 'Mona Watch',
    description: 'Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…',
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/slide-bg-2.jpg',
  },
  {
    id: 6,
    name: 'Đồng hồ Clasico',
    brand: 'Mona Watch',
    description: 'Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…',
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/slide-bg-1.jpg',
  },
]
const Home = () => {
  const initial = 1;
  const [count, setCount] = useState(initial)
  const widths = useRef()
  const windows = useRef()
  const apiLength = APIFAKESLIDER.length

  useEffect(() => {
    const width = widths.current
    width.style.width = 100 * apiLength + '%'
  }, [])

  const handleUp = () => {
    setCount(count < apiLength - 1 ? count + 1 : initial - 1)
  }

  const handleDown = () => {
    setCount(count > 0 ? count - 1 : apiLength - 1)
  }
  return (
    <>
      <div className={styles.container_all}>
        <div className={styles.container}>
          <div className={styles.slider_container} >
            <div style={{ transform: `translateX(-${count * 100}%)` }} className={styles.slider_container_list}>
              <div count={count} ref={widths} className={styles.slider_container_list_item}>
                {APIFAKESLIDER.map((element, index) =>
                (
                  <div className={styles.slider_container_list_content} key={element.id}>
                    <div ref={windows} className={styles.slider_container_list_content_list}>
                      <li className={styles.slider_container_list_item_name}>
                        {element.name}
                      </li>
                      <li className={styles.slider_container_list_item_brand}>
                        {element.brand}
                      </li>
                      <li className={styles.slider_container_list_item_description} >
                        {element.description}
                      </li>
                      <button className={styles.slider_container_list_btn}>Xem Sản Phẩm</button>
                    </div>
                    <div className={styles.slider_container_list_img} >
                      <img className={styles.slider_container_list_img_item} src={element.img} />
                    </div>
                  </div>
                )
                )}
              </div>
            </div>

            <div className={styles.slider_container_btn} >
              <div className={styles.slider_container_icon_list}>
                < BiChevronLeftCircle onClick={handleDown} className={styles.slider_container_icon_icon} />
                < BiChevronRightCircle onClick={handleUp} className={styles.slider_container_icon_icon} />
              </div>
            </div>
          </div>
        </div>
        <Trend />
        <Product />
      </div>
    </>
  )
}

export default Home