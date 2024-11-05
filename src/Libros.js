import React, { useState, useEffect } from 'react';

function Libros() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/libros')
      .then(response => response.json())
      .then(data => setLibros(data));
  }, []);

  return (
    <div>
      <h2>Lista de Libros</h2>
      <table className="libros-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Páginas</th>
            <th>Edición</th>
            <th>Estado</th>
            <th>Sección</th>
            <th>Editorial</th>
          </tr>
        </thead>
        <tbody>
          {libros.map(libro => (
            <tr key={libro.id}>
              <td>{libro.titulo}</td>
              <td>{libro.paginas}</td>
              <td>{libro.edicion}</td>
              <td>{libro.estado}</td>
              <td>{libro.seccion.nombre}</td>
              <td>{libro.editorial.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Libros;
