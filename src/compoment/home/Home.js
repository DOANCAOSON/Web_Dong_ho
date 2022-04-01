import styles from './home.module.css'
import React, { useEffect, useRef, useState } from 'react'
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

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
    img: 'http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/slide-bg-2.jpg',
  },
]
const Home = () => {
  const [count, setCount] = useState(100)
  const widths = useRef()
  const setwidths = useRef()

  const apiLength = APIFAKESLIDER.length

  useEffect(() => {
    const width = widths.current
    width.style.width = 100 * apiLength + '%'
  }, [])

  const handleUp = () => {
    const a = setwidths.style.translateY(-50 + '%')
  }

  const handleDown = () => {

  }
  return (
    <>
      <div className={styles.slider_container} >
        <div ref={setwidths} className={styles.slider_container_list}>
          <div ref={widths} className={styles.slider_container_list_item}>
            {APIFAKESLIDER.map((element) =>
            (
              <div className={styles.slider_container_list_content} key={element.id}>
                <div className={styles.slider_container_list_content_list}>
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
        <div className={styles.slider_container_icon_list}>
          < BiChevronLeftCircle onClick={handleDown} className={styles.slider_container_icon_icon} />
          < BiChevronRightCircle onClick={handleUp} className={styles.slider_container_icon_icon} />
        </div>
      </div>
    </>
  )
}

export default Home