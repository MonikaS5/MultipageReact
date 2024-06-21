//import logo from './logo.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Docs from './components/Docs';
import Tutorial from './components/Tutorial';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/"
            element={<Home />} />
          <Route path="/docs"
            element={<Docs />} />
          <Route path="/tutorial"
            element={<Tutorial />} />
          <Route path="/about"
            element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
