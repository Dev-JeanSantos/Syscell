import React from 'react';
import CarouselComponent from '../../core/components/CarouselComponent';
import Footer from '../../core/components/Footer';
import Navbar from '../../core/components/Navbar';
import IgrejaBanner  from '../../core/assets/imagens/banner-igreja.png'
import LouvorBanner  from '../../core/assets/imagens/banner-louvor.png';
import BibliaBanner  from '../../core/assets/imagens/banner-biblia.png';
import './styles.scss'

const Home = () => (
  <div className="home-container">
    <div>
      <Navbar />
      <CarouselComponent 
        img1={IgrejaBanner}
        img2 ={LouvorBanner}
        img3={BibliaBanner}
        title1={"Encontre a Paz Interior!"}
        title2={"Juntos seremos Igreja!"}
        title3={"A Bíblia é o nosso Guia!"}
        subTitle1={"João 11:34"}
        subTitle2={"Mateus 12:43"}
        subTitle3={"Corintios 1:23"}
      />
      <Footer />
    </div>
  </div>
)

export default Home;