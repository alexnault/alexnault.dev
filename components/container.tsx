import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function Container({ className = "", ...props }: Props) {
  return (
    <div className="px-6 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <div className={`container mx-auto ${className}`} {...props} />
    </div>
  );
}
