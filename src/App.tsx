import './App.css'
import { Header } from './components/Header'
import { Filters } from './components/Filters'
import { Products } from './components/Products'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App () {
  console.log('render')
  return (
    <CartProvider>
      <div className='root-app'>

        <Cart/>

        <Header />

          <main className='content'>

            <Filters />
            <Products />

          </main>

      </div>
    </CartProvider>
  )
}

export default App
