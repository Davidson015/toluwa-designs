import { useLocation } from 'react-router-dom';

import Routes from './Routes';
import './assets/styles.css';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Routes location={location} />
    </div>
  );
}

export default App;
