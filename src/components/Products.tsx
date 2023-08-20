import { useFilter } from '../hocks/useFilter'
import initialProducts from '../mocks/products.json'
import { Product } from './Product'

export const Products = () => {
  const { filterProducts } = useFilter()
  const products = filterProducts(initialProducts.products.map(product => {
    return {
      ...product,
      quantity: 0
    }
  }))
  console.log('render desde product')

  return (

    <ul>

      {
        products.map(product => {
          return (
            <Product key={product.id} product={product} forCart={true}/>
          )
        })
      }

    </ul>
  )
}
