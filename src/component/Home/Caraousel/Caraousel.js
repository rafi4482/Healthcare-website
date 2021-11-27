import React from 'react';
import './Carousel.css'
import { Carousel } from 'react-bootstrap';
import b1 from '../../../images/1.jpg'
import b2 from '../../../images/2.jpg'
import b3 from '../../../images/3.jpg'
const Caraousel = () => {
  return (
    <>
      <Carousel className="margin">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={b1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Professional Doctors</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={b2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>24 hour reception</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={b3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Expert advice online</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Caraousel;