import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => (
  <div>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="w-25"
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
          className="w-25"
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
          className="w-25"
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
