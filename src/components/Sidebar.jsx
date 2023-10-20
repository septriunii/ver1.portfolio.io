function Sidebar1() {
  return (
    <>
      {/* sidebar */}
      <main className="bg-zinc- h-[32rem] w-16 left-0 flex flex-col justify-center items-center gap-6 fixed -right-10">
        <section className="h-36 w-0.5 bg-zinc-900 absolute top-0"></section>

        <figure className="w-9 h-9 cursor-pointer flex items-center p-1 relative">
          <a
            href="https://github.com/Septriunii"
            target="_blank"
            rel="noreferrer"
            className="w-full h-full  duration-300 ease-out grayscale hover:grayscale-0 opacity-40 hover:opacity-100  bg-[url('../assets/github-svgrepo-com.png')]  bg-cover "
          ></a>
        </figure>

        <figure className="w-9 h-9 cursor-pointer flex items-center p-1 relative">
          <a
            href="https://www.facebook.com/anthony.alabado.37/"
            target="_blank"
            rel="noreferrer"
            className="w-full h-full  duration-300 ease-out opacity-40 hover:opacity-100 bg-[url('../assets/facebook-svgrepo-com.png')] grayscale hover:grayscale-0  bg-cover "
          ></a>
        </figure>
        <figure className="w-8 h-8 cursor-pointer flex items-center p-1 relative">
          <a
            href="mailto:anthonyalabado@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="w-full h-full  duration-300 ease-out  opacity-40 hover:opacity-100  bg-[url('../assets/gmail-svgrepo-com.png')] grayscale hover:grayscale-0 bg-cover "
          ></a>
        </figure>
        <figure className="w-9 h-9 cursor-pointer flex items-center p-1 relative">
          <a
            href="https://www.linkedin.com/in/anthony-alabado"
            target="_blank"
            rel="noreferrer"
            className="w-full h-full duration-500 ease-in-out opacity-40 hover:opacity-100  bg-[url('../assets/linkedin-svgrepo-com.png')] grayscale hover:grayscale-0 bg-cover "
          ></a>
        </figure>
        <section className="h-36 w-0.5 bg-zinc-900 absolute bottom-0"></section>
      </main>
    </>
  );
}

export default Sidebar1;
