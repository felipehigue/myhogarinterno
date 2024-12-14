import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Esculpir from './pages/Esculpir';
import Ser from './pages/Ser';
import DejarHuella from './pages/DejarHuella';
import MihogarMundo from './pages/MihogarMundo';
import Aventura from './pages/Aventura';
import GranBiblioteca from './pages/GranBiblioteca';

const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/esculpir/" element={<Esculpir/>} />
        <Route path="/edit/ser/" element={<Ser/>} />
        <Route path="/edit/dejarhuella/" element={<DejarHuella/>} />
        <Route path="/edit/mihogarmundo/" element={<MihogarMundo/>} />
        <Route path="/edit/aventura/" element={<Aventura/>} />
        <Route path="/edit/granbiblioteca/" element={<GranBiblioteca/>} />

        
      </Routes>
    </Router>
  );
};

export default App;
