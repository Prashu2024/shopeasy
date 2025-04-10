import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Navbar = () => {
  const { currentUser, logout } = useAuth()
  
  // this is a bit hacky but works for now
  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      await logout()
      // no need for navigation, AuthContext will handle it
    } catch (error) {
      console.log('logout failed:', error)
    }
  }

  return (
    <NavContainer>
      <NavWrapper>
        <LogoContainer>
          <Link to="/">
            <Logo>ShopEasy</Logo>
          </Link>
        </LogoContainer>
        
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          {currentUser ? (
            <NavButton onClick={handleLogout}>Logout</NavButton>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </NavLinks>
      </NavWrapper>
    </NavContainer>
  )
}

// Styled components
const NavContainer = styled.nav`
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const LogoContainer = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`

const Logo = styled.span`
  color: #ff4500;
`

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`

const NavLink = styled(Link)`
  color: #333;
  font-weight: 500;
  transition: color 0.2s;
  
  &:hover {
    color: #ff4500;
  }
`

const NavButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s;
  
  &:hover {
    color: #ff4500;
  }
`

export default Navbar
