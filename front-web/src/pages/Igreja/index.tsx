import React from 'react';
import CarouselComponent from '../../core/components/CarouselComponent';
import Footer from '../../core/components/Footer';
import Navbar from '../../core/components/Navbar';
import Church1  from '../../core/assets/imagens/church1.png'
import Church2  from '../../core/assets/imagens/church2.png'
import Church3  from '../../core/assets/imagens/church3.png'

import './styles.scss'

const Igreja = () => (
  <div className="igreja-container">
      <div>
       <Navbar/>
       <CarouselComponent img1={Church1} img2={Church2} img3={Church3}/>
      <Footer/>
      </div>
  </div>
)

export default Igreja;