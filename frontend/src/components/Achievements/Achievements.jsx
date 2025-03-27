import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./Achievements.css";
import { FaPause, FaPlay } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Achievements = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [paused, index]);

  const slides = [
    {
      text: "Prof. Alka Chawla, PIC, Campus Law Centre, as Chief Guest at a one day awareness programme organised by VIPS in collaboration with USLLS, GGSIP University on Rights of Indian Women in NRI matrimonial Issues on 13.02.2014 sponsored by National Commission for Women",
      img1: "/campus_img8.jpg", // Replace with actual image paths
      img2: "/campus_img8.jpg",
    },
    {
        text: "Prof. Alka Chawla, PIC, Campus Law Centre, as Chief Guest at a one day awareness programme organised by VIPS in collaboration with USLLS, GGSIP University on Rights of Indian Women in NRI matrimonial Issues on 13.02.2014 sponsored by National Commission for Women",
        img1: "/campus_img8.jpg", // Replace with actual image paths
        img2: "/campus_img8.jpg",
      },
      {
        text: "Prof. Alka Chawla, PIC, Campus Law Centre, as Chief Guest at a one day awareness programme organised by VIPS in collaboration with USLLS, GGSIP University on Rights of Indian Women in NRI matrimonial Issues on 13.02.2014 sponsored by National Commission for Women",
        img1: "/campus_img8.jpg", // Replace with actual image paths
        img2: "/campus_img8.jpg",
      },
      {
        text: "Prof. Alka Chawla, PIC, Campus Law Centre, as Chief Guest at a one day awareness programme organised by VIPS in collaboration with USLLS, GGSIP University on Rights of Indian Women in NRI matrimonial Issues on 13.02.2014 sponsored by National Commission for Women",
        img1: "/campus_img8.jpg", // Replace with actual image paths
        img2: "/campus_img8.jpg",
      }
  ];

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ padding: "5.5rem" }}
    >
      <div className="position-relative" style={{ maxWidth: "100rem" }}>
        <Carousel
          className="w-100 h-100"
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
          controls={false}
          pause={false}
        >
          {slides.map((slide, idx) => (
            <Carousel.Item className="w-100 h-100" key={idx}>
              <div
                className="achievement-card h-100 text-white"
                style={{ backgroundColor: "#7d1fa3", borderRadius: "10px", padding: "3rem" }}
              >
                <span className="badge bg-light text-dark mb-2">Teacher</span>
                <p style={{ fontSize: "20px", height: "10%" }}>{slide.text}</p>
                <div style={{ height: "70%", marginTop: "3rem" }} className="d-flex gap-2">
                  <img src={slide.img1} alt="event" className="p-3 img-fluid" style={{ maxWidth: "48%" }} />
                  <img src={slide.img2} alt="event" className="p-3 img-fluid" style={{ maxWidth: "48%" }} />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Play/Pause Button with Correct Positioning */}
        <button
          className="position-absolute top-0 end-0 m-2 btn btn-dark"
          onClick={() => setPaused(!paused)}
          style={{ zIndex: 1000 }}
        >
          {paused ? <FaPlay /> : <FaPause />}
        </button>

        {/* Fixed Next and Prev Buttons */}
        <button
          type="button"
          className="carousel-control-prev"
          onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
        >
          <FiChevronLeft />
        </button>
        <button
          type="button"
          className="carousel-control-next"
          onClick={() => setIndex((index + 1) % slides.length)}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Achievements;
