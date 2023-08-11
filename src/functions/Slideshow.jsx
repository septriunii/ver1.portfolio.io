// import { useState, useEffect } from "react";

// const Slideshow = ({ images, interval = 3000 }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const nextImage = () => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     const timer = setInterval(nextImage, interval);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [images, interval]);

//   return (
//     <div className=" relative justify-center items-center">
//       <img
//         src={images[currentImageIndex]}
//         alt={`Slideshow Image ${currentImageIndex + 1}`}
//         className="h-full w-full bg-cover rounded-full "
//       />
//     </div>
//   );
// };

// export default Slideshow;

import { useState, useEffect } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import dots from "../assets/dots.png";

const images = [img1, img2, img3];

function Slideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2500); //
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container ">
      <div className=" w-full relative">
        <img
          src={dots}
          alt=""
          className="absolute rounded-full transform rotate-12 z-10 top-0 right-0 h-auto w-auto"
        />
        {images.map((image, index) => (
          <img
            key={index} // Set key to index
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slide rounded-full absolute top-0 right-0  ${
              index === currentImage ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
