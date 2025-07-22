import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './styles/index.css';


import Home from './pages/home';
import About from './pages/about';
import Contribute from './pages/contribute';
import OverviewComputing from './pages/overviewComputing';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overviewComputing" element={<OverviewComputing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contribute" element={<Contribute />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;