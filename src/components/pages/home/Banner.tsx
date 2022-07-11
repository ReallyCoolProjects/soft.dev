import React from "react";
import RoundedBtn from "../../resuable/RoundedBtn";

const Banner = () => {
  return (
    <div>
      <h1 className="text-5xl font-[600] leading-[4rem]">
        Beginner- <span className="relative">friendly <div className="bg-yellow -z-[10] absolute -top-0 -right-4 w-full h-10"/> </span> articles in simple{" "}
        <span className="relative">
          English. <div className="absolute h-2 w-full bg-green" />{" "}
        </span>
      </h1>
      <p className="my-4 text-lg p-2">
        Find articles and tutorials written by developers, for the developers.
      </p>
      <RoundedBtn action={"Discover"} primary= {'green'} hover= {"[#95de18]"}/>
      
    </div>
  );
};

export default Banner;
