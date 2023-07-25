import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import Slideshow from "../functions/Slideshow";

const Show = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div className="flex h-auto w-auto">
      <Slideshow
        images={images}
        interval={2000}
        className="ease-in-out transition-transform duration-300 w-full h-full"
      />
      {/* <div className="bg-blue-900 w-full h-full absolute"></div> */}
    </div>
  );
};

export default Show;
