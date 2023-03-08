import React from "react";
import Marquee from "react-fast-marquee";

export default function Positions() {
  return (
    <section
      className="flex text-white gap-4 text-6xl lg:text-8xl font-bold  bg-slate-600"
      style={{ textShadow: "0 0 5px black" }}
    >
      <Marquee
        speed={70}
        gradientColor={[100, 116, 139]}
        className="overflow-hidden lg:pb-3 pb-2"
      >
        <div className="mx-3 md:mx-4 lg:mx-5">FRONTEND</div>
        <div className="mx-3 md:mx-4 lg:mx-5">BACKEND</div>
        <div className="mx-3 md:mx-4 lg:mx-5">FULLSTACK</div>
      </Marquee>
    </section>
  );
}
