import { useCart } from '../hocks/useCart'
import { CartIcon } from './Icons'

export const Header = () => {
  const { setToggleCart, toggleCart } = useCart()

  const handleClick = () => {
    setToggleCart(!toggleCart)
  }

  return (
    <header>
      <h1>Carrito de Compras</h1>
      <button onClick={handleClick}>
        <CartIcon></CartIcon>
      </button>
    </header>
  )
}
