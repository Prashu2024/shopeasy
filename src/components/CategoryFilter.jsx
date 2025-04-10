import React from 'react';
import styled from 'styled-components';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  // Add an "All" category option
  const allCategories = [
    { id: 0, name: 'All Categories' },
    ...(categories || [])
  ];
  
  return (
    <FilterContainer>
      <FilterTitle>Categories</FilterTitle>
      <CategoryList>
        {allCategories.map(category => (
          <CategoryItem 
            key={category.id}
            $isSelected={selectedCategory === category.id}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </CategoryItem>
        ))}
      </CategoryList>
    </FilterContainer>
  );
};

// Styled components
const FilterContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const FilterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CategoryItem = styled.li`
  padding: 0.75rem 0;
  cursor: pointer;
  transition: color 0.2s;
  border-bottom: 1px solid #eee;
  font-weight: ${props => props.$isSelected ? '600' : '400'};
  color: ${props => props.$isSelected ? '#ff4500' : '#333'};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    color: #ff4500;
  }
`;

export default CategoryFilter;
