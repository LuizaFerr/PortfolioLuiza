import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './componets/Profile';
import About from './componets/About';

function App() {
  const handlePageChange = (page: string) => {
    console.log(`Navigating to page: ${page}`);
  };

  return (
    <Router basename="/PortfolioLuiza">
      <Routes>
        <Route path="/" element={<Profile onPageChange={handlePageChange} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

