import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  // Get cart from localStorage or initialize empty array
  // Had some weird issues with this before so added the try/catch
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart')
      return savedCart ? JSON.parse(savedCart) : []
    } catch (error) {
      console.error('Error loading cart from localStorage:', error)
      return []
    }
  })
  
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  // Update localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart))
      
      // Calculate totals
      const items = cart.reduce((total, item) => total + item.quantity, 0)
      const price = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
      
      setTotalItems(items)
      setTotalPrice(price)
    } catch (error) {
      console.error('Error saving cart to localStorage:', error)
    }
  }, [cart])

  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      // Check if product already in cart
      const existingItem = prevCart.find(item => item.id === product.id)
      
      if (existingItem) {
        // Update quantity if already in cart
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        // Add new item to cart
        return [...prevCart, { ...product, quantity }]
      }
    })
  }

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  // Update item quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  // Clear cart
  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      totalItems,
      totalPrice,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
