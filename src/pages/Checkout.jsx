import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';

const Checkout = () => {
  const { cart, totalItems, totalPrice, clearCart } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: currentUser?.email || '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    paymentMethod: 'credit',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: ''
  });
  
  // Form errors
  const [errors, setErrors] = useState({});
  
  // Order status
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    const requiredFields = [
      'firstName', 'lastName', 'email', 'address', 
      'city', 'state', 'zipCode', 'country'
    ];
    
    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = 'This field is required';
      }
    });
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Payment validation
    if (formData.paymentMethod === 'credit') {
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = 'Card number is required';
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = 'Please enter a valid 16-digit card number';
      }
      
      if (!formData.cardName.trim()) {
        newErrors.cardName = 'Name on card is required';
      }
      
      if (!formData.cardExpiry.trim()) {
        newErrors.cardExpiry = 'Expiry date is required';
      } else if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) {
        newErrors.cardExpiry = 'Please use MM/YY format';
      }
      
      if (!formData.cardCvv.trim()) {
        newErrors.cardCvv = 'CVV is required';
      } else if (!/^\d{3,4}$/.test(formData.cardCvv)) {
        newErrors.cardCvv = 'Please enter a valid CVV';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would send the order to a backend
      // For demo purposes, just simulate a successful order
      
      // Generate a random order ID
      const randomOrderId = Math.floor(100000000 + Math.random() * 900000000).toString();
      setOrderId(randomOrderId);
      setOrderPlaced(true);
      
      // Clear the cart
      clearCart();
      
      // In a real app, would redirect to order confirmation page
      // setTimeout(() => {
      //   navigate(`/order/${randomOrderId}`);
      // }, 2000);
    }
  };
  
  // Redirect to cart if empty
  if (cart.length === 0 && !orderPlaced) {
    return (
      <CheckoutContainer>
        <EmptyCheckout>
          <h2>Your cart is empty</h2>
          <p>You need to add items to your cart before checking out.</p>
          <BackButton onClick={() => navigate('/')}>Continue Shopping</BackButton>
        </EmptyCheckout>
      </CheckoutContainer>
    );
  }
  
  // Show order confirmation
  if (orderPlaced) {
    return (
      <CheckoutContainer>
        <OrderConfirmation>
          <SuccessIcon>✓</SuccessIcon>
          <h2>Order Placed Successfully!</h2>
          <p>Your order #{orderId} has been placed.</p>
          <p>We've sent a confirmation email to {formData.email}.</p>
          <BackButton onClick={() => navigate('/')}>Continue Shopping</BackButton>
        </OrderConfirmation>
      </CheckoutContainer>
    );
  }
  
  // Calculate totals
  const subtotal = totalPrice;
  const tax = subtotal * 0.1; // 10% tax
  const shipping = 0; // Free shipping
  const total = subtotal + tax + shipping;
  
  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>
      
      <CheckoutContent>
        <CheckoutForm onSubmit={handleSubmit}>
          <FormSection>
            <SectionTitle>Contact Information</SectionTitle>
            <FormRow>
              <FormGroup>
                <FormLabel>First Name</FormLabel>
                <FormInput
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  error={errors.firstName}
                />
                {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <FormLabel>Last Name</FormLabel>
                <FormInput
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  error={errors.lastName}
                />
                {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
              </FormGroup>
            </FormRow>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>
          </FormSection>
          
          <FormSection>
            <SectionTitle>Shipping Address</SectionTitle>
            <FormGroup>
              <FormLabel>Street Address</FormLabel>
              <FormInput
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                error={errors.address}
              />
              {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
            </FormGroup>
            <FormRow>
              <FormGroup>
                <FormLabel>City</FormLabel>
                <FormInput
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  error={errors.city}
                />
                {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <FormLabel>State</FormLabel>
                <FormInput
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  error={errors.state}
                />
                {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <FormLabel>ZIP Code</FormLabel>
                <FormInput
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  error={errors.zipCode}
                />
                {errors.zipCode && <ErrorMessage>{errors.zipCode}</ErrorMessage>}
              </FormGroup>
              <FormGroup>
                <FormLabel>Country</FormLabel>
                <FormSelect
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  error={errors.country}
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                  {/* More countries would be added in a real app */}
                </FormSelect>
                {errors.country && <ErrorMessage>{errors.country}</ErrorMessage>}
              </FormGroup>
            </FormRow>
          </FormSection>
          
          <FormSection>
            <SectionTitle>Payment Method</SectionTitle>
            <PaymentOptions>
              <PaymentOption>
                <input
                  type="radio"
                  id="credit"
                  name="paymentMethod"
                  value="credit"
                  checked={formData.paymentMethod === 'credit'}
                  onChange={handleInputChange}
                />
                <label htmlFor="credit">Credit Card</label>
              </PaymentOption>
              <PaymentOption>
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={handleInputChange}
                />
                <label htmlFor="paypal">PayPal</label>
              </PaymentOption>
            </PaymentOptions>
            
            {formData.paymentMethod === 'credit' && (
              <CreditCardForm>
                <FormGroup>
                  <FormLabel>Card Number</FormLabel>
                  <FormInput
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    error={errors.cardNumber}
                  />
                  {errors.cardNumber && <ErrorMessage>{errors.cardNumber}</ErrorMessage>}
                </FormGroup>
                <FormGroup>
                  <FormLabel>Name on Card</FormLabel>
                  <FormInput
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    error={errors.cardName}
                  />
                  {errors.cardName && <ErrorMessage>{errors.cardName}</ErrorMessage>}
                </FormGroup>
                <FormRow>
                  <FormGroup>
                    <FormLabel>Expiry Date</FormLabel>
                    <FormInput
                      type="text"
                      name="cardExpiry"
                      value={formData.cardExpiry}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      error={errors.cardExpiry}
                    />
                    {errors.cardExpiry && <ErrorMessage>{errors.cardExpiry}</ErrorMessage>}
                  </FormGroup>
                  <FormGroup>
                    <FormLabel>CVV</FormLabel>
                    <FormInput
                      type="text"
                      name="cardCvv"
                      value={formData.cardCvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      error={errors.cardCvv}
                    />
                    {errors.cardCvv && <ErrorMessage>{errors.cardCvv}</ErrorMessage>}
                  </FormGroup>
                </FormRow>
              </CreditCardForm>
            )}
            
            {formData.paymentMethod === 'paypal' && (
              <PaypalInfo>
                <p>You will be redirected to PayPal to complete your payment.</p>
              </PaypalInfo>
            )}
          </FormSection>
          
          <PlaceOrderButton type="submit">Place Order</PlaceOrderButton>
        </CheckoutForm>
        
        <OrderSummary>
          <SummaryTitle>Order Summary</SummaryTitle>
          <SummaryItems>
            {cart.map(item => (
              <SummaryItem key={item.id}>
                <ItemInfo>
                  <ItemQuantity>{item.quantity}x</ItemQuantity>
                  <ItemName>{item.title}</ItemName>
                </ItemInfo>
                <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
              </SummaryItem>
            ))}
          </SummaryItems>
          
          <SummaryTotals>
            <SummaryRow>
              <SummaryLabel>Subtotal</SummaryLabel>
              <SummaryValue>${subtotal.toFixed(2)}</SummaryValue>
            </SummaryRow>
            <SummaryRow>
              <SummaryLabel>Shipping</SummaryLabel>
              <SummaryValue>Free</SummaryValue>
            </SummaryRow>
            <SummaryRow>
              <SummaryLabel>Tax (10%)</SummaryLabel>
              <SummaryValue>${tax.toFixed(2)}</SummaryValue>
            </SummaryRow>
            <TotalRow>
              <TotalLabel>Total</TotalLabel>
              <TotalValue>${total.toFixed(2)}</TotalValue>
            </TotalRow>
          </SummaryTotals>
        </OrderSummary>
      </CheckoutContent>
    </CheckoutContainer>
  );
};

// Styled components
const CheckoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const CheckoutTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const CheckoutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormSection = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.error ? '#e53935' : '#ddd'};
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? '#e53935' : '#ff4500'};
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.error ? '#e53935' : '#ddd'};
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? '#e53935' : '#ff4500'};
  }
