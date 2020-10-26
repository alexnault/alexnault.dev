import React from "react";
import { Link } from "gatsby";
import { Paper } from "@material-ui/core";

import style from "../styles/navigation.module.css";

type Props = {
  nextPath: string;
  previousPath: string;
  nextLabel: string;
  previousLabel: string;
};

const Navigation = ({
  nextPath,
  previousPath,
  nextLabel,
  previousLabel,
}: Props) =>
  previousPath || nextPath ? (
    <div className={style.navigation}>
      {previousPath && (
        <Paper component={Link} to={previousPath} className={style.button}>
          <span className={style.iconPrev}>←</span>
          <span className={style.buttonText}>{previousLabel}</span>
        </Paper>
      )}
      {nextPath && (
        <Paper component={Link} to={nextPath} className={style.button}>
          <span className={style.buttonText}>{nextLabel}</span>
          <span className={style.iconNext}>→</span>
        </Paper>
      )}
    </div>
  ) : null;

export default Navigation;
