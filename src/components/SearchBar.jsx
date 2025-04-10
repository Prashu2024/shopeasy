import React, { useState } from 'react';
import styled from 'styled-components';
import { searchProducts } from '../api/products';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  
  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    // Only search if query has at least 3 characters
    if (value.length >= 3) {
      handleSearch(value);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };
  
  // Debounce search to avoid too many API calls
  // not using a library for this simple case
  let searchTimeout = null;
  const handleSearch = (searchQuery) => {
    // Clear previous timeout
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    
    // Set new timeout
    searchTimeout = setTimeout(async () => {
      try {
        setIsSearching(true);
        const results = await searchProducts(searchQuery, 5); // Limit to 5 results
        setSearchResults(results);
        setShowResults(true);
        setIsSearching(false);
      } catch (error) {
        console.error('Search error:', error);
        setIsSearching(false);
      }
    }, 500); // 500ms debounce
  };
  
  // Handle result click
  const handleResultClick = (productId) => {
    setShowResults(false);
    navigate(`/product/${productId}`);
  };
  
  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Navigate to search results page (would implement this in a real app)
      // For now, just hide results
      setShowResults(false);
    }
  };
  
  // Handle click outside to close results
  const handleClickOutside = () => {
    setShowResults(false);
  };
  
  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={handleInputChange}
          onBlur={() => setTimeout(() => handleClickOutside(), 200)}
        />
        <SearchButton type="submit">
          <SearchIcon>🔍</SearchIcon>
        </SearchButton>
      </SearchForm>
      
      {showResults && searchResults.length > 0 && (
        <ResultsDropdown>
          {searchResults.map(product => (
            <ResultItem 
              key={product.id}
              onClick={() => handleResultClick(product.id)}
            >
              <ResultImage 
                src={product.images[0]} 
                alt={product.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/50x50?text=No+Image';
                }}
              />
              <ResultInfo>
                <ResultTitle>{product.title}</ResultTitle>
                <ResultPrice>${product.price.toFixed(2)}</ResultPrice>
              </ResultInfo>
            </ResultItem>
          ))}
        </ResultsDropdown>
      )}
      
      {isSearching && (
        <SearchingIndicator>Searching...</SearchingIndicator>
      )}
    </SearchContainer>
  );
};

// Styled components
const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
`;

const SearchForm = styled.form`
  display: flex;
  width: 100%;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: #ff4500;
  }
`;

const SearchButton = styled.button`
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  padding: 0 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: #e53935;
  }
`;

const SearchIcon = styled.span`
  font-size: 1rem;
`;

const ResultsDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  max-height: 300px;
  overflow-y: auto;
`;

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f9f9f9;
  }
`;

const ResultImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 1rem;
`;

const ResultInfo = styled.div`
  flex: 1;
`;

const ResultTitle = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  
  // Limit to 1 line with ellipsis
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ResultPrice = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  color: #ff4500;
`;

const SearchingIndicator = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 0.75rem 1rem;
  background-color: white;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 0.9rem;
  color: #666;
`;

export default SearchBar;
