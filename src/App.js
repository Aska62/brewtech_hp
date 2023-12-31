import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Supports from './pages/Supports';
import Info from './pages/Info';
import { LanguageProvider } from './context/LanguageContext';

function App() {

  return (
    <>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/supports' element={<Supports />} />
            <Route path='/info' element={<Info />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </>
  );
}

export default App;
