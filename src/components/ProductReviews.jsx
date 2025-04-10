import React from 'react';
import styled from 'styled-components';

const ProductReviews = () => {
  // This would normally fetch from an API
  // but for demo purposes, using static data
  const reviews = [
    {
      id: 1,
      user: 'John D.',
      rating: 5,
      date: '2025-03-15',
      comment: 'Great product! Exactly what I was looking for and arrived quickly.'
    },
    {
      id: 2,
      user: 'Sarah M.',
      rating: 4,
      date: '2025-03-10',
      comment: 'Good quality for the price. Would buy again but shipping was a bit slow.'
    },
    {
      id: 3,
      user: 'Mike T.',
      rating: 3,
      date: '2025-02-28',
      comment: 'Product is okay. Nothing special but does the job. Packaging could be better.'
    }
  ];
  
  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  
  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    
    // full stars
    for (let i = 1; i <= Math.floor(rating); i++) {
      stars.push(<Star key={i} filled>★</Star>);
    }
    
    // half star - not using for simplicity
    // if (rating % 1 >= 0.5) {
    //   stars.push(<Star key="half" half>★</Star>);
    // }
    
    // empty stars
    for (let i = Math.ceil(rating); i <= 5; i++) {
      stars.push(<Star key={`empty-${i}`}>★</Star>);
    }
    
    return stars;
  };
  
  return (
    <ReviewsContainer>
      <ReviewsHeader>
        <ReviewsTitle>Customer Reviews</ReviewsTitle>
        <RatingContainer>
          <AverageRating>{averageRating.toFixed(1)}</AverageRating>
          <StarsContainer>{renderStars(averageRating)}</StarsContainer>
          <ReviewCount>Based on {reviews.length} reviews</ReviewCount>
        </RatingContainer>
      </ReviewsHeader>
      
      <ReviewsList>
        {reviews.map(review => (
          <ReviewItem key={review.id}>
            <ReviewHeader>
              <ReviewUser>{review.user}</ReviewUser>
              <ReviewDate>{new Date(review.date).toLocaleDateString()}</ReviewDate>
            </ReviewHeader>
            <StarsContainer>{renderStars(review.rating)}</StarsContainer>
            <ReviewComment>{review.comment}</ReviewComment>
          </ReviewItem>
        ))}
      </ReviewsList>
      
      {/* Would add a form here in a real app */}
      <WriteReviewButton>Write a Review</WriteReviewButton>
    </ReviewsContainer>
  );
};

// Styled components
const ReviewsContainer = styled.section`
  margin-top: 3rem;
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ReviewsHeader = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
`;

const ReviewsTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const AverageRating = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;

const StarsContainer = styled.div`
  display: flex;
`;

const Star = styled.span`
  color: ${props => props.filled ? '#ffc107' : '#e0e0e0'};
  font-size: 1.2rem;
`;

const ReviewCount = styled.span`
  color: #777;
  font-size: 0.9rem;
`;

const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ReviewItem = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ReviewUser = styled.span`
  font-weight: 600;
`;

const ReviewDate = styled.span`
  color: #777;
  font-size: 0.9rem;
`;

const ReviewComment = styled.p`
  margin-top: 0.5rem;
  line-height: 1.5;
`;

const WriteReviewButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #e53935;
  }
`;

export default ProductReviews;
