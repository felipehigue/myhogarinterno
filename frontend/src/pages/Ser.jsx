const Ser = () => {

  const pilar2 = {
    nombre: 'Ser',
    descripcion: 'Infinito',
    formas: [
      'Cómo es',
      'Y formas que ha tomado',
      {
        guardianes: [
          'Guardián 1',
          'Guardián 2',
          'Guardián 3'
        ]
      }
    ]
  };

  const capas = [
    {
      nombre: 'Sin capa',
      descripcion: 'Esencia'
    },
    {
      nombre: 'Capa 1',
      descripcion: 'Lienzo en blanco'
    },
    {
      nombre: 'Capa 2',
      descripcion: 'Limbo'
    }
  ];

  const guardianesPracticos = [
    {
      nombre: 'Formas del ser'
    },
    {
      nombre: 'Trialidad'
    },
    {
      nombre: 'Equilibrio',
      descripcion: 'Bases y matices en niveles'
    }
  ];

  const raices = [
    {
      nombre: 'Calma',
      profundidad: 1
    },
    {
      nombre: 'Fluir',
      profundidad: 2
    },
    {
      nombre: 'Felicidad',
      profundidad: 3
    },
    {
      nombre: 'Perspectiva',
      profundidad: 4
    },
    {
      nombre: 'Propósito',
      profundidad: 5
    },
    {
      nombre: 'Gratitud',
      profundidad: 6
    },
    {
      nombre: 'Peregrinaje',
      profundidad: 7
    }
  ];

 return (
  <div>
    <h1>{pilar2.nombre}</h1>
    <p>{pilar2.descripcion}</p>
    <ul>
      {pilar2.formas.map((forma, index) => (
        <li key={index}>
          {typeof forma === 'string' ? (
            forma
          ) : (
            <>
              <strong>Guardianes:</strong>
              <ul>
                {forma.guardianes.map((guardian, gIndex) => (
                  <li key={gIndex}>{guardian}</li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
    <h2>Capas</h2>
    <ul>
      {capas.map((capa, index) => (
        <li key={index}>
          {capa.nombre}: {capa.descripcion}
        </li>
      ))}
    </ul>
    <h2>Guardianes prácticos</h2>
    <ul>
      {guardianesPracticos.map((guardian, index) => (
        <li key={index}>{guardian.nombre}</li>
      ))}
    </ul>
    <h2>Raíces</h2>
    <ul>
      {raices.map((raiz, index) => (
        <li key={index}>
          {raiz.nombre} (Profundidad: {raiz.profundidad})
        </li>
      ))}
    </ul>
  </div>
);
}; 

export default Ser;