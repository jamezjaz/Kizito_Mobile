import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SliderStyles from '../styles/SliderStyles.module.css';

const Slider = () => (
  <div>
    <Carousel className={SliderStyles.carousel}>
      <Carousel.Item interval={1000}>
        <img
          className="w-50 rounded rounded"
          src="https://fdn2.gsmarena.com/vv/pics/infinix/infinix-hot10-3.jpg"
          alt="PhoneImg"
        />
        <Carousel.Caption>
          <h3>Infinix Hot 8</h3>
          <h4>Infinix</h4>
          <p>New and fairly-used</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="w-50 rounded"
          src="https://fdn2.gsmarena.com/vv/pics/infinix/infinix-hot-s8-3.jpg"
          alt="PhoneImg"
        />
        <Carousel.Caption>
          <h3>Infinix Hot 8</h3>
          <h4>Infinix</h4>
          <p>New and fairly-used</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="w-50 rounded"
          src="https://fdn2.gsmarena.com/vv/pics/infinix/infinix-hot10-3.jpg"
          alt="PhoneImg"
        />
        <Carousel.Caption>
          <h3>Infinix Hot 10</h3>
          <h4>Infinix</h4>
          <p>New and fairly-used</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Slider;
