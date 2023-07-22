import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Quote from './pages/Quote';
import Insurance from './pages/Insurance';
// import Blog from './pages/Blog';
// import Events from './pages/Events';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Appointment from './pages/Appointment';
import Privacy from './pages/Privacy';
import Medicare from './pages/Medicare';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Nav />
            </div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} /> 
                <Route path="/quote" element={<Quote/>} />
                <Route path="/insurance" element={<Insurance/>} /> 
                {/* <Route path="/blog" element={<Blog/>} />
                <Route path="/events" element={<Events/>} /> */}
                <Route path="/appointment" element={<Appointment/>} />
                <Route path="/contact" element={<Contact/>} /> 
                <Route path="/privacy" element={<Privacy/>}/>
                <Route path="/medicare" element={<Medicare/>}/>
            </Routes>
            <div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
