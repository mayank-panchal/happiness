import React from 'react';
import Slider from 'react-slick';

// Import local images
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';

const images = [image1, image2, image3, image4];

function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section style={{ background: '#f0f0f0' }}>
      <h2>Gallery 📸</h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} style={{ width: '100%', borderRadius: '10px' }} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Gallery;
