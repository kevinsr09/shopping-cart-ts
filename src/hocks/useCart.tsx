import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { type Product } from '../types'

export function useCart () {
  const { cart, setCart, toggleCart, setToggleCart } = useContext(CartContext)

  const addProductToCart = ({ product }: { product: Product }) => {
    const productInCart = cart.findIndex(cartProduct => cartProduct.id === product.id)

    if (productInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCart].quantity += 1
      setCart(newCart)
      return
    }

    const newCart = [
      ...cart,
      {
        ...product,
        quantity: 1
      }
    ]

    setCart(newCart)
  }

  return { cart, setCart, toggleCart, setToggleCart, addProductToCart }
}
