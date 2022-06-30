import React from "react";
import Link from "next/link";

import Divider from "components/Divider";

type FooterLinkProps = {
  children?: React.ReactNode;
  href: string;
};

function FooterLink({ children, href }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-500 transition-colors hover:text-black"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="space-y-6 py-10 px-6">
      <nav className="flex justify-center">
        <FooterLink href="/">Home</FooterLink>
        <Divider className="mx-4 h-auto" />
        <FooterLink href="/about">About</FooterLink>
        <Divider className="mx-4 h-auto" />
        <FooterLink href="mailto:nault.alex@gmail.com">Contact</FooterLink>
        <Divider className="mx-4 h-auto" />
        <FooterLink href="https://github.com/alexnault/alexnault.dev">
          Source
        </FooterLink>
      </nav>
      <div className="flex justify-center ">
        <FooterLink href="https://github.com/alexnault">GitHub</FooterLink>
        <Divider className="mx-4 h-auto" />
        <FooterLink href="https://www.linkedin.com/in/naultalex">
          LinkedIn
        </FooterLink>
        <Divider className="mx-4 h-auto" />
        <FooterLink href="https://twitter.com/nault_alex">Twitter</FooterLink>
      </div>
    </footer>
  );
}
