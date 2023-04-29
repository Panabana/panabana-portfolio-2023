// src/components/About.js

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4x text-3x1 mb-4 font-medium text-white">
            Hi, I'm Alex (@Panabana)
            <br className="hidden lg:inline-block" />Focus on the bottom-line. Make things efficient.
          </h1>
          <p className="mb-8 leading-relaxed">
            Thank you for visiting my website. It means alot to me. I've worked with programming & IT for 2 years now.
            My past years in other industries (Film production & Hospitality) have equipped me with an interdisciplinary set of skills,
            which combine with my current studies in ICT and software development. I'm going to be updating this website and showcase more highlights in the near future. Thanks again, and looking forward to get in touch with you.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-1/4 md:w-1/4 w-4/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./aboutalex.jpg"
          />
        </div>
      </div>
    </section>
  );
}