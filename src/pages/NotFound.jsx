import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>Page Not Found</ErrorTitle>
        <ErrorMessage>
          The page you are looking for doesn't exist or has been moved.
        </ErrorMessage>
        <HomeButton to="/">Back to Home</HomeButton>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

// Styled components
const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 2rem;
`;

const NotFoundContent = styled.div`
  text-align: center;
  max-width: 500px;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  color: #ff4500;
  margin: 0;
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #ff4500;
  color: white;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #e53935;
  }
`;

export default NotFound;
