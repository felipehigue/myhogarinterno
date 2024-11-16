import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const buttons = [
    { id: 1, text: 'esculpir' },
    { id: 2, text: 'Botón 2' },
    { id: 3, text: 'Botón 3' },
    { id: 4, text: 'Botón 4' },
    { id: 5, text: 'Botón 5' },
  ];

  return (
    <div>
      <h1>Página Principal</h1>
      <div>
        {buttons.map((button) => (
          <div key={button.id}>
            <Link to={`/edit/${button.id}`}>
              <button>{button.text}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
