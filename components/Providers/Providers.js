import CartProvider from 'components/Providers/CartProvider'
import FavoriteProvider from './FavoriteProvider'

function Providers({ children }) {
  return(
    <FavoriteProvider>
      <CartProvider>
        { children }
      </CartProvider>
    </FavoriteProvider>
  )
} 
export default Providers;