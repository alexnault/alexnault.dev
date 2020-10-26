import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const TwoPassRenderer = ({ children }: Props) => {
  // Fixes useTheme (incorect paletteType)
  const [currentPass, setCurrentPass] = useState(0);

  useEffect(() => {
    setCurrentPass(1);
  }, [setCurrentPass]);

  return <React.Fragment key={currentPass}>{children}</React.Fragment>;
};

export default TwoPassRenderer;
