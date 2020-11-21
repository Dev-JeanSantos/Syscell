import React from 'react';
import CarouselComponent from '../../core/components/CarouselComponent';
import Footer from '../../core/components/Footer';
import Navbar from '../../core/components/Navbar';
import './styles.scss'

const Sistema = () => (
  <div className="sistema-container">
      <div>
        <Navbar/>
        <CarouselComponent/>
         <Footer/>
      </div>
  </div>
)

export default Sistema;