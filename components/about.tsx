import React from "react";
import Image from "next/image";
import { H } from "react-headings";

import GitHubIcon from "./icons/github";
import LinkedInIcon from "./icons/linkedin";
import TwitterIcon from "./icons/twitter";
import EmailIcon from "./icons/email";

type SocialButtonProps = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

const SocialButton = ({ icon, title, href }: SocialButtonProps) => {
  return (
    <a
      href={href}
      className="text-gray-500 hover:text-gray-600 transition-colors"
      aria-label={title}
    >
      {icon}
    </a>
  );
};

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center mt-0 mx-auto mb-8 max-w-5xl">
      <div className="flex justify-center my-6 flex-shrink-0">
        <div className="w-40 h-40 sm:w-60 sm:h-60 overflow-hidden rounded-full relative shadow-xl bg-gray-200">
          <Image src="/alex.webp" alt="Alex Nault" layout="fill" />
        </div>
      </div>
      <div className="sm:flex-1 sm:ml-8">
        <H className="text-3xl md:text-5xl font-bold mb-4 md:mb-8">
          {"Hi, I'm Alex Nault and I solve problems using software."}
        </H>
        <p className="text-gray-600 text-lg md:text-xl mb-4 md:leading-relaxed">
          {"I'm currently building solutions at "}
          <strong>Apprentx</strong>
          {" as a software architect. Previously "}
          <strong>Classcraft</strong>
          {" and "}
          <strong>Ubisoft</strong>.
        </p>
        <div className="space-x-8">
          <SocialButton
            title="Github"
            href="https://github.com/alexnault"
            icon={<GitHubIcon />}
          />
          <SocialButton
            title="LinkedIn"
            href="https://www.linkedin.com/in/naultalex"
            icon={<LinkedInIcon />}
          />
          <SocialButton
            title="Twitter"
            href="https://twitter.com/nault_alex"
            icon={<TwitterIcon />}
          />
          <SocialButton
            title="Email"
            href="mailto:nault.alex@gmail.com"
            icon={<EmailIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
