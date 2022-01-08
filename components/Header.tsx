import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import DarkIcon from "./icons/Dark";
import LogoIcon from "./icons/Logo";

const buttons = [{ href: "/about", text: "About" }];

type HeaderButtonProps = {
  href: string;
  text: string;
};

function HeaderButton({ href, text }: HeaderButtonProps) {
  return (
    <Link href={href}>
      <a className="px-4 py-2 text-gray-500 hover:text-black hover:bg-gray-200 rounded-md transition-colors">
        {text}
      </a>
    </Link>
  );
}

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <header className="w-full fixed z-20 top-0 bg-white bg-opacity-80 dark:bg-opacity-60 backdrop-filter backdrop-blur backdrop-saturate-150">
      <div className="flex items-center justify-between h-16 px-6 py-4 container max-w-4xl mx-auto">
        <Link href="/">
          <a className="flex items-center p-2 leading-none">
            <LogoIcon size="lg" className="mr-2" />
            <span className="text-lg font-bold">alexnault</span>
          </a>
        </Link>
        <div className="flex items-center">
          <nav className="px-2">
            {buttons.map(({ href, text }) => (
              <HeaderButton key={href} href={href} text={text} />
            ))}
          </nav>
          <button
            className="text-gray-300 hover:text-black transition-colors p-2 leading-none"
            onClick={handleChangeTheme}
            aria-label="Toggle theme"
          >
            <DarkIcon size="sm" />
          </button>
        </div>
      </div>
    </header>
  );
}
