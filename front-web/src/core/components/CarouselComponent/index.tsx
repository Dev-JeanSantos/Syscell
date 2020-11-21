import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

type Props = {
    img1: string;
    img2: string;
    img3: string;
    title1 ?: string;
    title2 ?: string;
    title3 ?: string;
    subTitle1 ?: string;
    subTitle2 ?: string;
    subTitle3 ?: string;
}

const CarouselComponent = ({ img1, img2, img3, title1, subTitle1,  title2, subTitle2,  title3, subTitle3 }: Props) => {
    return (
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-carousel"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="h3">{title1}</h3>
                        <p>{subTitle1}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-carousel"
                        src={img2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="h3">{title2}</h3>
                        <p>{subTitle2}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-carousel"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="h3">{title3}</h3>
                        <p>{subTitle3}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};


export default CarouselComponent;