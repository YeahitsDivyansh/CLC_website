import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./mid-image.css";

const images = [
  "/campus_img1.jpg",
  "/campus_img2.jpg",
  "/campus_img3.jpg",
  "/campus_img4.png",
  "/campus_img5.jpg",
  "/campus_img6.jpg",
  "/campus_img7.png",
  "/campus_img8.jpg",
];

const MidImage = () => {
  return (
    <div className="mid-image container mt-4 mb-4">
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
        data-bs-wrap="true"
      >
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={img}
                className="d-block w-100 img-fluid"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon black-arrow"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MidImage;
