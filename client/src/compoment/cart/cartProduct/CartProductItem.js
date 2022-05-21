import React from 'react'
import SliderProductcart from './SliderProducrtcart/SliderProductcart'
import CartProductPrice from './cartProductPrice/CartProductPrice'
import CartProductdescription from './cartProductdescription/CartProductdescription'
import Cartresgisterinfo from './cartresgisterinfo/Cartresgisterinfo'

export default function CartProductItem() {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-5">
                        <SliderProductcart />
                    </div>
                    <div className="col-7">
                        <CartProductPrice />
                    </div>
                </div>
                <div>
                    <CartProductdescription />
                </div>
                <div>
                    <Cartresgisterinfo />
                </div>
            </div>
        </>
    )
}
