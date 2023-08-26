import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-900 opacity-70 z-50 ease-in-out">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
