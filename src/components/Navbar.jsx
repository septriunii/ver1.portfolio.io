function Navbar() {
  return (
    <div>
      <div className="bg-zinc-900 w-full h-24 fixed top-0 left-0 flex items-center justify-between">
        <section className="ml-5">logo</section>
        <section className="flex gap-5 mr-5">
          <div>About Me</div>
          <div>Skills</div>
          <div>Projects</div>
          <div>Experience</div>
          <div>Get in touch</div>
        </section>
      </div>

      {/* sidebar */}
      <div className="bg-zinc-900 h-[32rem] w-24 fixed left-0"></div>
      <div className="bg-zinc-900 h-[32rem] w-24 fixed right-0"></div>
    </div>
  );
}

export default Navbar;
