import React from "react";
import Link from "next/link";
import { useTheme } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";

import { useChangeTheme } from "./themeContext";
import DarkIcon from "./icons/dark";
import LogoIcon from "./icons/logo";

import style from "styles/header.module.css";

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
    <header className={style.header}>
      <div className={style.inner}>
        <Link href="/">
          <a className={style.logo}>
            <LogoIcon width={30} height={30} className={style.svg} />
            <Typography variant="body2">
              <b>{logoText}</b>
            </Typography>
          </a>
        </Link>
        <IconButton
          edge="end"
          onClick={handleChangeTheme}
          aria-label="Toggle theme"
        >
          <DarkIcon />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
