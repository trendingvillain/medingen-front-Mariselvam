import React from 'react';
import './RatingsAndReviews.css';

const RatingsAndReviews = ({ reviews }) => {
  return (
    <div className="ratings-and-reviews">
      <h2>Ratings & Review</h2>
      {reviews.map((review, index) => (
        <div key={index} className="review-item">
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`star ${i < review.rating ? 'active' : ''}`}
              >&#9733;</i>
            ))}
          </div>
          <span className="rating-number">{review.rating}</span>
          <p className="review-text">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default RatingsAndReviews;