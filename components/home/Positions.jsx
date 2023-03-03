import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function Positions() {
  return (
    <section
      className="flex text-white gap-4 text-5xl lg:text-8xl font-bold  bg-slate-600"
      style={{ textShadow: "0 0 5px black" }}
    >
      <Marquee
        speed={70}
        gradientColor={[100, 116, 139]}
        className="overflow-hidden pb-3"
      >
        <div className="mx-3 md:mx-4 lg:mx-5">FRONTEND</div>
        <div className="mx-3 md:mx-4 lg:mx-5">BACKEND</div>
        <div className="mx-3 md:mx-4 lg:mx-5">FULLSTACK</div>
      </Marquee>
    </section>
  );
}