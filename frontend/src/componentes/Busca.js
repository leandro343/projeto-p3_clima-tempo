import { useState } from 'react';
import { RadioButton } from 'primereact/radiobutton';

function Busca() {
  const [coordenadas, setCoordenadas] = useState('-23.561167625063238, -46.65648357473211');
  const [opcao, setOpcao] = useState('');

  return (
    <div className="p-mt-4">
      <input
        type="text"
        value={coordenadas}
        onChange={(e) => setCoordenadas(e.target.value)}
        placeholder="Latitude, Longitude"
        className="p-inputtext"
      />

      <div className="p-formgroup-inline p-mt-2">
        <div className="p-field-radiobutton">
          <RadioButton
            inputId="temp"
            name="tipo"
            value="temp"
            onChange={(e) => setOpcao(e.value)}
            checked={opcao === 'temp'}
          />
          <label htmlFor="temp">temperatura</label>
        </div>

        <div className="p-field-radiobutton">
          <RadioButton
            inputId="pressao"
            name="tipo"
            value="pressao"
            onChange={(e) => setOpcao(e.value)}
            checked={opcao === 'pressao'}
          />
          <label htmlFor="pressao">Pressao e umiedade</label>
        </div>
      </div>
    </div>
  );
}

export default Busca;
