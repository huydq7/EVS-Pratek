"use client";

import { Intro } from "./Intro/intro";
import { Navbar } from "./Navbar/navbar";

export default function Heading() {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <Navbar initialActiveHeading={0} />
      <Intro />
    </div>
  );
}
