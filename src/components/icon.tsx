import React from "react";

import style from "../styles/icon.module.css";

type Props = {
  d: string;
  size?: number | string;
  label?: string;
  style?: any;
};

const Icon = (props: Props) => {
  const { d, size = "1em", label, style: styles } = props;

  return (
    <span className={style.root} style={styles} role="figure">
      <svg
        version="1.1"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={d} className={style.icon} />
      </svg>
      {label && <span className={style.label}>{label}</span>}
    </span>
  );
};

export default Icon;
