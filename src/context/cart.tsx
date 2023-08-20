import { type ReactNode, createContext, useState } from 'react'
import { type CartProductList, type CartContext as CartContextType } from '../types'

export const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProductList>([] as CartProductList)
  const [toggleCart, setToggleCart] = useState<boolean>(false)

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      toggleCart,
      setToggleCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
