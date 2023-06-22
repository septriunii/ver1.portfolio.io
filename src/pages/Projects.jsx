function Projects() {
  return (
    <>
      <div className="h-[30rem] w-[70rem] mt-52 flex flex-col">
        <h1 className="font-bold text-3xl p-3 text-orange-600">My Projects</h1>
        <div className="flex h-full">
          <div className="h-full w-[40%] flex items-center">
            {/* container */}
            <div
              id="imgbg"
              className="w-full h-[75%] flex items-center justify-center bg-slate-950 hover:w-90% hover:h-[65%]"
            >
              {/* image */}
              <div className="h-full w-full relative p-2 hover:w-[95%] hover:h-[95%]">
                {/* border */}
                <div className="w-full h-full border-orange-600 border-2 absolut"></div>
              </div>
            </div>
          </div>
          <div className="h-full w-[100%] flex flex-col gap-4  p-2 text-justify font-mono ml-5 ">
            <h1>ShopifyPro</h1>
            <p className="bg-slate-900 p-3 rounded-md">
              Developed a comprehensive e-commerce website, ShopifyPro, that
              offers a seamless online shopping experience. The platform allows
              users to browse a wide range of products, add items to their cart,
              and securely complete transactions.
            </p>
            <div className="flex gap-5">
              <p>ReactJS</p>
              <p> Tailwind CSS</p>
              <p> MongoDB</p>
            </div>
            <div className=" flex gap-5">
              {/* github or visit */}
              <div className="bg-slate-700 h-10 w-10"></div>
              <div className="bg-slate-700 h-10 w-10"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
