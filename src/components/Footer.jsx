function Footer() {
  return (
    <div
      id="footer"
      className=" w-full h-24 mt-10 left-0 relative flex justify-center items-center"
    >
      <div className="m-5 absolute bottom-0 justify-center items-center flex flex-col">
        <a
          href="https://github.com/Septriunii/ver1.portfolio.io"
          target="_blank"
          rel="noreferrer"
        >
          <p className="ml-3 text-xs md:text-sm lg:text-base text-orange-600 font-semibold italic cursor-pointer">
            Anthony Alabado
          </p>
        </a>

        <p className="ml-3 text-xs lg:text-sm text-zinc-500 font-mono">2023</p>
      </div>
    </div>
  );
}

export default Footer;
