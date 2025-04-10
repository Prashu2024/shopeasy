import axios from 'axios';

// Base URL for the Platzi Fake API
const API_URL = 'https://api.escuelajs.co/api/v1';

// Centralized API client to handle requests
// Might need to add auth token handling later
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Get all products with optional limit
export const getProducts = async (limit = 20, offset = 0) => {
  try {
    const response = await apiClient.get(`/products?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Get a single product by ID
export const getProductById = async (id) => {
  try {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};

// Get all categories
export const getCategories = async () => {
  try {
    const response = await apiClient.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Get products by category
export const getProductsByCategory = async (categoryId, limit = 20) => {
  try {
    const response = await apiClient.get(`/categories/${categoryId}/products?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for category ${categoryId}:`, error);
    throw error;
  }
};

// Search products - this is a bit hacky since the API doesn't have a real search endpoint
// so we're just filtering client-side after fetching all products
export const searchProducts = async (query, limit = 100) => {
  try {
    const response = await apiClient.get(`/products?limit=${limit}`);
    const products = response.data;
    
    // Filter products that match the search query in title or description
    // Not super efficient but works for demo purposes
    return products.filter(product => 
      product.title.toLowerCase().includes(query.toLowerCase()) || 
      product.description.toLowerCase().includes(query.toLowerCase())
    );
  } catch (error) {
    console.error(`Error searching products with query "${query}":`, error);
    throw error;
  }
};
