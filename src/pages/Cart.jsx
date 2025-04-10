import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { cart, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  
  // Handle quantity change
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return; // Don't allow less than 1
    updateQuantity(productId, newQuantity);
  };
  
  // Handle remove item
  const handleRemoveItem = (productId) => {
    // could add a confirmation here but keeping it simple
    removeFromCart(productId);
  };
  
  // Handle image error
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/80x80?text=No+Image';
  };
  
  // Empty cart view
  if (cart.length === 0) {
    return (
      <CartContainer>
        <CartHeader>
          <h1>Your Cart</h1>
        </CartHeader>
        
        <EmptyCart>
          <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
          <EmptyCartSubtext>Looks like you haven't added anything to your cart yet.</EmptyCartSubtext>
          <ContinueShoppingButton to="/">Continue Shopping</ContinueShoppingButton>
        </EmptyCart>
      </CartContainer>
    );
  }
  
  return (
    <CartContainer>
      <CartHeader>
        <h1>Your Cart</h1>
        <CartSummary>{totalItems} {totalItems === 1 ? 'item' : 'items'}</CartSummary>
      </CartHeader>
      
      <CartContent>
        <CartItemsContainer>
          <CartItemsHeader>
            <ProductHeader>Product</ProductHeader>
            <PriceHeader>Price</PriceHeader>
            <QuantityHeader>Quantity</QuantityHeader>
            <TotalHeader>Total</TotalHeader>
            <ActionHeader></ActionHeader>
          </CartItemsHeader>
          
          {cart.map(item => (
            <CartItem key={item.id}>
              <ProductInfo>
                <ProductImage 
                  src={item.images[0]} 
                  alt={item.title}
                  onError={handleImageError}
                />
                <ProductDetails>
                  <ProductName>{item.title}</ProductName>
                  <ProductCategory>{item.category?.name || 'Uncategorized'}</ProductCategory>
                </ProductDetails>
              </ProductInfo>
              
              <ProductPrice>${item.price.toFixed(2)}</ProductPrice>
              
              <QuantityControl>
                <QuantityButton 
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </QuantityButton>
                <QuantityValue>{item.quantity}</QuantityValue>
                <QuantityButton 
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </QuantityButton>
              </QuantityControl>
              
              <ProductTotal>${(item.price * item.quantity).toFixed(2)}</ProductTotal>
              
              <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                ✕
              </RemoveButton>
            </CartItem>
          ))}
          
          <CartActions>
            <ClearCartButton onClick={clearCart}>Clear Cart</ClearCartButton>
            <ContinueShoppingLink to="/">Continue Shopping</ContinueShoppingLink>
          </CartActions>
        </CartItemsContainer>
        
        <CartSummaryContainer>
          <SummaryTitle>Order Summary</SummaryTitle>
          
          <SummaryRow>
            <SummaryLabel>Subtotal</SummaryLabel>
            <SummaryValue>${totalPrice.toFixed(2)}</SummaryValue>
          </SummaryRow>
          
          <SummaryRow>
            <SummaryLabel>Shipping</SummaryLabel>
            <SummaryValue>Free</SummaryValue>
          </SummaryRow>
          
          <SummaryRow>
            <SummaryLabel>Tax</SummaryLabel>
            <SummaryValue>${(totalPrice * 0.1).toFixed(2)}</SummaryValue>
          </SummaryRow>
          
          <TotalRow>
            <TotalLabel>Total</TotalLabel>
            <TotalValue>${(totalPrice + (totalPrice * 0.1)).toFixed(2)}</TotalValue>
          </TotalRow>
          
          <CheckoutButton to="/checkout">Proceed to Checkout</CheckoutButton>
        </CartSummaryContainer>
      </CartContent>
    </CartContainer>
  );
};

// Styled components
const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  h1 {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

const CartSummary = styled.p`
  color: #777;
`;

const CartContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CartItemsContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CartItemsHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 0.5fr;
  padding: 1rem;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ProductHeader = styled.div`
  font-weight: 600;
`;

const PriceHeader = styled.div`
  font-weight: 600;
  text-align: center;
`;

const QuantityHeader = styled.div`
  font-weight: 600;
  text-align: center;
`;

const TotalHeader = styled.div`
  font-weight: 600;
  text-align: center;
`;

const ActionHeader = styled.div``;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 0.5fr;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 1rem;
`;

const ProductDetails = styled.div``;

const ProductName = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

const ProductCategory = styled.p`
  color: #777;
  font-size: 0.8rem;
`;

const ProductPrice = styled.div`
  text-align: center;
  
  @media (max-width: 768px) {
    text-align: left;
    &:before {
      content: 'Price: ';
      font-weight: 600;
    }
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    &:before {
      content: 'Quantity: ';
      font-weight: 600;
      margin-right: 0.5rem;
    }
  }
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${props => props.disabled ? '#f0f0f0' : 'white'};
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  &:hover {
    background-color: ${props => props.disabled ? '#f0f0f0' : '#f9f9f9'};
  }
`;

const QuantityValue = styled.span`
  margin: 0 0.5rem;
  min-width: 20px;
  text-align: center;
`;

const ProductTotal = styled.div`
  font-weight: 600;
  color: #ff4500;
  text-align: center;
  
  @media (max-width: 768px) {
    text-align: left;
    &:before {
      content: 'Total: ';
      font-weight: 600;
    }
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #999;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  
  &:hover {
    color: #ff4500;
  }
  
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const CartActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ClearCartButton = styled.button`
  background: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: #f9f9f9;
  }
`;

const ContinueShoppingLink = styled(Link)`
  color: #ff4500;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const CartSummaryContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  height: fit-content;
`;

const SummaryTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const SummaryLabel = styled.span`
  color: #555;
`;

const SummaryValue = styled.span`
  font-weight: 500;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

const TotalLabel = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
`;

const TotalValue = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  color: #ff4500;
`;

const CheckoutButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: #ff4500;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #e53935;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const EmptyCartMessage = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const EmptyCartSubtext = styled.p`
  color: #777;
  margin-bottom: 2rem;
`;

const ContinueShoppingButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #ff4500;
  color: white;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #e53935;
  }
`;

export default Cart;
