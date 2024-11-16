import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPage = () => {
  const { id } = useParams(); // Obtiene el ID del botón desde la URL
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);

  // Cargar el texto actual del botón
  useEffect(() => {
    fetch(`http://localhost:3000/buttons/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setText(data.texto);
        setLoading(false);
      });
  }, [id]);

  const handleSave = async () => {
    await fetch('http://localhost:3000/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ buttonId: id, text }),
    });
    navigate('/'); // Regresa a la página principal
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Editar Botón {id}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nuevo texto"
      />
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default EditPage;