`;

const ErrorMessage = styled.p`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const PaymentOptions = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  input {
    cursor: pointer;
  }
  
  label {
    cursor: pointer;
  }
`;

const CreditCardForm = styled.div``;

const PaypalInfo = styled.div`
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 4px;
  
  p {
    color: #555;
  }
`;

const PlaceOrderButton = styled.button`
  padding: 1rem;
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #e53935;
  }
`;

const OrderSummary = styled.div`
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

const SummaryItems = styled.div`
  margin-bottom: 1.5rem;
  max-height: 300px;
  overflow-y: auto;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

const ItemInfo = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ItemQuantity = styled.span`
  color: #777;
`;

const ItemName = styled.span`
  // Limit to 1 line with ellipsis
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`;

const ItemPrice = styled.span`
  font-weight: 500;
`;

const SummaryTotals = styled.div`
  border-top: 1px solid #eee;
  padding-top: 1rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
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
  margin-top: 1rem;
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

const EmptyCheckout = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin-bottom: 1rem;
  }
  
  p {
    color: #777;
    margin-bottom: 2rem;
  }
`;

const OrderConfirmation = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin-bottom: 1rem;
  }
  
  p {
    color: #555;
    margin-bottom: 0.5rem;
  }
`;

const SuccessIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4caf50;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 1.5rem;
`;

const BackButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: #e53935;
  }
`;

export default Checkout;
