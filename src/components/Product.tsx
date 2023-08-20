import React from 'react'
import { type CartProduct } from '../types'
import { AddToCartIcon } from './Icons'
import { useCart } from '../hocks/useCart'

interface Props {
  product: CartProduct
  forCart?: boolean
  inCart?: boolean
}

export const Product: React.FC<Props> = ({ product, forCart = false, inCart = false }) => {
  const { addProductToCart } = useCart()

  const handleClick = () => {
    addProductToCart({ product })
  }

  return (
    <li className="item">

      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <strong>${product.price}</strong>
      <p>{product.description}</p>

      { forCart &&
        <button onClick={handleClick}>
          <AddToCartIcon/>
        </button>
      }

      {
        inCart &&
        <strong>{product.quantity}</strong>
      }

  </li>
  )
}
