import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getProducts, getCategories, getProductsByCategory } from '../api/products';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import Loader from '../components/Loader';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch products and categories on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch categories first
        const categoriesData = await getCategories();
        setCategories(categoriesData);
        
        // Then fetch products
        const productsData = await getProducts(20);
        setProducts(productsData);
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  // Handle category selection
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    // This will trigger the useEffect below
  };
  
  // Fetch products by category when selectedCategory changes
  useEffect(() => {
    if (selectedCategory === null) return;
    
    const fetchProductsByCategory = async () => {
      try {
        setLoading(true);
        
        // If "All" category is selected (usually id 0 or null)
        if (selectedCategory === 0) {
          const productsData = await getProducts(20);
          setProducts(productsData);
        } else {
          // Fetch products by category
          const productsData = await getProductsByCategory(selectedCategory);
          setProducts(productsData);
        }
        
        setLoading(false);
      } catch (err) {
        console.error(`Error fetching products for category ${selectedCategory}:`, err);
        setError('Failed to load products for this category. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchProductsByCategory();
  }, [selectedCategory]);
  
  // Show loading state
  if (loading && products.length === 0) {
    return <Loader />;
  }
  
  // Show error state
  if (error) {
    return (
      <ErrorContainer>
        <h2>Oops!</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </ErrorContainer>
    );
  }
  
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <h1>Welcome to ShopEasy</h1>
          <p>Find the best products at the best prices</p>
        </HeroContent>
      </HeroSection>
      
      <MainContent>
        <FilterSection>
          <CategoryFilter 
            categories={categories} 
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </FilterSection>
        
        <ProductsSection>
          <h2>Our Products</h2>
          {loading ? (
            <Loader />
          ) : products.length > 0 ? (
            <ProductGrid>
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ProductGrid>
          ) : (
            <NoProducts>No products found in this category.</NoProducts>
          )}
        </ProductsSection>
      </MainContent>
    </HomeContainer>
  );
};

// Styled components
const HomeContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 2rem;
`;

const HeroContent = styled.div`
  text-align: center;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
  }
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FilterSection = styled.aside`
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ProductsSection = styled.section`
  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const NoProducts = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f8f8f8;
  border-radius: 8px;
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

export default Home;
