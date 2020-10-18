import React from "react";
import { Link } from "gatsby";
import { useTheme } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";

import Icon from "./icon";
import { useChangeTheme } from "./themeContext";

import style from "../styles/header.module.css";

const toggleIcon = `M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z`;

type Props = {
  siteLogo: any;
  logoText: string;
  defaultTheme: string;
};

const Header = ({ siteLogo, logoText, defaultTheme }: Props) => {
  const { palette } = useTheme();
  const changeTheme = useChangeTheme();
  // const defaultThemeState =
  //   (typeof window !== "undefined" && window.localStorage.getItem("theme")) ||
  //   null;
  // const [userTheme, changeTheme] = useState(defaultThemeState);

  // const theme = userTheme || defaultTheme;

  // const onChangeTheme = () => {
  //   const opositeTheme = theme === "light" ? "dark" : "light";

  //   changeTheme(opositeTheme);

  //   typeof window !== "undefined" &&
  //     window.localStorage.setItem("theme", opositeTheme);
  // };

  const handleChangeTheme = () => {
    changeTheme({ paletteType: palette.type === "dark" ? "light" : "dark" });
  };

  return (
    <Paper component="header" elevation={0} square className={style.header}>
      <div className={style.inner}>
        <Link to="/">
          <Typography color="textPrimary">
            <div className={style.logo}>
              {siteLogo.src ? (
                <img src={siteLogo.src} alt={siteLogo.alt} />
              ) : (
                <>
                  <span className={style.mark}>{">"}</span>
                  <span className={style.text}>{logoText}</span>
                  <span className={style.cursor} />
                </>
              )}
            </div>
          </Typography>
        </Link>
        <span className={style.right}>
          <button
            className={style.themeToggle}
            onClick={handleChangeTheme}
            type="button"
            aria-label="Theme toggle"
          >
            <Icon style={{ cursor: "pointer" }} size={24} d={toggleIcon} />
          </button>
        </span>
      </div>
    </Paper>
  );
};

export default Header;
