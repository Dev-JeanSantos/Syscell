import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IgrejaBanner  from './../../assets/imagens/banner-igreja.png';
import LouvorBanner  from './../../assets/imagens/banner-louvor.png';
import BibliaBanner  from './../../assets/imagens/banner-biblia.png';
import './styles.scss';

const CarouselComponent = () => {
    return (
        <div className="carousel-container">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-carousel"
                            src= {IgrejaBanner}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="h3">Faça seu Cadastro agora!</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-carousel"
                            src={BibliaBanner}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="h3">Queremos orar pela sua vida!</h3>
                            <p>João 18:2.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-carousel"
                            src={LouvorBanner}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className="h3">Seja bem-vindo ao site</h3>
                            <p>Cadastre-se</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </div>
    );
};


export default CarouselComponent;