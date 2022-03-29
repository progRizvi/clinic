import React from "react";
import { Container } from "react-bootstrap";
import GalleryImg from "../../data/Gallery/Gallery";

const Gallery = () => {
  return (
    <div>
      <Container>
        <div className="gallery-container">
          {GalleryImg.map((img) => (
            <div key={img.id} className="gallery-img">
              <img src={img.img} alt="" className="img-fluid" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
