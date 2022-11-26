import { useLocation } from 'react-router-dom';

import Routes from './Routes';
import { Header, Footer, BackToTop } from './components';
import './assets/styles.css';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <div id="back-to-top-anchor"></div>
      
      <Routes location={location} />

      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
