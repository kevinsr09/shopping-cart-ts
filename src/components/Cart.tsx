import { Product } from './Product'
import { useCart } from '../hocks/useCart'

export const Cart: React.FC = () => {
  const { cart, toggleCart } = useCart()
  const classList = toggleCart ? 'cart' : 'cart cart-active'

  return (

    <aside className={classList}>
      <h3>Carrito de compras</h3>
      <ul >
        {
          cart.map(product => {
            return (
              <Product key={product.id} product={product} inCart={true}/>
            )
          })
        }
      </ul>
    </aside>

  )
}
