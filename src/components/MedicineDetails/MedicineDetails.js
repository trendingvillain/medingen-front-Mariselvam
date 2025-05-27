import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
import './MedicineDetails.css';
import GenericMedicines from '../GenericMedicines/GenericMedicines';
import ComparisonSection from '../ComparisonSection/ComparisonSection';
import FaqsSection from '../FaqsSection/FaqsSection';
import RatingsAndReviews from '../RatingsAndReviews/RatingsAndReviews';
import DisclaimerAndFeatures from '../DisclaimerAndFeatures/DisclaimerAndFeatures';


const MedicineDetails = ({ medicineId }) => {
  const [medicine, setMedicine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMedicineDetails = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/medicines/${id}`);
        setMedicine(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load medicine details.');
        setLoading(false);
      }
    };

    fetchMedicineDetails();
  }, [id]);

  if (loading) return <p>Loading medicine details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
    <div className="medicine-details-container">
      <div className="medicine-details-left">
        <div>
          <h3>{medicine?.name}</h3>
        </div>

        <div className="title-bar">
          <h2>Medicine Details</h2>
        </div>

        <div className="details">
          <h2>About {medicine.strength}</h2>
          <p>{medicine.description}</p>

          <h2>Uses of {medicine.strength}</h2>
          <ul>
            {medicine.uses.split(', ').map((use, index) => (
              <li key={index}>{use}.</li>
            ))}
          </ul>

          <h2>How {medicine.strength} Works</h2>
          <ul>
            {medicine.dosage.split(', ').map((dosage, index) => (
              <li key={index}>{dosage}.</li>
            ))}
          </ul>

          <h2>Side Effects of {medicine.strength}</h2>
          <span className="side-effects-note">
            Common Side Effects of {medicine.strength}
          </span>
          <ul>
            {medicine.side_effects.split(', ').map((effect, index) => (
              <li key={index}>{effect}.</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="generic-medicines-right">
        <GenericMedicines generics={medicine.generics} />
      </div>
      
    </div>
    <ComparisonSection comparisons={medicine.comparisons} />
    <FaqsSection faqs={medicine?.faqs} medicineName={medicine?.name} />
    <RatingsAndReviews reviews={medicine?.reviews} />
    <DisclaimerAndFeatures />
    </div>
  );
};

export default MedicineDetails;