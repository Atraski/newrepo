/* eslint-disable no-unused-vars */
import React from "react";
import  img1  from "./imagegallery/img1 (2).webp";
import  img2  from "./imagegallery/Akanksha-Wankhade-modified (2).png";
import  img3  from "./imagegallery/Akanksha-Wankhade-modified (2).png";
import  img4  from "./imagegallery/Akanksha-Wankhade-modified (2).png";
import  img5  from "./imagegallery/Akanksha-Wankhade-modified (2).png";
import  img6  from "./imagegallery/Akanksha-Wankhade-modified (2).png";
import  img7  from "./imagegallery/Akanksha-Wankhade-modified (2).png";
import  img14  from "./imagegallery/Akanksha-Wankhade-modified (2).png";
import  img15  from "./imagegallery/Akanksha-Wankhade-modified (2).png";
import  img16  from "./imagegallery/Akanksha-Wankhade-modified (2).png";
import  img11  from "./imagegallery/Akanksha-Wankhade-modified (2).png";
import  img12  from "./imagegallery/Akanksha-Wankhade-modified (2).png";
import  img13  from "./imagegallery/Akanksha-Wankhade-modified (2).png";
import ImageGallery from "./imagegallary";



const NewBanner = () => {
  const images = [
    { url: img1, alt: "Image 1" },
    { url: img2, alt: "Image 2" },
    { url: img12, alt: "Image 9" },
    { url: img13, alt: "Image 10" },
    { url: img14, alt: "Image 11" },
    { url: img3, alt: "Image 3" },
    { url: img4, alt: "Image 4" },
    { url: img7, alt: "Image 7" },

    { url: img5, alt: "Image 5" },
    { url: img6, alt: "Image 6" },
    { url: img11, alt: "Image 8" },

    { url: img15, alt: "Image 12" },
    { url: img16, alt: "Image 12" },
  ];

  return < ImageGallery images={images} />;
};

export default NewBanner;
