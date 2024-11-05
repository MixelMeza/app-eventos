import React, { useState, useEffect } from 'react';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsuarios(data));
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <table className="libros-table">
        <thead>
          <tr>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.name}</td>


            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Usuarios;
