function Sidebar1() {
  return (
    <div>
      {/* sidebar */}
      <div className="bg-zinc- h-[32rem] w-16 left-0 flex flex-col justify-center items-center gap-6 fixed">
        <div className="h-36 w-0.5 bg-zinc-900 absolute top-0"></div>
        <div className="w-9 h-9 cursor-pointer flex items-center p-1 relative ">
          <div className="bg w-full h-full object-contain transition-all duration-300 ease-in-out transform hover:scale-110 bg-[url('../assets/github-svgrepo-com.svg')] bg-cover bg-center hover:bg-[url('../assets/github-svgrepo-com.png')]"></div>
        </div>
        <div className="w-9 h-9 cursor-pointer flex items-center p-1 relative">
          <div className="bg bg-facebook-logo w-full h-full object-contain transition-all duration-300 transform hover:scale-110"></div>
        </div>
        <div className="w-8 h-8 cursor-pointer flex items-center p-1 relative">
          <div className="bg bg-gmail-logo w-full h-full object-contain transition-all duration-300 transform hover:scale-110"></div>
        </div>
        <div className="w-9 h-9 cursor-pointer flex items-center p-1 relative">
          <div className="bg bg-linkedin-logo w-full h-full object-contain transition-all duration-300 transform hover:scale-110"></div>
        </div>
        <div className="h-36 w-0.5 bg-zinc-900 absolute bottom-0"></div>
      </div>
    </div>
  );
}

export default Sidebar1;
