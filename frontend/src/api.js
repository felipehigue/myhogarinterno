const API_URL = 'http://localhost:3000';

// Obtener todos los botones
export const fetchButtons = async () => {
  const response = await fetch(`${API_URL}/buttons`);
  return await response.json();
};

// Obtener datos de un botón específico
export const fetchButton = async (id) => {
  const response = await fetch(`${API_URL}/buttons/${id}`);
  return await response.json();
};

// Actualizar un botón
export const updateButton = async (id, text) => {
  await fetch(`${API_URL}/update`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ buttonId: id, text }),
  });
};
