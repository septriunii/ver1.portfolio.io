import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import Slideshow from "../functions/Slideshow";
import dots from "../assets/dots.png";
const Show = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div className="flex h-auto w-auto relative">
      <Slideshow images={images} interval={2000} />
      <img
        src={dots}
        alt=""
        className="absolute w-full h-full rounded-full transform rotate-12"
      />
    </div>
  );
};

export default Show;
