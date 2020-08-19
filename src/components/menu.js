import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Icon from "./icon";

import style from "../styles/menu.module.css";

const MainMenu = ({ mainMenu, mainMenuItems, isMobileMenu }) => {
  const menu = mainMenu.slice(0);
  !isMobileMenu && menu.splice(mainMenuItems);

  return menu.map((menuItem, index) => (
    <li key={index}>
      <Link to={menuItem.path}>{menuItem.title}</Link>
    </li>
  ));
};

const SubMenu = ({ mainMenu, mainMenuItems, onToggleSubMenu }) => {
  const menu = mainMenu.slice(0);
  menu.splice(0, mainMenuItems);

  const items = menu.map((menuItem, index) => (
    <li key={index}>
      <Link to={menuItem.path}>{menuItem.title}</Link>
    </li>
  ));

  return (
    <>
      {items}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className={style.subMenuOverlay}
        role="button"
        tabIndex={0}
        onClick={onToggleSubMenu}
      />
    </>
  );
};

const menuIcon = `M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z`;
const toggleIcon = `M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z`;

const Menu = ({
  mainMenu,
  mainMenuItems,
  menuMoreText,
  isMobileMenuVisible,
  isSubMenuVisible,
  onToggleMobileMenu,
  onToggleSubMenu,
  onChangeTheme,
}) => {
  const isSubMenu = !(mainMenuItems >= mainMenu.length) && mainMenuItems > 0;

  return (
    <>
      {/* <div className={style.mobileMenuContainer}>
        <>
          {isMobileMenuVisible ? (
            <>
              <ul className={style.mobileMenu}>
                <MainMenu mainMenu={mainMenu} isMobileMenu />
              </ul>
              <div
                onClick={onToggleMobileMenu}
                className={style.mobileMenuOverlay}
              />
            </>
          ) : null}
          <button
            className={style.menuTrigger}
            style={{ color: "inherit" }}
            onClick={onToggleMobileMenu}
            type="button"
            aria-label="Menu"
          >
            <Icon style={{ cursor: "pointer" }} size={24} d={menuIcon} />
          </button>
        </>
      </div>
      <div className={style.desktopMenuContainer}>
        <ul className={style.menu}>
          <MainMenu mainMenu={mainMenu} mainMenuItems={mainMenuItems} />
          {isSubMenu ? (
            <>
              <button
                className={style.subMenuTrigger}
                onClick={onToggleSubMenu}
                type="button"
                aria-label="Menu"
              >
                {menuMoreText || "Menu"}{" "}
                <span className={style.menuArrow}>{">"}</span>
              </button>
              {isSubMenuVisible ? (
                <ul className={style.subMenu}>
                  <SubMenu
                    mainMenu={mainMenu}
                    mainMenuItems={mainMenuItems}
                    onToggleSubMenu={onToggleSubMenu}
                  />
                </ul>
              ) : null}
            </>
          ) : null}
        </ul>
      </div> */}
      <button
        className={style.themeToggle}
        onClick={onChangeTheme}
        type="button"
        aria-label="Theme toggle"
      >
        <Icon style={{ cursor: "pointer" }} size={24} d={toggleIcon} />
      </button>
    </>
  );
};

Menu.propTypes = {
  mainMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    })
  ),
  mainMenuItems: PropTypes.number,
  menuMoreText: PropTypes.string,
  isMobileMenuVisible: PropTypes.bool,
  isSubMenuVisible: PropTypes.bool,
  onToggleMobileMenu: PropTypes.func,
  onToggleSubMenu: PropTypes.func,
  onChangeTheme: PropTypes.func,
};

SubMenu.propTypes = {
  mainMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    })
  ),
  mainMenuItems: PropTypes.number,
  onToggleSubMenu: PropTypes.func,
};

export default Menu;
