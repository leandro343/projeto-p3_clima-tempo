import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';
import Busca from './components/Busca';

function App() {
  return (
    <div
      className="p-d-flex p-ai-center p-flex-column"
      style={{
        minHeight: '100vh',
        paddingLeft: '10px'
      }}
    >
      <h2 className="p-mb-3">Previsão do tempo</h2>
      <Busca />
    </div>
  );
}

export default App;
