import { useState, useEffect } from "react";

const Slideshow = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const timer = setInterval(nextImage, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images, interval]);

  return (
    <div className="slideshow relative justify-center items-center">
      <img
        src={images[currentImageIndex]}
        alt={`Slideshow Image ${currentImageIndex + 1}`}
        className="h-full w-full bg-cover rounded-full "
      />
    </div>
  );
};

export default Slideshow;
