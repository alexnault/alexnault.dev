import React, { useState } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import Menu from "./menu";

import style from "../styles/header.module.css";

type Props = {
  siteLogo: any;
  logoText: string;
  defaultTheme: string;
  mainMenu: {
    title: string;
    path: string;
  }[];
  mainMenuItems: number;
  menuMoreText: string;
};

const Header = (props: Props) => {
  const {
    siteLogo,
    logoText,
    mainMenu,
    mainMenuItems,
    menuMoreText,
    defaultTheme,
  } = props;
  const defaultThemeState =
    (typeof window !== "undefined" && window.localStorage.getItem("theme")) ||
    null;
  const [userTheme, changeTheme] = useState(defaultThemeState);
  const [isMobileMenuVisible, toggleMobileMenu] = useState(false);
  const [isSubMenuVisible, toggleSubMenu] = useState(false);

  const theme = userTheme || defaultTheme;

  const onChangeTheme = () => {
    const opositeTheme = theme === "light" ? "dark" : "light";

    changeTheme(opositeTheme);

    typeof window !== "undefined" &&
      window.localStorage.setItem("theme", opositeTheme);
  };
  const onToggleMobileMenu = () => toggleMobileMenu(!isMobileMenuVisible);
  const onToggleSubMenu = () => toggleSubMenu(!isSubMenuVisible);

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
            <Menu
              mainMenu={mainMenu}
              mainMenuItems={mainMenuItems}
              isMobileMenuVisible={isMobileMenuVisible}
              isSubMenuVisible={isSubMenuVisible}
              menuMoreText={menuMoreText}
              onToggleMobileMenu={onToggleMobileMenu}
              onToggleSubMenu={onToggleSubMenu}
              onChangeTheme={onChangeTheme}
            />
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
