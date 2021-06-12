import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import DarkIcon from "./icons/dark";
import LogoIcon from "./icons/logo";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <header className="w-full bg-white bg-opacity-70 backdrop-filter backdrop-blur fixed z-20 top-0">
      <div className="flex items-center justify-between h-16 px-6 py-4 container max-w-4xl mx-auto">
        <Link href="/">
          <a className="flex items-center p-2 leading-none">
            <LogoIcon size="lg" className="mr-2" />
            <span className="text-lg font-bold">alexnault</span>
          </a>
        </Link>
        <button
          className="text-gray-300 hover:text-black transition-colors p-2 leading-none"
          onClick={handleChangeTheme}
          aria-label="Toggle theme"
        >
          <DarkIcon size="sm" />
        </button>
      </div>
    </header>
  );
};

export default Header;
