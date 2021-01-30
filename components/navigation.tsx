import React from "react";
import Link from "next/link";
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
        <Link href={previousPath} passHref>
          <Paper component="a" className={style.button}>
            <span className={style.iconPrev}>←</span>
            <span className={style.buttonText}>{previousLabel}</span>
          </Paper>
        </Link>
      )}
      {nextPath && (
        <Link href={nextPath} passHref>
          <Paper component="a" className={style.button}>
            <span className={style.buttonText}>{nextLabel}</span>
            <span className={style.iconNext}>→</span>
          </Paper>
        </Link>
      )}
    </div>
  ) : null;

export default Navigation;
