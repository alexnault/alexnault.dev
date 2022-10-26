import React from "react";
import Image from "next/image";
import { H } from "react-headings";

import GitHubIcon from "./icons/GitHub";
import LinkedInIcon from "./icons/LinkedIn";
import TwitterIcon from "./icons/Twitter";
import EmailIcon from "./icons/Email";

import alexWebp from "public/alex.webp";

type SocialButtonProps = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

function SocialButton({ icon, title, href }: SocialButtonProps) {
  return (
    <a
      href={href}
      className="p-2 leading-none text-gray-400 transition-colors hover:text-black"
      aria-label={title}
    >
      {icon}
    </a>
  );
}

export default function Overview() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center sm:flex-row">
      <div className="mb-6 flex shrink-0 justify-center sm:mb-0">
        <div className="relative h-40 w-40 sm:h-48 sm:w-48 lg:h-60 lg:w-60">
          <Image
            src={alexWebp}
            alt="Alex Nault"
            fill
            sizes="(max-width: 640px) 160px, 240px"
            placeholder="blur"
            className="rounded-full bg-gray-100 shadow-xl"
          />
        </div>
      </div>
      <div className="sm:ml-12 sm:flex-1 md:ml-16">
        <H className="mb-4 text-center text-3xl font-bold sm:text-left md:mb-8 md:text-4xl lg:text-5xl">
          {"Hi, I'm Alex Nault and I solve problems using software."}
        </H>
        <p className="mb-3 text-center text-lg text-gray-500 sm:text-left md:text-xl md:leading-relaxed">
          {
            "I'm currently building solutions at Apprentx as a Software Architect. Previously Classcraft and Ubisoft."
          }
        </p>
        <div className="flex justify-center space-x-2 sm:-mx-2 sm:justify-start">
          <SocialButton
            title="GitHub"
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
}
