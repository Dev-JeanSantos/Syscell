import React from 'react';
import CarouselComponent from '../../core/components/CarouselComponent';
import Footer from '../../core/components/Footer';
import Navbar from '../../core/components/Navbar';
import Cell1  from '../../core/assets/imagens/cell1.png'
import Cell2  from '../../core/assets/imagens/cell2.png'
import Cell3  from '../../core/assets/imagens/cell3.png'
import './styles.scss'

const Celula = () => (
  <div className="celula-container">
      <div>
        <Navbar/>
        <CarouselComponent 
          img1={Cell1}
          img2={Cell2} 
          img3={Cell3} 
          title1={"Esperamos por Voce!"}
          title2={"Esperamos por Voce!"}
          title3={"Esperamos por Voce!"}
          subTitle1={"João 11:34"}
          subTitle2={"João 11:34"}
          subTitle3={"João 11:34"}
          />
        <Footer/>
      </div>
  </div>
)

export default Celula;