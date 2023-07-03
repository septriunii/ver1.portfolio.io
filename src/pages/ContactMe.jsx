function GetInTouch() {
  return (
    <>
      <div id="contact" className="h-[30rem] w-[70rem] mt-32 p-2 mb-32">
        <div className=" h-full">
          <h1 className="font-bold text-4xl py-3 text-orange-600 flex justify-center items-center pl-5 mb-12  w-full">
            <div className="h-0.5 w-full bg-zinc-900"></div>

            <p className="flex w-[35rem] justify-center italic">Contact Me</p>
            <div className="h-0.5 w-full bg-zinc-900"></div>
          </h1>
          <div className="flex h-full mt-8">
            <div className="h-[70%] w-[100%] flex flex-col gap-5  p-5 text-justify font-light bg-zinc-700 bg-opacity-20 rounded-lg relative">
              <div className="flex flex-col gap-2">
                <p className=" bg-zinc-900 p-3">
                  If you're seeking a Frontend Web Developer who is committed to
                  delivering exceptional web experiences, leveraging ReactJS and
                  Tailwind CSS expertise, I would be delighted to connect and
                  explore opportunities to work together. Let's bring your
                  vision to life and create remarkable digital experiences that
                  leave a lasting impact.
                </p>
              </div>
              <div className="flex flex-col gap-5 mt-5">
                <div className="h-full w-full flex justify-center gap-10 mt-10">
                  <a
                    href="https://www.facebook.com/anthony.alabado.37/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/facebook-svgrepo-com.svg')] bg-cover bg-center "></div>
                  </a>
                  <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/gmail-svgrepo-com.svg')] bg-cover bg-center "></div>

                  <a
                    href="https://github.com/Septriunii"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/github-svgrepo-com.svg')] bg-cover bg-center "></div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/anthony-alabado-7b5112279/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="h-14 w-14  hover:scale-125 transition duration-300 ease-in-out cursor-pointer bg-[url('../assets/linkedin-svgrepo-com.svg')] bg-cover bg-center "></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetInTouch;
