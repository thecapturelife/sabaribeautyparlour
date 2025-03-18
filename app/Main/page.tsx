import React from "react";

const Main = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/girl.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Welcome to Sabari&apos;s Beauty Parlour
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-2">
          Fresh cuts, sharp styles, and great vibes await
        </p>
      </div>
    </div>
  );
};

export default Main;
