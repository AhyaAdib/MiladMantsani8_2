import React from 'react';
import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/gallery.css'; // Custom styling

function SimpleCarousel() {
  // Data gambar
  const slides = Array.from({ length: 22 }, (_, index) => {
    const id = index + 1;
    return {
      src: `/assets/Gallery/Gallery (${id}).jpg`, // Path gambar
      alt: `Gallery ${id}`,
    };
  });

  return (
    <div className="simple-carousel-container">
      <h1 className="gallery-title">Gallery</h1>
      <br></br>
      {/* Carousel Bootstrap */}
      <Carousel interval={5000} indicators>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={slide.src}
              alt={slide.alt}
              onError={(e) => (e.target.src = '/assets/placeholder.jpg')} // Fallback jika gambar tidak ditemukan
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};


export default function CarouselWindow ()
{
    return (
        <section className='GallerySection'>
            <SimpleCarousel />
        </section>
    )
}
