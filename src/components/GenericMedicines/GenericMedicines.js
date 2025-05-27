import React from 'react';
import './GenericMedicines.css';

const GenericMedicines = ({ generics }) => {
  if (!generics || generics.length === 0) {
    return <p>No generic alternatives available.</p>;
  }

  return (
    <div className="generic-medicines">
      <h2>Generic Medicine Alternatives</h2>
      <ul className="generic-list">
        {generics.map((generic, index) => (
          <li key={index} className="generic-item">
            <div className="image-container">
              <img src={generic.image_url} alt={generic.name} className="generic-image" />
            </div>
            <div className="generic-info">
              <h3>{generic.name}</h3>
              <p>{generic.manufacturer}</p>
              <p>
                ₹{parseFloat(generic.price).toFixed(2)}
                <span className="discount">{` (${generic.discount_percent}% less Price)`}</span>
              </p>
            </div>
            <button className="add-button">+ Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenericMedicines;