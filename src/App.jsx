import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

// Pages
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Context
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'

function App() {
  // this is for the loading state when the app first loads
  // probably a better way to do this but it works for now
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen>Loading...</LoadingScreen>
  }

  return (
    <AuthProvider>
      <CartProvider>
        <AppContainer>
          <Navbar />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </CartProvider>
    </AuthProvider>
  )
}

// Styled components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; // for fixed navbar
`

const LoadingScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  font-weight: 500;
`

export default App
