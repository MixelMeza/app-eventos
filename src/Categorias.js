import React, { useState, useEffect } from 'react';

function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/categorias')
      .then(response => response.json())
      .then(data => setCategorias(data));
  }, []);

  return (
    
    <div>
      <h2>Lista de Categorias</h2>
      <table className="libros-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(categoria => (
            <tr key={categoria.id}>
              <td>{categoria.nombre}</td>
              <td>{categoria.estado}</td>

            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default Categorias;
