import React from 'react';
import Footer from '../../core/components/Footer';
import Navbar from '../../core/components/Navbar';
import './styles.scss'

const Home = () => (
  <div className="home-container">
      <div>
        <Navbar/>
        <h1>HOME</h1>
        <Footer/>
      </div>
  </div>
)

export default Home;