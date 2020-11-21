import React from 'react';
import CarouselComponent from '../../core/components/CarouselComponent';
import Footer from '../../core/components/Footer';
import Navbar from '../../core/components/Navbar';
import System1 from '../../core/assets/imagens/system1.png';
import System2 from '../../core/assets/imagens/system2.png';
import System3 from '../../core/assets/imagens/system3.png';
import './styles.scss'

const Sistema = () => (
  <div className="sistema-container">
      <div>
        <Navbar/>
        <CarouselComponent 
          img1={System1} 
          img2={System2} 
          img3={System3}
          title1={"Os resultados em Gráficos Interativos"}
          title2={"Avaliações Conjuntas"}
          title3={"Garantia nos Resultados"}
          subTitle1={"Gráficos que atendem a suas necessidades"}
          subTitle2={"Equipe Colaborativa disponivel para atender suas necessidades"}
          subTitle3={"Sem pressão de entrega, o sistema garante precisão nos resultados"}         
          />
         <Footer/>
      </div>
  </div>
)

export default Sistema;