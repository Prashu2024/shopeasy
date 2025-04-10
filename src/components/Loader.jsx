import React from 'react';
import styled from 'styled-components';

// Simple loader component
const Loader = () => {
  return (
    <LoaderContainer>
      <Spinner />
      <LoadingText>Loading...</LoadingText>
    </LoaderContainer>
  );
};

// Styled components
const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 100%;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 69, 0, 0.1);
  border-radius: 50%;
  border-top-color: #ff4500;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 1rem;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

export default Loader;
