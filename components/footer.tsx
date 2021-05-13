import React from "react";

import Divider from "components/divider";

type FooterLinkProps = {
  title: string;
  href?: string;
};

function FooterLink({ title, href }: FooterLinkProps) {
  return (
    <a href={href} className="text-gray-500 sm:text-lg hover:text-gray-600">
      {title}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="flex justify-center py-10 px-4">
      <FooterLink title="GitHub" href="https://github.com/alexnault" />
      <Divider className="h-auto mx-4" />
      <FooterLink
        title="LinkedIn"
        href="https://www.linkedin.com/in/naultalex"
      />
      <Divider className="h-auto mx-4" />
      <FooterLink title="Twitter" href="https://twitter.com/nault_alex" />
    </footer>
  );
}
