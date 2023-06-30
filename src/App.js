import React from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Carrucel from './componentes/Carrucel';
import FormBusquedaLibros from './componentes/FormBusquedaLibros';
import FormAudioLibro from './componentes/FormAudioLibro';
import Administrador from './componentes/Administrador';

function App() {
  return (
    <BrowserRouter>
    <div style={{ marginBottom: '25px' }}>
    <Navbar />
    </div>
      <Routes>
      <Route path="/" element={<Carrucel />} />
        <Route path="/formbusquedalibros" element={<FormBusquedaLibros />} />
        <Route path="/formaudiolibro" element={<FormAudioLibro />} />
        <Route path="/administrador" element={<Administrador />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
