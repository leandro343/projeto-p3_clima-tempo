import { Card } from 'primereact/card';

function Exibicao({ dados, tipo }) {
  const { main } = dados;

  const info =
    tipo === 'temp'
      ? `Temperatura mínima: ${main.temp_min}°C | máxima: ${main.temp_max}°C`
      : `Pressão: ${main.pressure} hPa | Umidade: ${main.humidity}%`;

  return (
    <Card title="Previsão">
      <p>{info}</p>
    </Card>
  );
}

export default Exibicao;
