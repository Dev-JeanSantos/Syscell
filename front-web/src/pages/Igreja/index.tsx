import React from 'react';
import CarouselComponent from '../../core/components/CarouselComponent';
import Footer from '../../core/components/Footer';
import Navbar from '../../core/components/Navbar';
import './styles.scss'

const Igreja = () => (
  <div className="igreja-container">
      <div>
       <Navbar/>
       <CarouselComponent/>
      <Footer/>
      </div>
  </div>
)

export default Igreja;