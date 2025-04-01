import React, { useState, useEffect, useCallback } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

const Campus = () => {
  const heritageImages = [
    "https://clc.du.ac.in/wp-content/uploads/2023/03/Satya-Narayan-Even-dusk-can_t-dim-the-beauty-of-Law.jpg",
    "https://clc.du.ac.in/wp-content/uploads/2023/03/SAURABH-RAJPUT-Current-mood-college-life.jpeg",
    "https://clc.du.ac.in/wp-content/uploads/2023/03/The-Bliss-ASHISH-VERMA.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heritageImages.length);
  }, [heritageImages.length]);

  const previousSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + heritageImages.length) % heritageImages.length
    );
  }, [heritageImages.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let intervalId;

    if (isPlaying) {
      intervalId = setInterval(nextSlide, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying, nextSlide]);

  return (
    <div className="bg-white">
      <h1
        className="mt-3 text-3xl font-extrabold text-center"
        style={{ color: "#4e459a", marginBottom: "10px" }}
      >
        Campus Life @ CLC
      </h1>
      <h3
        className="mt-5 text-3xl font-extrabold text-center"
        style={{ color: "#4e459a", marginBottom: "10px" }}
      >
        The Mighty Gate : Journey Begins
      </h3>
      <div className="flex items-center justify-center mb-5">
        <img src="https://clc.du.ac.in/wp-content/uploads/2023/03/Beginning-of-a-new-chapter.jpeg" />
      </div>
      <h3
        className="mt-5 text-3xl font-extrabold text-center"
        style={{ color: "#4e459a", marginBottom: "10px" }}
      >
        Runway to success…
      </h3>
      <div className="flex items-center px-5 justify-center mb-5 gap-x-4">
        <div className="flex items-center px-5 justify-center mb-5 gap-x-4">
          <img
            src="https://clc.du.ac.in/wp-content/uploads/2023/03/Hello-CLC-1536x1217.jpg"
            style={{ width: "400px", height: "300px", objectFit: "cover" }}
            alt="Image 1"
          />
          <img
            src="https://clc.du.ac.in/wp-content/uploads/2023/03/Runway-to-success.jpeg"
            style={{ width: "400px", height: "300px", objectFit: "cover" }}
            alt="Image 2"
          />
        </div>
      </div>

      <h3
        className="mt-5 text-3xl font-extrabold text-center"
        style={{ color: "#4e459a", marginBottom: "10px" }}
      >
        Heritage of CLC : The Building
      </h3>

      {/* Image Carousel */}
      <div className="relative max-w-4xl mx-auto my-8 px-4">
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-xl">
          <img
            src={heritageImages[currentIndex]}
            alt={`Heritage Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500"
          />

          {/* Controls overlay */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            {/* Previous button */}
            <button
              onClick={previousSlide}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next button */}
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Play/Pause button */}
          <button
            onClick={togglePlayPause}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
        </div>

        {/* Progress indicators */}
        <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
          {heritageImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-gray-800 w-4" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <h3
        className="mt-5 text-3xl font-extrabold text-center"
        style={{ color: "#4e459a", marginBottom: "10px" }}
      >
        Legal Eagles Soaring
      </h3>

      <div className="flex items-center px-5 justify-center mb-5 gap-x-4">
        <div className="flex items-center px-5 justify-center mb-5 gap-x-4">
          <img
            src="https://clc.du.ac.in/wp-content/uploads/2023/04/CLC-Classroom-Clicked-by-Praveen-Tirkey-1536x864.jpg"
            style={{ width: "750px", height: "400px", objectFit: "cover" }}
          />
        </div>
      </div>

      <h3
        className="mt-5 text-3xl font-extrabold text-center"
        style={{ color: "#4e459a", marginBottom: "10px" }}
      >
        Reserved for Courtroom Crusaders
      </h3>

      <div className="flex items-center px-5 justify-center mb-5 gap-x-4">
        <div className="flex items-center px-5 justify-center mb-5 gap-x-4">
          <img
            src="https://clc.du.ac.in/wp-content/uploads/2023/04/MANISH-KUMAR-Cars-of-CLC-1536x1152.jpg"
            style={{ width: "750px", height: "400px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Campus;
