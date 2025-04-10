import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  // quick and dirty way to get current year
  const currentYear = new Date().getFullYear()
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>ShopEasy</FooterTitle>
          <FooterText>Your one-stop shop for all your needs.</FooterText>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/cart">Cart</FooterLink>
          <FooterLink href="/login">Account</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterText>support@shopeasy.example.com</FooterText>
          <FooterText>+1 (555) 123-4567</FooterText>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <FooterText>© {currentYear} ShopEasy. All rights reserved.</FooterText>
        {/* TODO: Add social media icons */}
      </FooterBottom>
    </FooterContainer>
  )
}

// Styled components
const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 3rem 0 1rem;
  margin-top: 3rem;
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
`

const FooterText = styled.p`
  color: #ccc;
  font-size: 0.9rem;
  margin: 0.25rem 0;
`

const FooterLink = styled.a`
  color: #ccc;
  font-size: 0.9rem;
  text-decoration: none;
  margin: 0.25rem 0;
  transition: color 0.2s;
  
  &:hover {
    color: #ff4500;
  }
`

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 1.5rem 2rem 0;
  border-top: 1px solid #444;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem 0;
  }
`

export default Footer
