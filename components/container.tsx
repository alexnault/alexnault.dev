import React from "react";

type Props = {
  className?: string;
};

export default function Container({ className = "", ...props }: Props) {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <div className={`container mx-auto ${className}`} {...props} />
    </div>
  );
}
