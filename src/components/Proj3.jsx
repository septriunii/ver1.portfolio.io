import React, { useState } from "react";

function ImageDiv() {
  const [isHovered, setIsHovered] = useState(false);

  const handleContainerHover = () => {
    setIsHovered(true);
  };

  const handleContainerLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="h-full w-auto flex items-center p-5 pl-0 relative">
        {/* image */}

        <div
          id="border"
          className={`w-[570px] h-[360px] border-orange-600 border-2 absolute top-0 right-0 z-0 transition-all duration-300 ease-in-out ${
            isHovered ? "top-5 right-5" : ""
          }`}
        ></div>

        <div
          id="imgbg"
          className="h-[360px] w-[570px] flex items-center justify-center bg-slate-950"
        ></div>
        <div
          className={`h-[360px] w-[570px] flex items-center justify-center border-0 border-black absolute transition-all duration-1000 ease-in-out ${
            isHovered ? "bg-black opacity-70 p-5" : ""
          }`}
          onMouseEnter={handleContainerHover}
          onMouseLeave={handleContainerLeave}
        >
          <button
            className={`absolute  opacity-0 transition-all z-40 top-[40%] right-[50%] duration-300 ease-in-out ${
              isHovered ? "opacity-100" : ""
            }`}
          >
            Visit website
          </button>
          <button
            className={`absolute  opacity-0 transition-all z-40 top-[40%] right-[25%] duration-300 ease-in-out ${
              isHovered ? "opacity-100" : ""
            }`}
          >
            View code
          </button>
        </div>
        <p
          className={`bg-zinc-900 rounded-md absolute left-[33rem] w-[25rem] px-8 py-5 font-mono transition-all duration-500 ease-in-out ${
            isHovered ? "left-[39rem]" : ""
          }`}
        >
          Developed a comprehensive e-commerce website, ShopifyPro, that offers
          a seamless online shopping experience. The platform allows users to
          browse a wide range of products, add items to their cart, and securely
          complete transactions.
        </p>
      </div>
    </>
  );
}

export default ImageDiv;
