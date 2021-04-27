import React from "react";
import Image from "next/image";
import { IconButton, useTheme } from "@material-ui/core";
import { H } from "react-headings";

import GitHubIcon from "./icons/github";
import LinkedInIcon from "./icons/linkedin";
import TwitterIcon from "./icons/twitter";
import EmailIcon from "./icons/email";

const About = () => {
  const { palette } = useTheme();

  return (
    <div className="flex flex-col sm:flex-row items-center mt-0 mx-auto mb-8 max-w-5xl">
      <div className="flex justify-center my-6 flex-shrink-0">
        <div
          className="w-40 h-40 sm:w-60 sm:h-60 overflow-hidden rounded-full relative shadow-xl"
          style={{ backgroundColor: palette.divider }}
        >
          <Image src="/alex.webp" alt="Alex Nault" layout="fill" />
        </div>
      </div>
      <div className="sm:flex-1 sm:ml-8">
        <H className="text-3xl md:text-5xl font-bold mb-4 md:mb-8">
          {"Hi, I'm Alex Nault and I solve problems using software."}
        </H>
        <p className="text-gray-500 text-lg md:text-xl mb-4 md:leading-relaxed">
          {"I'm currently building solutions at "}
          <strong>Apprentx</strong>
          {" to improve the way we learn. Previously "}
          <strong>Classcraft</strong>
          {" and "}
          <strong>Ubisoft</strong>.
        </p>
        <div className="mx-1">
          <IconButton
            edge="start"
            component="a"
            href="https://github.com/alexnault"
            aria-label="Github"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/naultalex"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://twitter.com/nault_alex"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:nault.alex@gmail.com"
            aria-label="Email"
          >
            <EmailIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default About;
