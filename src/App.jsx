import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="full-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
