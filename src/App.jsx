import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/HomePage/Home';
import Services from './components/Services';
import Blog from './components/BlogPage/Blog';
import BlogPost from './components/BlogPage/BlogPost';
import { Route, Routes } from 'react-router-dom';
import ContactSection from './components/HomePage/ContactSection';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/post1" element={<BlogPost />} />
                <Route path="/#contact" element={<ContactSection/>}/>
                <Route path="linkedin.com/in/anoopsiddharth" element={<Footer/>}/>
            </Routes>
        </>
    );
}

export default App;