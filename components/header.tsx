import React from "react";
import Link from "next/link";
import { IconButton } from "@material-ui/core";

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
          <LogoIcon width={30} height={30} className="mr-2" />
          <span className="text-lg font-bold">{logoText}</span>
        </a>
      </Link>
      <IconButton
        edge="end"
        onClick={handleChangeTheme}
        aria-label="Toggle theme"
      >
        <DarkIcon />
      </IconButton>
    </header>
  );
};

export default Header;
