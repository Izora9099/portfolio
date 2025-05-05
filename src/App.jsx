import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



function App() {
            return (
                <Router>
                <Navbar /> {/* Always visible */}
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/testimonial" element={<Testimonial />} />
                    <Route path="/services" element={<Services />}/>
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer /> {/* Always visible */}
            </Router>
);
}
export default App;