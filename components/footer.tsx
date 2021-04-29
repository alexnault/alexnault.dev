import React from "react";

import Divider from "components/divider";

const Footer = () => (
  <footer className="flex justify-center py-10 px-4">
    <a href="https://github.com/alexnault" className="text-gray-500 sm:text-lg">
      GitHub
    </a>
    <Divider className="h-auto mx-4" />
    <a
      href="https://www.linkedin.com/in/naultalex"
      className="text-gray-500 sm:text-lg"
    >
      LinkedIn
    </a>
    <Divider className="h-auto mx-4" />
    <a
      href="https://twitter.com/nault_alex"
      className="text-gray-500 sm:text-lg"
    >
      Twitter
    </a>
  </footer>
);

export default Footer;
