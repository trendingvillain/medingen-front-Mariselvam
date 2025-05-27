import React, { useState } from 'react';
import './FaqsSection.css';

const FaqsSection = ({ faqs, medicineName }) => {
  const [isExpanded, setIsExpanded] = useState(true); 

  const toggleFaqs = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="faqs-section">
      
      <div className="header" onClick={toggleFaqs}>
        <h2 >Frequently asked questions for {medicineName}</h2>
        <button className="toggle-button">
          {isExpanded ? '🔻' : '◀️'}
        </button>
      </div>

      
      {isExpanded && (
        <div className="faqs-content">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <p><strong>Q. {faq.question}</strong></p>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FaqsSection;