// import logo from './logo.svg';
// import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Book from './components/Book';
import Contact from './components/Contact';
import Footer from './components/Footer';


import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route
} from "react-router-dom"

function App() {
  document.body.style.background = "#f2ffff"
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/book" element={<Book />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
