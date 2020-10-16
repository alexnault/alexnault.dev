import React, { useState } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import Icon from "./icon";

import style from "../styles/header.module.css";

const toggleIcon = `M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z`;

type Props = {
  siteLogo: any;
  logoText: string;
  defaultTheme: string;
};

const Header = (props: Props) => {
  const { siteLogo, logoText, defaultTheme } = props;
  const defaultThemeState =
    (typeof window !== "undefined" && window.localStorage.getItem("theme")) ||
    null;
  const [userTheme, changeTheme] = useState(defaultThemeState);

  const theme = userTheme || defaultTheme;

  const onChangeTheme = () => {
    const opositeTheme = theme === "light" ? "dark" : "light";

    changeTheme(opositeTheme);

    typeof window !== "undefined" &&
      window.localStorage.setItem("theme", opositeTheme);
  };

  return (
    <>
      <Helmet>
        <body className={theme === "light" ? "light-theme" : "dark-theme"} />
      </Helmet>
      <header className={style.header}>
        <div className={style.inner}>
          <Link to="/">
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
          </Link>
          <span className={style.right}>
            <button
              className={style.themeToggle}
              onClick={onChangeTheme}
              type="button"
              aria-label="Theme toggle"
            >
              <Icon style={{ cursor: "pointer" }} size={24} d={toggleIcon} />
            </button>
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
