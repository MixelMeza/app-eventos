import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './Inicio';
import AcercaDe from './AcercaDe';
import Usuarios from './Usuarios';
import Categorias from './Categorias';
import Libros from './Libros';
import Contador from './Contador';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca De</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/users">Usuarios</Link></li>
          <li><Link to="/category">Categorias</Link></li>
          <li><Link to="/libro">Libros</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/about" element={<AcercaDe />} />
        <Route path="/contact" element={<Contador />} />
        <Route path="/users" element={<Usuarios />} />
        <Route path="/category" element={<Categorias />} />
        <Route path="/libro" element={<Libros />} />
      </Routes>
    </Router>
  );
}

export default App;
