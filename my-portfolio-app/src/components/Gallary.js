import React, { useState, useEffect } from 'react';
import './Gallery.css';
import ImageData from '../images.json';
import ScrollButton from './ScrollButton';

const Gallery = () => {
  const [images, setImages] = useState([]); //set image state to pull in images from json file
  const [selectedImage, setSelectedImage] = useState(null); //image state for modal
  const [currentIndex, setCurrentIndex] = useState(0);

  //pull images dyunamically from json file
  useEffect(() => {
    setImages(ImageData)
  }, []);

  //open modal and set selected image
  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  //close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  //show previous image
  const showPrevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  // show next image
  const showNextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        //display images in gallery
        //set on click to open modal
        <div key={index} className="gallery-item" onClick={() => openModal(index)}>
          <img src={`${process.env.PUBLIC_URL}/images/${image.src}`} alt={`Gallery ${index + 1}`} />
        </div>
      ))}

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <span className="prev" onClick={showPrevImage}>&#10094;</span>
          <div className="modal-content">
            <img src={`${process.env.PUBLIC_URL}/images/${selectedImage.src}`} alt="Full Size" />
            <div className="caption">{selectedImage.caption}</div>
          </div>
          <span className="next" onClick={showNextImage}>&#10095;</span>
        </div>
      )}
      <ScrollButton /> {/*Insert Scroll to top button */}
    </div>
  );
};

export default Gallery;