import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, signup, error: authError } = useAuth();
  const navigate = useNavigate();
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validate form
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      setLoading(true);
      
      if (isLogin) {
        // Login
        await login(email, password);
        navigate('/');
      } else {
        // Sign up
        await signup(email, password);
        navigate('/');
      }
    } catch (err) {
      // Provide more specific feedback
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Invalid email or password. Please try again.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('This email address is already registered. Please login or use a different email.');
      } else {
        // Use the error from AuthContext or a generic message
        setError(authError || 'An unexpected error occurred. Please try again.');
      }
      console.error('Auth error:', err); // Log the original error for debugging
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <FormTitle>{isLogin ? 'Login' : 'Create Account'}</FormTitle>
        
        {(error || authError) && (
          <ErrorMessage>{error || authError}</ErrorMessage>
        )}
        
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        
        {!isLogin && (
          <FormGroup>
            <FormLabel>Confirm Password</FormLabel>
            <FormInput
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </FormGroup>
        )}
        
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Processing...' : isLogin ? 'Login' : 'Create Account'}
        </SubmitButton>
        
        <FormSwitch>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <SwitchButton 
            type="button" 
            onClick={() => setIsLogin(!isLogin)}
            disabled={loading}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </SwitchButton>
        </FormSwitch>
        
        <GuestCheckout>
          <Link to="/checkout">Continue as Guest</Link>
        </GuestCheckout>
      </LoginForm>
    </LoginContainer>
  );
};

// Styled components
const LoginContainer = styled.div`
  max-width: 500px;
  margin: 3rem auto;
  padding: 0 1rem;
`;

const LoginForm = styled.form`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const FormTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ErrorMessage = styled.div`
  background-color: #ffebee;
  color: #e53935;
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #ff4500;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 1rem;
  
  &:hover {
    background-color: #e53935;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const FormSwitch = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const SwitchButton = styled.button`
  background: none;
  border: none;
  color: #ff4500;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const GuestCheckout = styled.div`
  text-align: center;
  
  a {
    color: #555;
    text-decoration: none;
    font-size: 0.9rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Login;
