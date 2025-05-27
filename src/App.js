import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MedicineDetails from './components/MedicineDetails/MedicineDetails';


function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          
          <Route path="/medicine/:id" element={<MedicineDetails />} />
          
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;