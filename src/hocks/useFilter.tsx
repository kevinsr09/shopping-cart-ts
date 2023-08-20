import { useContext } from 'react'
import { type CartProductList, type Filter } from '../types'
import { FilterContext } from '../context/filter'
import initialProducts from '../mocks/products.json'

export function useFilter () {
  const { filter, setFilter } = useContext(FilterContext)

  const AllProducts = () => {
    return initialProducts
  }
  console.log('render desde useFilter')

  const filterProducts = (products: CartProductList) => {
    return products.filter(product => {
      return (product.price >= filter.price && (filter.category === 'all' || product.category === filter.category))
    })
  }

  const updateFilter = (value: string | number) => {
    if (typeof value === 'number') {
      setFilter((preValue: Filter) => {
        return {
          ...preValue,
          price: value
        }
      })
      return
    }

    setFilter((preValue: Filter) => {
      return {
        ...preValue,
        category: value
      }
    })
  }

  return { filter, updateFilter, filterProducts, AllProducts }
}
