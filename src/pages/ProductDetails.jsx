import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getProductById } from '../api/products';
import { useCart } from '../hooks/useCart';
import Loader from '../components/Loader';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.error(`Error fetching product ${id}:`, err);
        setError('Failed to load product details. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [id]);
  
  // Handle quantity change
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  // Handle add to cart
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      // could add a toast notification here
    }
  };
  
  // Handle buy now
  const handleBuyNow = () => {
    if (product) {
      addToCart(product, quantity);
      navigate('/cart');
    }
  };
  
  // Handle image error
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/500x500?text=No+Image';
  };
  
  if (loading) {
    return <Loader />;
  }
  
  if (error) {
    return (
      <ErrorContainer>
        <h2>Oops!</h2>
        <p>{error}</p>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </ErrorContainer>
    );
  }
  
  if (!product) {
    return (
      <ErrorContainer>
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist or has been removed.</p>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </ErrorContainer>
    );
  }
  
  return (
    <ProductContainer>
      <ProductGrid>
        <ImageSection>
          <MainImage 
            src={product.images[activeImage] || product.images[0]} 
            alt={product.title}
            onError={handleImageError}
          />
          
          <ThumbnailContainer>
            {product.images.map((image, index) => (
              <Thumbnail 
                key={index}
                src={image}
                alt={`${product.title} - thumbnail ${index + 1}`}
                isActive={index === activeImage}
                onClick={() => setActiveImage(index)}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/100x100?text=No+Image';
                }}
              />
            ))}
          </ThumbnailContainer>
        </ImageSection>
        
        <InfoSection>
          <CategoryName>{product.category?.name || 'Uncategorized'}</CategoryName>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
          
          <ProductDescription>{product.description}</ProductDescription>
          
          <QuantityContainer>
            <QuantityLabel>Quantity:</QuantityLabel>
            <QuantityInput 
              type="number" 
              min="1" 
              value={quantity} 
              onChange={handleQuantityChange} 
            />
          </QuantityContainer>
          
          <ButtonContainer>
            <AddToCartButton onClick={handleAddToCart}>
              Add to Cart
            </AddToCartButton>
            <BuyNowButton onClick={handleBuyNow}>
              Buy Now
            </BuyNowButton>
          </ButtonContainer>
        </InfoSection>
      </ProductGrid>
    </ProductContainer>
  );
};

// Styled components
const ProductContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: contain;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  
  /* Hide scrollbar but allow scrolling */
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${props => props.isActive ? 1 : 0.6};
  border: ${props => props.isActive ? '2px solid #ff4500' : '2px solid transparent'};
  transition: opacity 0.2s, border 0.2s;
  
  &:hover {
    opacity: 1;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryName = styled.p`
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ProductTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ff4500;
  margin-bottom: 1.5rem;
`;

const ProductDescription = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const QuantityLabel = styled.label`
  margin-right: 1rem;
`;

const QuantityInput = styled.input`
  width: 60px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const AddToCartButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: white;
  color: #ff4500;
  border: 2px solid #ff4500;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  
  &:hover {
    background-color: #ff4500;
    color: white;
  }
`;

const BuyNowButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #e53935;
  }
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 3rem;
  max-width: 600px;
  margin: 0 auto;
  
  h2 {
    color: #e53935;
    margin-bottom: 1rem;
  }
  
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #ff4500;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      background-color: #e53935;
    }
  }
`;

export default ProductDetails;
