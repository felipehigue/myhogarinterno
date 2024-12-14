import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Mi Hogar Interno</h1>
      <div>
        <Link to="/">
          <button>Inicio</button>
        </Link>
        <Link to="/edit/esculpir">
          <button>esculpir</button>
        </Link>
        <Link to="/edit/ser">
          <button>ser</button>
        </Link>
        <Link to="/edit/dejarhuella">
          <button>dejar huella</button>
        </Link>
        <Link to="/edit/mihogarmundo">
          <button>mi hogar y mi mundo</button>
        </Link>
        <Link to="/edit/aventura">
          <button>aventura</button>
        </Link>
        <Link to="/edit/granbiblioteca">
          <button>gran biblioteca</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;