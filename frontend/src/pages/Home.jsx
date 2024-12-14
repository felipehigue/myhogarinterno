import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4 mt-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-black uppercase">MI HOGAR INTERNO</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <button>Inicio</button>
        </Link>
        <Link to="/edit/esculpir" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <button>esculpir</button>
        </Link>
        <Link to="/edit/ser" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <button>ser</button>
        </Link>
        <Link to="/edit/dejarhuella" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <button>dejar huella</button>
        </Link>
        <Link to="/edit/mihogarmundo" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <button>mi hogar y mi mundo</button>
        </Link>
        <Link to="/edit/aventura" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <button>aventura</button>
        </Link>
        <Link to="/edit/granbiblioteca" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <button>gran biblioteca</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;