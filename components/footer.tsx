import React from "react";
import Link from "next/link";

import Divider from "components/divider";

type FooterLinkProps = {
  children?: React.ReactNode;
  href?: string;
};

function FooterLink({ children, href }: FooterLinkProps) {
  return (
    <a href={href} className="transition-colors text-gray-500 hover:text-black">
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="py-10 px-6 space-y-6">
      <nav className="flex justify-center">
        <Link href="/" passHref>
          <FooterLink>Home</FooterLink>
        </Link>
        <Divider className="h-auto mx-4" />
        <Link href="/about" passHref>
          <FooterLink>About</FooterLink>
        </Link>
        <Divider className="h-auto mx-4" />
        <FooterLink href="mailto:nault.alex@gmail.com">Contact</FooterLink>
        <Divider className="h-auto mx-4" />
        <FooterLink href="https://github.com/alexnault/alexnault.dev">
          Source
        </FooterLink>
      </nav>
      <div className="flex justify-center ">
        <FooterLink href="https://github.com/alexnault">GitHub</FooterLink>
        <Divider className="h-auto mx-4" />
        <FooterLink href="https://www.linkedin.com/in/naultalex">
          LinkedIn
        </FooterLink>
        <Divider className="h-auto mx-4" />
        <FooterLink href="https://twitter.com/nault_alex">Twitter</FooterLink>
      </div>
    </footer>
  );
}
