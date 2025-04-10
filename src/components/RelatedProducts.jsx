import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RelatedProducts = ({ products, currentProductId }) => {
  // Filter out current product and limit to 4 related products
  const filteredProducts = products
    .filter(product => product.id !== parseInt(currentProductId))
    .slice(0, 4);
  
  // sometimes we don't have enough related products
  if (filteredProducts.length === 0) {
    return null;
  }
  
  return (
    <RelatedContainer>
      <RelatedTitle>You might also like</RelatedTitle>
      <ProductGrid>
        {filteredProducts.map(product => (
          <ProductItem key={product.id}>
            <Link to={`/product/${product.id}`}>
              <ProductImage 
                src={product.images[0]} 
                alt={product.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150x150?text=No+Image';
                }}
              />
              <ProductName>{product.title}</ProductName>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
            </Link>
          </ProductItem>
        ))}
      </ProductGrid>
    </RelatedContainer>
  );
};

// Styled components
const RelatedContainer = styled.section`
  margin-top: 3rem;
`;

const RelatedTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProductItem = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ProductName = styled.h3`
  font-size: 0.9rem;
  padding: 0.75rem;
  padding-bottom: 0.25rem;
  
  // Limit to 2 lines with ellipsis
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductPrice = styled.p`
  font-weight: 600;
  color: #ff4500;
  padding: 0 0.75rem 0.75rem;
`;

export default RelatedProducts;
