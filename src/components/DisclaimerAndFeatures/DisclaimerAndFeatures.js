import React from 'react';
import './DisclaimerAndFeatures.css';

const DisclaimerAndFeatures = () => {
  return (
    <div className="disclaimer-and-features">
      
      <div className="disclaimer">
        <h3>Disclaimer:</h3>
        <p>
          The contents here are for informational purposes only and not intended to be a substitute for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or other qualified health provider with any questions you may have regarding a medical condition. Medkart on any information and subsequent action or inaction is solely at the user's risk, and we do not assume any responsibility for the same. The content on the Platform should not be considered or used as a substitute for professional and qualified medical advice. Please consult your doctor for any query pertaining to medicines, tests, and/or diseases, as we support, and do not replace the doctor-patient relationship.
        </p>
      </div>

      
      <div className="feature-cards">
        <div className="feature-card">
          <img src="/images/1.png" alt="Safe and Secured Payment" className="feature-icon" />
          
        </div>
        <div className="feature-card">
          <img src="/images/2.png" alt="100% Authentic Products" className="feature-icon" />
          
        </div>
        <div className="feature-card">
          <img src="/images/3.png" alt="6 lac + Happy Customers" className="feature-icon" />
          
        </div>
      </div>
    </div>
  );
};

export default DisclaimerAndFeatures;