import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import LogementDetail from './pages/LogementDetail';
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
          <Route path="/logement/:id" element={<LogementDetail />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notfound" />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
