import React from "react";
import Link from "next/link";

import DarkIcon from "./icons/dark";
import LogoIcon from "./icons/logo";

type Props = {
  logoText: string;
};

const Header = ({ logoText }: Props) => {
  const handleChangeTheme = () => {
    // TODO change theme
  };

  return (
    <header className="flex items-center justify-between p-4 container max-w-4xl mx-auto h-16">
      <Link href="/">
        <a className="flex items-center">
          <LogoIcon size="lg" className="mr-2" />
          <span className="text-lg font-bold">{logoText}</span>
        </a>
      </Link>
      <button
        className="text-gray-500 hover:text-gray-600 transition-colors"
        onClick={handleChangeTheme}
        aria-label="Toggle theme"
      >
        <DarkIcon />
      </button>
    </header>
  );
};

export default Header;
