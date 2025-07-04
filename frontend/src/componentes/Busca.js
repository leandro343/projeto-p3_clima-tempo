import { useState, useEffect } from 'react';
import { RadioButton } from 'primereact/radiobutton';
import axios from 'axios';

function Busca() {
  const [coordenadas, setCoordenadas] = useState('-23.561167625063238, -46.65648357473211');
  const [opcao, setOpcao] = useState('');
  const [previsao, setPrevisao] = useState(null);
  const [timer, setTimer] = useState(null);

  const buscar = async () => {
    const [lat, lon] = coordenadas.split(',').map((v) => v.trim());

    if (!lat || !lon || isNaN(lat) || isNaN(lon)) return;

    try {
      const resp = await axios.get(`http://localhost:3001/weather?lat=${lat}&lon=${lon}`);
      setPrevisao(resp.data);
    } catch {
      setPrevisao(null);
    }
  };

  useEffect(() => {
    if (timer) clearTimeout(timer);

    if (coordenadas.includes(',') && opcao) {
      const novoTimer = setTimeout(() => {
        buscar();
      }, 5000);

      setTimer(novoTimer);
      return () => clearTimeout(novoTimer);
    }
  }, [coordenadas, opcao]);

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
          <label htmlFor="pressao">pressao e uumidade</label>
        </div>
      </div>
    </div>
  );
}

export default Busca;
