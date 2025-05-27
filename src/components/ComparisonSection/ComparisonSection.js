import React from 'react';
import './ComparisonSection.css';

const ComparisonSection = ({ comparisons }) => {
  if (!comparisons || comparisons.length === 0) {
    return <p>No medicines available for comparison.</p>;
  }

  return (
    <div className="comparison-section">
      <h2>Compare Medicines</h2>
      <p>Compare medicine prices and compositions to make your decision.</p>

      <div className="medicine-cards">
        {comparisons.map((medicine, index) => (
          <div key={index} className="medicine-card">
            
            <img
              src={medicine.image_url}
              alt={medicine.name}
              className="medicine-image"
            />

           
            <h3>{medicine.name}</h3>
            <p><small>By {medicine.manufacturer}</small></p>

            
            <div className="details">
              <p><strong>Generic Name:</strong> {medicine.generic_name}</p>
              <p><strong>Average Price:</strong> ₹{parseFloat(medicine.average_price).toFixed(2)}</p>
              <p><strong>Discounted Price:</strong> ₹{parseFloat(medicine.discounted_price).toFixed(2)}</p>
              <p><strong>Chemical Formula:</strong> {medicine.chemical_formula}</p>

             
              <div className="ratings">
                <span>Ratings</span>
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`star ${i < Math.floor(medicine.rating) ? 'active' : ''}`}
                    >&#9733;</i>
                  ))}
                </div>
                <span>{medicine.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonSection;