import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Receitas from './pages/Receitas';
import Despesas from './pages/Despesas';
import Relatorio from './pages/Relatorio';
import Navbar from './components/Navbar'; // Um exemplo de componente de navegação

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/receitas" element={<Receitas />} />
              <Route path="/despesas" element={<Despesas />} />
              <Route path="/relatorio" element={<Relatorio />} />
          </Routes>
      </Router>
  );
}

export default App;
