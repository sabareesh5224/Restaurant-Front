// Carousel.js

import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

const Carousel = () => {
  return (
    <ReactCarousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
    >
      <div>
        <img src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" alt="Image 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1719187200&semt=sph" alt="Image 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTY2MTU3Ny13aWtpbWVkaWEtaW1hZ2Uta293YXBlZWouanBn.jpg" alt="Image 3" />
        <p className="legend">Legend 3</p>
      </div>
    </ReactCarousel>
  );
};

export default Carousel;
