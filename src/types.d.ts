export interface Response {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface CartProduct extends Product {
  quantity: number
}

export type CartProductList = CartProduct[]

export type ListProduct = Product[]

export type ProductType = Product

export interface Filter {

  category: string
  price: number

}

export interface FilterContent {
  filter: Filter
  setFilter: Dispatch<SetStateAction<Filter>>
}

export interface CartContext {
  cart: CartProductList
  setCart: Dispatch<SetStateAction<CartProduct>>
  toggleCart: boolean
  setToggleCart: Dispatch<SetStateAction<boolean>>
}
