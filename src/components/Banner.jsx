import React from 'react';
import Slideshow from './slideshow/Slideshow';
import Apple from './Images/Apple.jpeg';
import Airpods from './Images/Samsunghome.jpeg'
import Hom from './Images/Homepi.jpeg';
import Ban from './Images/Homepi.jpeg';
import Tab from './Images/Tab.jpeg';


const Banner = () => {
  const images = [
    { src: Apple, alt: 'Apple Iphones',  },
    { src: Ban, alt: 'Apple Iphone 16', },
    { src: Tab, alt: 'Apple Ipad',  },
    { src: Hom, alt: 'Image 3',  },
    { src: Airpods, alt: 'Image 3',  },
  ];

  return (
    <div>
      
      <Slideshow images={images} />
    </div>
  );
};

export default Banner;
