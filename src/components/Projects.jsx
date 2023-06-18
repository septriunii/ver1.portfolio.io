function Projects() {
  return (
    <>
      <div className="h-[30rem] w-[70rem] mt-32 bg-zinc-900 flex">
        <div className="h-full w-[30rem] bg-red-600 flex flex-col gap-7 items-center"></div>
        <div className="h-full w-[40rem] bg-zinc-800 flex flex-col gap-7 justify-center">
          <h1 className="font-bold text-2xl"> My Projects</h1>
          <h2 className="font-bold text-lg">ShopifyPro</h2>
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
    </>
  );
}

export default Projects;
