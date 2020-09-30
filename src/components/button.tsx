import React from "react";

import style from "../styles/button.module.css";

type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return <button className={style.button}>{children}</button>;
};

export default Button;
