import React, { useState } from 'react'
import styles from './CartPaymentlists.module.css'
import { FaTimesCircle } from "react-icons/fa";

export default function CartPaymentlists() {
    const [countPrice, setCountPrice] = useState(1);
    return (
        <div className={styles.cartPaymentlists}>
            <table class="table">
                <thead>
                    <tr>
                        <th class="text-center" scope="col">Sản Phẩm</th>
                        <th class="text-center" scope="col">GIÁ</th>
                        <th class="text-center" scope="col">SỐ LƯỢNG</th>
                        <th class="text-center" scope="col">TỔNG</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <FaTimesCircle />
                        </th>
                        <td class="text-center" >100,000 Đ</td>
                        <td style={{ display: 'flex', alignItems: 'center', justifyItems: "center", margin: "auto" }}>
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
                        </td>
                        <td class="text-center" >7,000,000 đ</td>
                    </tr>

                    <tr>
                        <th scope="row">
                            <FaTimesCircle />
                        </th>
                        <td class="text-center" >100,000 Đ</td>
                        <td class="row">
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
                                onClick={() =>
                                    setCountPrice(
                                        countPrice >= 10
                                            ? (countPrice = 10)
                                            : countPrice + 1
                                    )
                                }
                            >
                                +
                            </div>
                        </td>
                        <td class="text-center" >7,000,000 đ</td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <FaTimesCircle />
                        </th>
                        <td class="text-center" >100,000 Đ</td>
                        <td class="align-items-center">
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
                                onClick={() =>
                                    setCountPrice(
                                        countPrice >= 10
                                            ? (countPrice = 10)
                                            : countPrice + 1
                                    )
                                }
                            >
                                +
                            </div>
                        </td>
                        <td class="text-center" >7,000,000 đ</td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}
