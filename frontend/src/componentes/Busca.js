import { useState } from 'react';

function Busca() {
  const [coordenadas, setCoordenadas] = useState('-23.561167625063238, -46.65648357473211');

  return (
    <div className="p-mt-4">
      <input
        type="text"
        value={coordenadas}
        onChange={(e) => setCoordenadas(e.target.value)}
        placeholder="Latitude, Longitude"
        className="p-inputtext"
      />
    </div>
  );
}

export default Busca;
