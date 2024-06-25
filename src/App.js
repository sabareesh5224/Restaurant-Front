import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import About from './components/About';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import TodoList from './components/TodoList';


function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Hero" element={<Hero />} />
                    <Route path="/Menu" element={<Menu />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
                
            </div>
        </Router>
    );
}

function Home() {
    return (
        <>
            <Carousel />
            <About />
            
            <Services />
            <Contact />
            <TodoList />
            <Footer />
        </>
    );
}

export default App;
