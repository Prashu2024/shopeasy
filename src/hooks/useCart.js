import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

// custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext)
  
  if (!context) {
    // forgot this check in the first version and it caused weird bugs
    throw new Error('useCart must be used within a CartProvider')
  }
  
  return context
}
