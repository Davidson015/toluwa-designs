import { useLocation } from 'react-router-dom';

import Routes from './Routes';
import { Header, Footer } from './components';
import './assets/styles.css';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />

      <Routes location={location} />

      <Footer />
    </div>
  );
}

export default App;
