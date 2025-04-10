import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

// Product card component for displaying product in grid
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  // sometimes the API images are broken, this handles that
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
  };
  
  // Add to cart handler
  const handleAddToCart = (e) => {
    e.preventDefault(); // Don't navigate to product page
    e.stopPropagation(); // Don't trigger parent click
    addToCart(product);
    
    // could add a toast notification here
    // but keeping it simple for now
  };
  
  return (
    <CardContainer>
      <Link to={`/product/${product.id}`}>
        <ImageContainer>
          <ProductImage 
            src={product.images[0]} 
            alt={product.title}
            onError={handleImageError}
          />
          <QuickAddButton onClick={handleAddToCart}>
            Add to Cart
          </QuickAddButton>
        </ImageContainer>
        
        <ProductInfo>
          <ProductCategory>{product.category?.name || 'Uncategorized'}</ProductCategory>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        </ProductInfo>
      </Link>
    </CardContainer>
  );
};

// Styled components
const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  
  &:hover button {
    opacity: 1;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
  
  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const QuickAddButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: 500;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
  
  &:hover {
    background-color: #e53935;
  }
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductCategory = styled.p`
  color: #777;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  
  // Limit to 2 lines with ellipsis
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductPrice = styled.p`
  font-weight: 600;
  color: #ff4500;
  font-size: 1.1rem;
`;

export default ProductCard;
