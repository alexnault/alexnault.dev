import React from "react";
import Link from "next/link";
import { useTheme } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

import { useChangeTheme } from "./themeContext";
import DarkIcon from "./icons/dark";
import LogoIcon from "./icons/logo";

type Props = {
  logoText: string;
};

const Header = ({ logoText }: Props) => {
  const { palette } = useTheme();
  const changeTheme = useChangeTheme();

  const handleChangeTheme = () => {
    changeTheme({ paletteType: palette.type === "dark" ? "light" : "dark" });
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
