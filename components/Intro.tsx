import React from "react";
import Image from "next/image";
import authorImage from "@/public/images/authors/oleh.jpg";

const Intro = ({}) => {
  return (
    <section className="flex items-start gap-x-10 gap-y-4">
      <div className="mt-2 flex-1 md:mt-0">
        <h1 className="title no-underline">Hey, I'm Oleh</h1>
        <p className="text-sm text-gray-500">
          I'm a dedicated and experienced Frontend Developer based in Warsaw,
          Poland, with a strong background in web development, team leadership,
          and project management. Contributed to various sectors including
          e-commerce, fintech, and iGaming. For 10 years, I honed my skills in
          responsive design, e-commerce development, WordPress customization,
          React projects, and version control systems. My career journey
          reflects my ability to adapt, lead, and deliver high-quality results
          across various industries and projects.
        </p>
      </div>
      <div className="relative">
        <Image
          className="flex-1 rounded-lg grayscale"
          priority
          height={175}
          src={authorImage}
          alt="Oleh Miroshnychenko"
        />
      </div>
    </section>
  );
};

export default Intro;
