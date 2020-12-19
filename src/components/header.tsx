import React from "react";
import { Link } from "gatsby";
import { useTheme } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";

import { useChangeTheme } from "./themeContext";
import DarkIcon from "./icons/dark";

import style from "../styles/header.module.css";

type Props = {
  logoText: string;
};

const Header = ({ logoText }: Props) => {
  const { palette } = useTheme();
  const changeTheme = useChangeTheme();

  const handleChangeTheme = () => {
    throw new Error("Sentry test");
    // changeTheme({ paletteType: palette.type === "dark" ? "light" : "dark" });
  };

  return (
    <header className={style.header}>
      <div className={style.inner}>
        <Link to="/">
          <Typography color="textPrimary" className={style.logo}>
            <span className={style.mark}>{">"}</span>
            <span className={style.text}>{logoText}</span>
            <span className={style.cursor} />
          </Typography>
        </Link>
        <span className={style.right}>
          <IconButton
            edge="end"
            onClick={handleChangeTheme}
            aria-label="Theme toggle"
          >
            <DarkIcon />
          </IconButton>
        </span>
      </div>
    </header>
  );
};

export default Header;
