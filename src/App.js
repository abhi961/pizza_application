import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Recipe from "./components/Recipe";
import About from "./components/About";
import Blog from "./components/Blog";
import Client from "./components/Clients";
import footer from "./components/Footer";
import Footer from './components/Footer';

function App() {
  return (
  <div className="main-contaier">
    <Navbar/>
    <Banner/>
    <Recipe/>
    <About/>
    <Blog/>
    <Client/>
    <Footer/>
  </div>
  );
}

export default App;
