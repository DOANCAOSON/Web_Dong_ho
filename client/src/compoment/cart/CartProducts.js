import React from 'react'
import CartProductItem from './cartProduct/CartProductItem'
import styles from './CartProducts.module.css'

export default function CartProducts() {
  return (
    <div style={{ marginBottom: '200px' }} className="mt-4">
      <CartProductItem />
    </div>
  )
}
