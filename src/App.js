// import logo from './logo.svg';
// import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Book from './components/Book';
import Book1 from './components/Book1';
import Book2 from './components/Book2';
import Book3 from './components/Book3';
import Book4 from './components/Book4';
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
            <Route exact path="/ort" element={<Book1 />} />
            <Route exact path="/der" element={<Book2 />} />
            <Route exact path="/psy" element={<Book3 />} />
            <Route exact path="/gas" element={<Book4 />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
