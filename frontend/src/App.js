import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import EditPage from './pages/EditPage';

const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </Router>
  );
};

export default App;
