import React from "react";

import style from "../styles/button.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
  return <button className={style.button} {...props} />;
};

export default Button;
