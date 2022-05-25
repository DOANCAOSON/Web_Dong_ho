import React, { useState } from 'react'
import styles from './CartPaymentlists.module.css'
import { FaTimesCircle } from "react-icons/fa";

export default function CartPaymentlists() {
    const [countPrice, setCountPrice] = useState(1);
    return (
        <div className={styles.cartPaymentlists}>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center" scope="col">Sản Phẩm</th>
                        <th className="text-center" scope="col">GIÁ</th>
                        <th className="text-center" scope="col">SỐ LƯỢNG</th>
                        <th className="text-center" scope="col">TỔNG</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <FaTimesCircle className="mr-2" />
                            Classico10
                        </th>
                        <td className="text-center" >100,000 Đ</td>
                        <td style={{ display: 'flex', alignItems: 'center', justifyItems: "center", verticalAlign: 'top' }}>
                            <div style={{ display: 'flex', margin: 'auto' }} className="">
                                <div
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                        lineHeight: "30px",
                                    }}
                                    className="border text-center"
                                    onClick={() =>
                                        setCountPrice(
                                            countPrice <= 1 ? (countPrice = 1) : countPrice - 1
                                        )
                                    }
                                >
                                    -
                                </div>
                                <div
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                        lineHeight: "30px",
                                    }}
                                    className="border text-center"
                                >
                                    {countPrice}
                                </div>
                                <div
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                        lineHeight: "30px",
                                    }}
                                    className="border text-center"
                                    onClick={(e) => {
                                        setCountPrice(
                                            countPrice >= 10
                                                ? (countPrice = 10)
                                                : countPrice + 1
                                        )
                                    }
                                    }
                                >
                                    +
                                </div>
                            </div>
                        </td>
                        <td className="text-center" >7,000,000 đ</td>
                    </tr>

                </tbody>
            </table>
        </div >
    )
}
