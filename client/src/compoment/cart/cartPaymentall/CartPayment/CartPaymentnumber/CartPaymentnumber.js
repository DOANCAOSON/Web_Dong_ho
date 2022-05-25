import React from "react";
import styles from "./CartPaymentnumber.module.css";

export default function CartPaymentnumber() {
    return (
        <div className="border-left">
            <div className="row pl-4 border-bottom">
                <div style={{ marginBottom: '20px' }} className="col-lg-12 font-weight-bold mt-3">
                    Tổng số lượng :
                </div>
                <div className="col-lg-12 border-bottom mt-4 pb-2">
                    <div className="row">
                        <div className="col-lg-6 font-weight-bold">
                            Tổng Phụ :
                        </div>
                        <div className="col-lg-6 font-weight-light">
                            700000đ
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 border-bottom pb-2">
                    <div className="row mb-2">
                        <div className="col-lg-6 mt-4 font-weight-bold">
                            Giao Hàng :
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-12 mt-2 font-weight-light">
                                    Giao hàng miễn phí
                                </div>
                                <div className="col-lg-12 mt-2 font-weight-light">
                                    Ước tính cho Việt Nam
                                </div>
                                <div className="col-lg-12 mt-2 font-weight-light">
                                    Giao hàng miễn phí
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 mt-4 pb-2">
                    <div className="row">
                        <div className="col-lg-6 font-weight-bold">
                            Tổng :
                        </div>
                        <div className="col-lg-6 font-weight-light">
                            700000đ
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 mt-4">
                    <button
                        style={{ width: "100%" }}
                        type="button"
                        className="btn btn-primary  mt-4"
                    >
                        Tiến Hành Thanh Toán
                    </button>
                </div>

                <div className="col-lg-12 mt-4 border-bottom pb-2">
                    <div className="row">
                        <div className="col-lg-6 font-weight-bold">
                            Phiếu Ưu đãi :
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 mt-4 border-bottom pb-3">
                    <div className="row">
                        <div className="col-lg-12 font-weight-bold">
                            <input
                                style={{ width: "100%", height: "35px" }}
                                type="text"
                                placeholder="Mã Ưu Đãi"
                                className="p-2"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 mt-4 pb-3">
                    <div className="row">
                        <div className="col-lg-12 font-weight-bold">
                            <button
                                style={{
                                    width: "100%",
                                }}
                                type="button"
                                className="btn btn-success mt-4"
                            >
                                Áp Dụng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
