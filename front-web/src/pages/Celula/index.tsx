import React from 'react';
import Footer from '../../core/components/Footer';
import Navbar from '../../core/components/Navbar';
import './styles.scss'

const Celula = () => (
  <div className="celula-container">
      <div>
        <Navbar/>
      <h1>CELULA</h1>
        <Footer/>
      </div>
  </div>
)

export default Celula;