function Sidebar1() {
  return (
    <div>
      {/* sidebar */}
      <div className="bg-zinc- h-[32rem] w-16 left-0 flex flex-col justify-center items-center gap-6 fixed ">
        <div className="h-36 w-0.5 bg-zinc-900 absolute top-0"></div>

        <div className="w-9 h-9 cursor-pointer flex items-center p-1 relative">
          <a
            href="https://github.com/Septriunii"
            target="_blank"
            rel="noreferrer"
            className="bg w-full h-full object-contain transition-opacity duration-500 ease-out bg-[url('../assets/github-svgrepo-com.svg')] opacity-70 hover:opacity-100  hover:bg-[url('../assets/github-svgrepo-com.png')]  bg bg-cover bg-center"
          ></a>
        </div>

        <div className="w-9 h-9 cursor-pointer flex items-center p-1 relative">
          <a
            href="https://www.facebook.com/anthony.alabado.37/"
            target="_blank"
            rel="noreferrer"
            className="bg w-full h-full object-contain transition-opacity duration-500 ease-out opacity-70 hover:opacity-100 bg-[url('../assets/facebook-svgrepo-com.svg')] hover:bg-[url('../assets/facebook-svgrepo-com.png')]  bg bg-cover bg-center"
          ></a>
        </div>
        <div className="w-8 h-8 cursor-pointer flex items-center p-1 relative">
          <a
            href="mailto:anthonyalabado@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="bg w-full h-full object-contain transition-opacity duration-500 ease-out opacity-70 hover:opacity-100  bg-[url('../assets/gmail-svgrepo-com.svg')] hover:bg-[url('../assets/gmail-svgrepo-com.png')] bg bg-cover bg-center"
          ></a>
        </div>
        <div className="w-9 h-9 cursor-pointer flex items-center p-1 relative">
          <a
            href="https://www.linkedin.com/in/anthony-alabado-7b5112279/"
            target="_blank"
            rel="noreferrer"
            className="bg w-full h-full object-contain transition-opacity duration-500 ease-out opacity-70 hover:opacity-100  bg-[url('../assets/linkedin-svgrepo-com.svg')] hover:bg-[url('../assets/linkedin-svgrepo-com.png')] bg bg-cover bg-center"
          ></a>
        </div>
        <div className="h-36 w-0.5 bg-zinc-900 absolute bottom-0"></div>
      </div>
    </div>
  );
}

export default Sidebar1;
