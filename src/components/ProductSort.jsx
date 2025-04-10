import React from 'react';
import styled from 'styled-components';

const ProductSort = ({ sortOption, onSortChange }) => {
  // Handle sort change
  const handleChange = (e) => {
    onSortChange(e.target.value);
  };
  
  return (
    <SortContainer>
      <SortLabel>Sort by:</SortLabel>
      <SortSelect value={sortOption} onChange={handleChange}>
        <option value="default">Featured</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </SortSelect>
    </SortContainer>
  );
};

// Styled components
const SortContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SortLabel = styled.label`
  margin-right: 0.75rem;
  font-size: 0.9rem;
  color: #555;
`;

const SortSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #ff4500;
  }
`;

export default ProductSort;
