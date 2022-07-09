import React from "react";

const Banner = () => {
  return (
    <div>
      <h1 className="text-5xl font-[600] leading-[4rem]">
        Beginner- <span className="relative">friendly <div className="bg-[#f7ea33f1] -z-[10] absolute -top-0 -right-4 w-full h-10"/> </span> articles in simple{" "}
        <span className="relative">
          English. <div className="absolute h-2 w-full bg-[#13ff83]" />{" "}
        </span>
      </h1>
      <p className="my-4 text-lg p-2">
        Find articles and tutorials written by developers, for the developers.
      </p>
      <button className="bg-black text-white rounded-full px-4 py-2.5" >Discover</button>
    </div>
  );
};

export default Banner;
